import requests
from django.conf import settings

CLERK_SECRET_KEY = getattr(settings, "pk_test_bm92ZWwtYW5jaG92eS0xMy5jbGVyay5hY2NvdW50cy5kZXYk", "pk_test_bm92ZWwtYW5jaG92eS0xMy5jbGVyay5hY2NvdW50cy5kZXYk")

def clerk_session_middleware(get_response):
    def middleware(request):
        session_id = request.headers.get("Session-Id")
        if session_id:
            url = f"https://api.clerk.dev/v1/sessions/{session_id}"
            headers = {"Authorization": f"Bearer {CLERK_SECRET_KEY}"}
            response = requests.get(url, headers=headers)
            if response.status_code == 200:
                request.clerk_user = response.json()
            else:
                request.clerk_user = None
        return get_response(request)
    return middleware
