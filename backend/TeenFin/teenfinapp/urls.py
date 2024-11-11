# app_name/urls.py

from django.urls import path
from .views import SignUpTeenager, SignUpParent, LoginView, DashboardView

urlpatterns = [
    path('signup/teenager/', SignUpTeenager.as_view(), name='signup-teenager'),
    path('signup/parent/', SignUpParent.as_view(), name='signup-parent'),
    path('login/', LoginView.as_view(), name='login'),
    path('dashboard/teenager/<int:pk>/', DashboardView.as_view(), name='dashboard-teenager'),
]