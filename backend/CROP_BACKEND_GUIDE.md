# 🧠 TO_DO_APP - Backend

Welcome to the backend of the **TO_DO_APP**!  
This Flask-powered API is designed to support intelligent **crop yield prediction** using machine learning. It serves as the engine behind the TO_DO_APP, handling model training, prediction, and testing.

---

## 🗂️ Project Structure

| File/Directory       | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `server.py`          | Flask application that defines the `/predict` route for yield predictions. |
| `train.py`           | Script to train and save a Random Forest Regression model.                 |
| `test_request.py`    | Sends a sample POST request to the prediction endpoint for testing.         |
| `crop_yield_model.pkl` | Pre-trained ML model used by the backend (created via `train.py`).       |

---

## 🚀 Getting Started

### 📦 Prerequisites

Make sure you have Python 3.7+ installed. Then install the necessary packages:

```bash
pip install flask pandas scikit-learn joblib numpy
```

> 💡 You can also use a `requirements.txt` file for dependency management.

### ▶️ Running the Server

```bash
python server.py
```

The API will be live at:  
📍 `http://localhost:5000/predict`

---

## 🔍 API Endpoint – `/predict`

### 📮 POST `/predict`

Sends data to the model and receives predicted yield.

#### ✅ Sample Request:

```json
{
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
```

#### 📤 Sample Response:

```json
{
  "predicted_yield": 1289.45
}
```

---

## 🧠 Model Details

| Feature              | Description                                |
|----------------------|--------------------------------------------|
| Crop Name            | Name of the crop (categorical)             |
| Crop Year            | Year of cultivation                        |
| Season               | Season (e.g., Kharif, Rabi)                |
| State                | State where crop is grown                  |
| Area                 | Cultivated area (in hectares)              |
| State-wise production| Reference production value (metric tonnes) |
| Rainfall             | Rainfall in mm                             |
| Fertilizer usage     | Fertilizer usage in kg                     |
| Pesticide            | Pesticide usage (in tonnes)                |
| Soil Type            | Type of soil (categorical)                 |

- **Model**: Random Forest Regressor  
- **Target**: Crop Yield (Kg/ton)

> 📌 The model is trained using `train.py` and saved as `crop_yield_model.pkl`.

---

## 🧪 Local Testing

Run the test client to simulate a prediction request:

```bash
python test_request.py
```

This will output the predicted crop yield in the terminal.

---

## 🛠 Technologies Used

- 🐍 Python 3
- 🌐 Flask (API framework)
- 🤖 Scikit-learn (ML model)
- 📊 Pandas, NumPy (data processing)
- 🧠 Random Forest Regression (algorithm)

---


## 📸 Screenshots

| 🏠 Server View |
|-------------|
| ![Server View] (https://github.com/Ankitajoshi2002/TO_DO_APP/image/BACKEND_SERVER.png) |

---

## 👩‍💻 Author

**Ankita Joshi**  
🎓 MCA Student, Graphic Era Deemed to be University  
💻 Passionate about Web Development, Machine Learning, and Data Science  
🔧 Skills: Python, Flask, React, MongoDB, MySQL, Scikit-learn, and more.

---

## 📬 Contact

📧 Email: ankita.joshi2002@gmail.com  
🌐 GitHub: [Ankitajoshi2002](https://github.com/Ankitajoshi2002)

---

> ✅ **Pro Tip**: Pair this backend with the TO_DO_APP frontend for a complete experience!
