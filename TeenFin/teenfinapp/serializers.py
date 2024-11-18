# app_name/serializers.py

from rest_framework import serializers
from .models import Parent, Teenager, DailyExpense, MonthlySaving

class ParentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parent
        fields = ['id', 'name', 'address', 'upi_id', 'aadhaar_number']

class TeenagerSerializer(serializers.ModelSerializer):
    parent = ParentSerializer(read_only=True)  # Nested serializer for parent details
    parent_id = serializers.PrimaryKeyRelatedField(
        queryset=Parent.objects.all(),
        source='parent',
        write_only=True
    )  # Allow setting parent using ID

    class Meta:
        model = Teenager
        fields = ['id', 'name', 'address', 'upi_id', 'aadhaar_number', 'parent', 'parent_id']

class DailyExpenseSerializer(serializers.ModelSerializer):
    teenager = TeenagerSerializer(read_only=True)  # Nested serializer for teenager details
    teenager_id = serializers.PrimaryKeyRelatedField(
        queryset=Teenager.objects.all(),
        source='teenager',
        write_only=True
    )  # Allow setting teenager using ID

    class Meta:
        model = DailyExpense
        fields = ['id', 'teenager', 'teenager_id', 'date', 'category', 'amount', 'description']

class MonthlySavingSerializer(serializers.ModelSerializer):
    teenager = TeenagerSerializer(read_only=True)  # Nested serializer for teenager details
    teenager_id = serializers.PrimaryKeyRelatedField(
        queryset=Teenager.objects.all(),
        source='teenager',
        write_only=True
    )  # Allow setting teenager using ID

    class Meta:
        model = MonthlySaving
        fields = ['id', 'teenager', 'teenager_id', 'month', 'amount_saved', 'goal_description']