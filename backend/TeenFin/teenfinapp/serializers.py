# app_name/serializers.py

from rest_framework import serializers
from .models import Parent, Teenager

class ParentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parent
        fields = ['id', 'name', 'address', 'upi_id', 'aadhaar_number']

class TeenagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teenager
        fields = ['id', 'name', 'address', 'upi_id', 'aadhaar_number', 'parent']