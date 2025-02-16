import json
import os
from pymongo import MongoClient
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get the MongoDB connection string from .env
CONNECTION_STRING = os.getenv("CONNECTION_STRING")

def get_database(db_name):
    """Connect to MongoDB and return the database object."""
    try:
        client = MongoClient(CONNECTION_STRING)
        return client[db_name]
    except Exception as e:
        print(f"Error connecting to MongoDB: {e}")
        return None

def insert_document(db_name, collection_name, data):
    """Insert a document into a MongoDB collection."""
    db = get_database(db_name)
    if db:
        collection = db[collection_name]
        result = collection.insert_one(data)
        return result.inserted_id
    return None

def get_documents(db_name, collection_name):
    """Retrieve all documents from a MongoDB collection."""
    db = get_database(db_name)
    if db is not None:
        collection = db[collection_name]
        documents =  list(collection.find())
        for doc in documents:
            doc["_id"] = str(doc["_id"])
        return documents
    return []

@csrf_exempt  # Disable CSRF for testing (remove this in production)
def post_json_response(request):
    if request.method == "POST":
        info = request.body
        try:
            # Parse the incoming JSON request body
            data = json.loads(request.body)
            name = data.get("name", "Guest")

            # Fetch documents from MongoDB
            products = get_documents("Mall", "seller")

            if products is None:
                response_data = {
                    "message": "No products found.",
                    "status": "error",
                    "data": []
                }
            else:
                response_data = {
                    "message": f"Hello, {name}!",
                    "status": "success",
                    "products": products  # Include MongoDB data in the response
                }
        except json.JSONDecodeError:
            response_data = {"error": "Invalid JSON"}
        except Exception as e:
            response_data = {"error": f"Something went wrong: {e}"}

        return JsonResponse(response_data)

    return JsonResponse({"error": "Only POST requests allowed"}, status=405)
