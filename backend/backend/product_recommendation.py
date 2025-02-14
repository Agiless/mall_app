from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

# Sample product dataset
data = {
    'Product_ID': list(range(20)),
    'Names': [
        'Nike Air Force 1', 'Adidas Ultraboost', 'Bata Formal Shoes', 'Sony WH-1000XM5 Headphones',
        'Samsung Galaxy S23', 'Apple MacBook Pro M2', 'Samsung 42-inch Smart TV', 'Polo Ralph Lauren T-Shirt',
        'Ray-Ban Aviator Sunglasses', 'Garmin Forerunner 255', 'Razer BlackWidow V4 Keyboard',
        'Logitech MX Master 3 Mouse', 'Ikea Nordviken Dining Table', 'Herman Miller Aeron Chair',
        'Philips HL7756 Mixer Grinder', 'Hydro Flask 1L Water Bottle', 'Twinings Organic Green Tea',
        'Chanel No. 5 Perfume', 'Neutrogena Hydro Boost Moisturizer', 'Fitbit Charge 5'
    ],
    'Description': [
        'Leather shoes for men', 'Running shoes for women', 'Formal black shoes', 'Wireless Bluetooth headphones',
        'Smartphone with 128GB storage', 'Laptop with Intel i7 processor', 'LED 42-inch Smart TV',
        'Cotton t-shirt for men', 'Stylish sunglasses for women', 'Sports wristwatch with GPS',
        'Gaming keyboard with RGB lights', 'Wireless mouse with ergonomic design', 'Wooden dining table set',
        'Leather office chair with cushion', 'Kitchen mixer grinder with 750W motor', 'Stainless steel water bottle 1L',
        'Organic green tea pack', 'Perfume with floral fragrance', 'Face moisturizer for dry skin',
        'Smart fitness band with heart rate monitor'
    ]
}

df = pd.DataFrame(data)

# Convert product descriptions into TF-IDF features
tfidf = TfidfVectorizer()
tfidf_matrix = tfidf.fit_transform(df['Description'])

def recommend_products_by_keyword(user_input, tfidf, tfidf_matrix, df, top_n=3):
    """Recommend products based on a user input keyword."""
    # Transform user input into TF-IDF vector
    user_tfidf = tfidf.transform([user_input])

    # Compute cosine similarity between user input and all product descriptions
    similarity_scores = cosine_similarity(user_tfidf, tfidf_matrix).flatten()

    # Get top N similar products
    similar_indices = similarity_scores.argsort()[::-1][:top_n]

    # Display recommended products
    print(f"\nTop {top_n} recommendations for '{user_input}':\n")
    for idx in similar_indices:
        print(f"Product ID: {df.iloc[idx]['Product_ID']}")
        print(f"Product Name: {df.iloc[idx]['Names']}")
        print(f"Description: {df.iloc[idx]['Description']}\n")

# Get user input keyword
user_input = input("Enter a product keyword (e.g., Shoes, Laptop, Watch): ")
recommend_products_by_keyword(user_input, tfidf, tfidf_matrix, df)
