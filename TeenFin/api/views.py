# app_name/views.py

from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.shortcuts import get_object_or_404
from rest_framework.exceptions import PermissionDenied
from django.db.models import Sum

from .models import Parent, Teenager, DailyExpense, MonthlySaving
from .serializers import ParentSerializer, TeenagerSerializer, DailyExpenseSerializer, MonthlySavingSerializer

# Sign-Up Views
class SignUpTeenager(generics.CreateAPIView):
    queryset = Teenager.objects.all()
    serializer_class = TeenagerSerializer
    permission_classes = [permissions.AllowAny]  # Allow any user to access this view

    def perform_create(self, serializer):
        # Create the Teenager instance without username and password
        serializer.save()

class SignUpParent(generics.CreateAPIView):
    queryset = Parent.objects.all()
    serializer_class = ParentSerializer
    permission_classes = [permissions.AllowAny]  # Allow any user to access this view

    def perform_create(self, serializer):
        # Create the Parent instance without username and password
        serializer.save()

# Login View
class LoginView(APIView):
    permission_classes = [permissions.AllowAny]  # Allow any user to access this view

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

# Establish Parent-Teenager Relationship
class LinkTeenagerToParent(APIView):
    permission_classes = [permissions.AllowAny]  # Allow any user to access this view

    def post(self, request):
        teenager_username = request.data.get("teenager_username")
        parent_username = request.data.get("parent_username")

        teenager_user = get_object_or_404(User, username=teenager_username)
        parent_user = get_object_or_404(User, username=parent_username)

        if not hasattr(teenager_user, 'teenager'):
            return Response({"error": "Provided username does not belong to a teenager."}, status=status.HTTP_400_BAD_REQUEST)

        # Establish relationship
        teenager = teenager_user.teenager
        parent = parent_user.parent

        teenager.parent = parent
        teenager.save()

        return Response({"message": f"Teenager {teenager.name} linked to parent {parent.name}."}, status=status.HTTP_200_OK)

# Dashboard and Expense Views
class DashboardView(generics.RetrieveAPIView):
    permission_classes = [permissions.AllowAny]  # Allow any user to access this view

    def get(self, request, pk):
        teenager = get_object_or_404(Teenager, pk=pk)

        daily_expenses = DailyExpense.objects.filter(teenager=teenager)
        monthly_savings = MonthlySaving.objects.filter(teenager=teenager)

        total_expenses = daily_expenses.aggregate(total=Sum('amount'))['total'] or 0
        total_savings = monthly_savings.aggregate(total=Sum('amount_saved'))['total'] or 0

        expenses_data = DailyExpenseSerializer(daily_expenses, many=True).data
        savings_data = MonthlySavingSerializer(monthly_savings, many=True).data

        response_data = {
            "teenager": {
                "id": teenager.id,
                "name": teenager.name,
                "address": teenager.address,
            },
            "total_expenses": total_expenses,
            "total_savings": total_savings,
            "daily_expenses": expenses_data,
            "monthly_savings": savings_data,
        }
        return Response(response_data)

class ExpenseCategoryBreakdownView(APIView):
    permission_classes = [permissions.AllowAny]  # Allow any user to access this view

    def get(self, request):
        expenses = DailyExpense.objects.all()  # Allow access to all expenses
        breakdown = expenses.values('category').annotate(total=Sum('amount'))

        data = {
            "categories": [entry['category'] for entry in breakdown],
            "totals": [entry['total'] for entry in breakdown],
        }
        return Response(data)

# Daily Expense Views
class DailyExpenseListCreateView(generics.ListCreateAPIView):
    queryset = DailyExpense.objects.all()
    serializer_class = DailyExpenseSerializer
    permission_classes = [permissions.AllowAny]  # Allow any user to access this view

    def perform_create(self, serializer):
        serializer.save()  # Save without linking to a teenager

class DailyExpenseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DailyExpense.objects.all()
    serializer_class = DailyExpenseSerializer
    permission_classes = [permissions.AllowAny]  # Allow any user to access this view

# Monthly Saving Views
class MonthlySavingListCreateView(generics.ListCreateAPIView):
    queryset = MonthlySaving.objects.all()
    serializer_class = MonthlySavingSerializer
    permission_classes = [permissions.AllowAny]  # Allow any user to access this view

    def perform_create(self, serializer):
        serializer.save()  # Save without linking to a teenager

class MonthlySavingDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MonthlySaving.objects.all()
    serializer_class = MonthlySavingSerializer
    permission_classes = [permissions.AllowAny]  # Allow any user to access this view