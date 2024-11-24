from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated
from .models import Category, Income, Savings, Expense
from .serializers import CategorySerializer, IncomeSerializer, SavingsSerializer, ExpenseSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class IncomeView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = IncomeSerializer

    def get_object(self):
        return Income.objects.get_or_create(user=self.request.user)[0]

class SavingsView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = SavingsSerializer

    def get_object(self):
        return Savings.objects.get_or_create(user=self.request.user)[0]

class ExpenseViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = ExpenseSerializer

    def get_queryset(self):
        return Expense.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
