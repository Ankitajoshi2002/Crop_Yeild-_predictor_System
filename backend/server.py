from flask import Flask, request, jsonify
import joblib
import pandas as pd
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app)  # Allows React frontend to communicate

# Setup logging
logging.basicConfig(level=logging.DEBUG)

# Load the trained model
model = joblib.load("crop_yield_model.pkl")

# Load CSV once to extract dropdown options
csv_path = "C:/Users/ankit/Desktop/React_projects/crop_yield_predictor/BACKEND/DATASET/updated_cropyield.csv"
df = pd.read_csv(csv_path)

@app.route('/')
def home():
    return "Crop Yield Predictor API is running."

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        app.logger.debug(f"Received input data: {data}")

        # Check if all necessary data is provided
        if not all([data.get("crop_name"), data.get("crop_year"), data.get("season"), 
                    data.get("state"), data.get("area"), data.get("rainfall"),
                    data.get("fertilizer_usage"), data.get("pesticide"), data.get("soil_type")]):
            return jsonify({"error": "Missing one or more required fields"}), 400
        
        # Create a DataFrame from input JSON
        input_df = pd.DataFrame([{
            "Crop Name": data.get("crop_name"),
            "Crop_Year": data.get("crop_year"),
            "Season": data.get("season"),
            "State": data.get("state"),
            "Area": data.get("area"),
            "State-wise production": data.get("state_wise_production"),
            "Rainfall": data.get("rainfall"),
            "Fertilizer usage": data.get("fertilizer_usage"),
            "Pesticide": data.get("pesticide"),
            "Soil Type": data.get("soil_type")
        }])

        # Log the DataFrame to ensure correct data format
        app.logger.debug(f"Input DataFrame: {input_df}")

        # Predict using the model
        prediction = model.predict(input_df)[0]
        predicted_yield_kg = prediction * 1000  # Convert tons to kilograms

        # Send the predicted yield in tons per hectare
        return jsonify({"predicted_yield_ton_per_hectare": predicted_yield_kg / 1000})

    except Exception as e:
        app.logger.error(f"Error during prediction: {str(e)}")
        return jsonify({"error": str(e)}), 400

@app.route('/options', methods=['GET'])
def get_options():
    try:
        options = {
            "crop_name": sorted(df["Crop Name"].dropna().unique().tolist()),
            "crop_year": sorted(df["Crop_Year"].dropna().unique().tolist()),
            "season": sorted(df["Season"].dropna().unique().tolist()),
            "state": sorted(df["State"].dropna().unique().tolist()),
            "soil_type": sorted(df["Soil Type"].dropna().unique().tolist())
        }
        return jsonify(options)
    except Exception as e:
        app.logger.error(f"Error retrieving options: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)
