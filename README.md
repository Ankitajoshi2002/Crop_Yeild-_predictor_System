# 🌾 Crop_Yeild-_predictor_System

An intelligent full-stack machine learning web application designed to predict crop yield based on various agricultural factors. Built with **React.js** (frontend) and **Flask** (backend), it helps farmers, researchers, and policymakers make informed, data-driven decisions.

---

## 📁 Project Structure

| Folder / File               | Description                                     |
|-----------------------------|-------------------------------------------------|
| `/frontend`                 | React-based UI for user interaction             |
| `/backend`                  | Flask backend with ML model and API             |
| `/image`                    | Visual previews and screenshots                 |
| `CROP_FRONTEND_README.md`  | Detailed documentation for frontend setup       |
| `CROP_BACKEND_README.md`   | Detailed documentation for backend & model      |

---

## 📊 Dataset Review

The model is trained using a structured dataset containing various crop-related attributes. Key features include:

| Feature              | Description                                    |
|----------------------|------------------------------------------------|
| `Area`               | Country or region where the crop is grown      |
| `Item`               | Name of the crop (e.g., Rice, Wheat, Maize)    |
| `Year`               | Year of data recording                         |
| `Crop_Yield`         | Yield produced in kilograms per tonne          |
| `Rainfall_mm`        | Rainfall in millimeters                        |
| `Pesticides_tonnes`  | Pesticide usage in tonnes                      |
| `Temperature_c`      | Average annual temperature in °C               |

📁 **Dataset File**: `refined_yield_data.csv`  
📈 Used to train a Random Forest Regressor for accurate predictions based on environmental and agricultural inputs.

---

## 🧭 Component Docs

### 🔷 Frontend

➡️ [**View Frontend README**](https://github.com/Ankitajoshi2002/Crop_Yeild-_predictor_System/blob/main/CROP_FRONTEND_README.md)  
Includes setup, routing, component screenshots, and user flow.

### 🔶 Backend

➡️ [**View Backend README**](https://github.com/Ankitajoshi2002/Crop_Yeild-_predictor_System/blob/main/CROP_BACKEND_README.md)  
Covers ML pipeline, Flask server, API endpoints, and testing.

---

## 🚀 How to Run the Project

### 🧪 Backend Setup

```bash
cd backend
pip install -r requirements.txt
python train.py
python server.py
```

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 📬 API Endpoint

`POST /predict`  
Sends a JSON input payload and returns predicted crop yield (Kg/Tonne).

```http
http://localhost:5000/predict
```

---

## 👩‍💻 Author

**Ankita Joshi**  
🎓 MCA, Graphic Era Deemed to be University, Dehradun  
📫 Email: ankita.joshi2002@gmail.com  
🌐 GitHub: [Ankitajoshi2002](https://github.com/Ankitajoshi2002)

---

> 🧠 *For detailed guides, screenshots, and source code, explore the dedicated Frontend and Backend READMEs above.*
