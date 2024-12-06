from django.urls import path
from .views import validate_session

urlpatterns = [
    path("validate-session", validate_session, name="validate_session"),
]
