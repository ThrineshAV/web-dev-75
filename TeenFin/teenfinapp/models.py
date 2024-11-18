# app_name/models.py

from django.db import models

class Parent(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    upi_id = models.CharField(max_length=100)
    aadhaar_number = models.CharField(max_length=12)

    def __str__(self):
        return self.name

class Teenager(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    upi_id = models.CharField(max_length=100)
    aadhaar_number = models.CharField(max_length=12)
    parent = models.ForeignKey(Parent, related_name='teenagers', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class DailyExpense(models.Model):
    CATEGORY_CHOICES = [
        ('Rent', 'Rent/Dormitory Fees'),
        ('Utilities', 'Utilities'),
        ('Food', 'Food'),
        ('Tuition', 'Tuition and Fees'),
        ('Supplies', 'Textbooks and Supplies'),
        ('Transportation', 'Transportation'),
        ('Clothing', 'Clothing and Accessories'),
        ('PersonalCare', 'Personal Care'),
        ('Entertainment', 'Entertainment'),
        ('PhoneBill', 'Phone Bill'),
        ('HealthInsurance', 'Health Insurance'),
        ('Loans', 'Student Loans'),
        ('EmergencyFund', 'Emergency Fund'),
    ]

    teenager = models.ForeignKey(Teenager, related_name='daily_expenses', on_delete=models.CASCADE)
    date = models.DateField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True, null=True)  # Optional details about the expense

    def __str__(self):
        return f"{self.teenager.name} - {self.category} - {self.date}"

class MonthlySaving(models.Model):
    teenager = models.ForeignKey(Teenager, related_name='monthly_savings', on_delete=models.CASCADE)
    month = models.DateField()  # Store the first day of the month (e.g., '2024-11-01')
    amount_saved = models.DecimalField(max_digits=10, decimal_places=2)
    goal_description = models.TextField(blank=True, null=True)  # Optional savings goal

    def __str__(self):
        return f"{self.teenager.name} - {self.month.strftime('%B %Y')} - {self.amount_saved}"