# app_name/urls.py

from django.urls import path
from .views import *
urlpatterns = [
    path('signup/teenager/', SignUpTeenager.as_view(), name='signup-teenager'),
    path('signup/parent/', SignUpParent.as_view(), name='signup-parent'),
    path('login/', LoginView.as_view(), name='login'),
    path('dashboard/teenager/<int:pk>/', DashboardView.as_view(), name='dashboard-teenager'),
    
    # Daily Expense URLs
    path('expenses/', DailyExpenseListCreateView.as_view(), name='daily-expense-list-create'),
    path('expenses/<int:pk>/', DailyExpenseDetailView.as_view(), name='daily-expense-detail'),
    
    # Monthly Saving URLs
    path('savings/', MonthlySavingListCreateView.as_view(), name='monthly-saving-list-create'),
    path('savings/<int:pk>/', MonthlySavingDetailView.as_view(), name='monthly-saving-detail'),
]