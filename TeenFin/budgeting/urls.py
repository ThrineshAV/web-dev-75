from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, IncomeView, SavingsView, ExpenseViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'expenses', ExpenseViewSet, basename='expense')

urlpatterns = [
    path('income/', IncomeView.as_view(), name='income'),
    path('savings/', SavingsView.as_view(), name='savings'),
    path('', include(router.urls)),
]

