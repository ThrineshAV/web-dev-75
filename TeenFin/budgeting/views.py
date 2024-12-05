from rest_framework import viewsets, generics
from rest_framework.permissions import AllowAny
from .models import Category, Income, Savings, Expense
from .serializers import CategorySerializer, IncomeSerializer, SavingsSerializer, ExpenseSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]

class IncomeView(generics.RetrieveUpdateAPIView):
    serializer_class = IncomeSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        return Income.objects.first()  # or some other logic to get the Income object

class SavingsView(generics.RetrieveUpdateAPIView):
    serializer_class = SavingsSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        return Savings.objects.first()  # or some other logic to get the Savings object

class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    permission_classes = [AllowAny]