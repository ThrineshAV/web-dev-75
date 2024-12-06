from rest_framework import viewsets, generics
from rest_framework.permissions import AllowAny
from .models import Category, Income, Savings, Expense
from .serializers import CategorySerializer, IncomeSerializer, SavingsSerializer, ExpenseSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]

class IncomeView(generics.RetrieveUpdateAPIView):
    permission_classes = [AllowAny]
    serializer_class = IncomeSerializer

    def get_object(self):
        return Income.objects.first()  # This will return the first Income object or None if it doesn't exist

class SavingsView(generics.RetrieveUpdateAPIView):
    permission_classes = [AllowAny]
    serializer_class = SavingsSerializer

    def get_object(self):
        return Savings.objects.first()  # This will return the first Savings object or None if it doesn't exist

class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        serializer.save()  # Remove the user association