from rest_framework import serializers
from .models import Month

class MonthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Month
        fields = [
            'id', 'january', 'february', 'march', 'april', 
            'may', 'june', 'july', 'august', 
            'september', 'october', 'november', 'december'
        ]
