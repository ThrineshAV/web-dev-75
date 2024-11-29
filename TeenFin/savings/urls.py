from django.urls import path
from .views import MonthListCreateView, MonthRetrieveUpdateDeleteView

urlpatterns = [
    path('months/', MonthListCreateView.as_view(), name='month-list-create'),
    path('months/<int:pk>/', MonthRetrieveUpdateDeleteView.as_view(), name='month-retrieve-update-delete'),
]
