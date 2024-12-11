from rest_framework import serializers
from .models import Category, Income, Savings, Expense

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = '__all__'

class SavingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Savings
        fields = '__all__'

class ExpenseSerializer(serializers.ModelSerializer):
    # For creating/updating
    
    class Meta:
        model = Expense
        fields = '__all__'
        
