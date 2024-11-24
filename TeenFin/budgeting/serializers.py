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
    category = CategorySerializer(read_only=True)  # Nested category
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source='category', write_only=True
    )  # For creating/updating

    class Meta:
        model = Expense
        fields = ['id', 'name', 'amount', 'date', 'category', 'category_id']
