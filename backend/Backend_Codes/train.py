# train.py
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.metrics import mean_squared_error
import joblib

# Load dataset
df = pd.read_csv("C:/Users/ankit/Desktop/React_projects/crop_yield_predictor/BACKEND/DATASET/updated_cropyield.csv")

# Features and target
X = df.drop(columns=["Yield"])
y = df["Yield"]

# Identify categorical and numerical columns
categorical_cols = ["Crop Name", "Season", "State", "Soil Type"]
numerical_cols = [col for col in X.columns if col not in categorical_cols]

# Preprocessing pipelines
numerical_transformer = SimpleImputer(strategy="mean")
categorical_transformer = Pipeline(steps=[
    ("imputer", SimpleImputer(strategy="most_frequent")),
    ("onehot", OneHotEncoder(handle_unknown="ignore"))
])

# Column transformer for preprocessing
preprocessor = ColumnTransformer(
    transformers=[
        ("num", numerical_transformer, numerical_cols),
        ("cat", categorical_transformer, categorical_cols)
    ]
)

# Full pipeline with preprocessing and model
model = Pipeline(steps=[
    ("preprocessor", preprocessor),
    ("regressor", RandomForestRegressor(n_estimators=100, random_state=42))
])

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model.fit(X_train, y_train)

# Predict and evaluate
preds = model.predict(X_test)
mse_val = mean_squared_error(y_test, preds)
rmse = np.sqrt(mse_val)

print("RMSE:", rmse)

# Save the model
joblib.dump(model, "crop_yield_model.pkl")
print("Model trained and saved as crop_yield_model.pkl")
