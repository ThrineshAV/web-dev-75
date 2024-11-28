from django.urls import path
from .views import MonthListCreateView, MonthRetrieveUpdateDeleteView

urlpatterns = [
    path('api/months/', MonthListCreateView.as_view(), name='month-list-create'),
    path('api/months/<int:pk>/', MonthRetrieveUpdateDeleteView.as_view(), name='month-retrieve-update-delete'),
]
