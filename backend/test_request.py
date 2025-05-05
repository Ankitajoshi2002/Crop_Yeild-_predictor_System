import requests

url = "http://localhost:5000/predict"

sample_input = {
    "Crop Name": "cotton(lint)",
    "Crop_Year": 2025,
    "Season": "Kharif",
    "State": "Gujrat",
    "Area": 2000,
    "State-wise production": 800,
    "Rainfall": 1900,
    "Fertilizer usage": 160000,
    "Pesticide": 0.05,
    "Soil Type": "Coastal sandy soil orlaterite soil"
}

response = requests.post(url, json=sample_input)
print("Response:", response.json())
