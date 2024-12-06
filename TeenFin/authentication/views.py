import requests
from django.http import JsonResponse
from django.conf import settings

CLERK_SECRET_KEY = "pk_test_bm92ZWwtYW5jaG92eS0xMy5jbGVyay5hY2NvdW50cy5kZXYk"

def validate_session(request):
    if request.method != "POST":
        return JsonResponse({"error": "Invalid request method"}, status=405)

    data = request.POST
    session_id = data.get("sessionId")
    if not session_id:
        return JsonResponse({"error": "Session ID is required"}, status=400)

    # Call Clerk API to validate the session
    url = f"https://api.clerk.dev/v1/sessions/{session_id}"
    headers = {
        "Authorization": f"Bearer {CLERK_SECRET_KEY}",
    }
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        session_data = response.json()
        return JsonResponse({"message": "Session is valid", "user": session_data})
    else:
        return JsonResponse({"error": "Invalid session"}, status=401)


# Create your views here.
