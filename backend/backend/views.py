from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt  # Disable CSRF for testing (remove this in production)
def post_json_response(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)  # Parse JSON request body
            name = data.get("name", "Guest")
            response_data = {
                "message": f"Hello, {name}!",
                "status": "success"
            }
        except json.JSONDecodeError:
            response_data = {"error": "Invalid JSON"}
        
        return JsonResponse(response_data)

    return JsonResponse({"error": "Only POST requests allowed"}, status=405)
