# app_name/models.py

from django.db import models
from django.core.validators import RegexValidator

class Parent(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    upi_id = models.CharField(max_length=100, unique=True)  # Ensure UPI ID is unique
    aadhaar_number = models.CharField(max_length=12, unique=True, validators=[
        RegexValidator(regex='^\d{12}$', message='Aadhaar number must be 12 digits long.')
    ])  # Validate Aadhaar number format

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Parent"
        verbose_name_plural = "Parents"

class Teenager(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    upi_id = models.CharField(max_length=100)  # Consider adding validation if needed
    aadhaar_number = models.CharField(max_length=12, validators=[
        RegexValidator(regex='^\d{12}$', message='Aadhaar number must be 12 digits long.')
    ])  # Validate Aadhaar number format
    parent = models.ForeignKey(Parent, related_name='teenagers', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Teenager"
        verbose_name_plural = "Teenagers"

class DailyExpense(models.Model):
    CATEGORY_CHOICES = [
        ('Rent', 'Rent/Dormitory Fees'),
        ('Food', 'Food'),
        ('Tuition', 'Tuition and Fees'),
        ('Transportation', 'Transportation'),
        ('Shopping', 'Shopping'),
        ('Entertainment', 'Movie/Events'),
        ('PhoneBill', 'Phone Bill'),
        ('Loans', 'Student Loans'),
    ]

    teenager = models.ForeignKey(Teenager, related_name='daily_expenses', on_delete=models.CASCADE)
    date = models.DateField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True, null=True)  # Optional field

    def __str__(self):
        return f"{self.category} - {self.amount} on {self.date} by {self.teenager.name}"

    class Meta:
        verbose_name = "Daily Expense"
        verbose_name_plural = "Daily Expenses"
        ordering = ['date']  # Order by date by default

class MonthlySaving(models.Model):
    teenager = models.ForeignKey(Teenager, related_name='monthly_savings', on_delete=models.CASCADE)
    month = models.DateField()  # Store the first day of the month (e.g., '2024-11-01')
    amount_saved = models.DecimalField(max_digits=10, decimal_places=2)
    goal_description = models.TextField(blank=True, null=True )  # Optional savings goal

    def __str__(self):
        return f"{self.teenager.name} - {self.month.strftime('%B %Y')} - {self.amount_saved}"

    class Meta:
        verbose_name = "Monthly Saving"
        verbose_name_plural = "Monthly Savings"
        ordering = ['month']  # Order by month by default