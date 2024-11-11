# app_name/views.py

from rest_framework import generics, permissions
from .models import Parent, Teenager
from .serializers import ParentSerializer, TeenagerSerializer
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password

class SignUpTeenager(generics.CreateAPIView):
    queryset = Teenager.objects.all()
    serializer_class = TeenagerSerializer

    def perform_create(self, serializer):
        # You can add more validation here if needed
        serializer.save()

class SignUpParent(generics.CreateAPIView):
    queryset = Parent.objects.all()
    serializer_class = ParentSerializer

    def perform_create(self, serializer):
        serializer.save()

class LoginView(generics.GenericAPIView):
    def post(self, request):
        # Implement your login logic here (e.g., check credentials)
        return Response({"message": "Login successful"}, status=status.HTTP_200_OK)

class DashboardView(generics.RetrieveAPIView):
    queryset = Teenager.objects.all()
    serializer_class = TeenagerSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        # You can implement logic to get the authenticated user
        return self.request.user