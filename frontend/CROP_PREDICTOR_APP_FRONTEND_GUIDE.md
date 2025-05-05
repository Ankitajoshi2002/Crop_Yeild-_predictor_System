# 🌾 Crop Yield Predictor – Frontend

This is the **React.js-based frontend** for the intelligent Crop Yield Prediction System. It provides a smooth, animated user interface to enter crop-related data and receive yield predictions from the backend ML model.

---

## ✨ Features

- 🎨 Stylish UI with `styled-components`
- 🎥 Smooth animations using `framer-motion`
- 📤 Integrated form for user input
- 🔁 Real-time communication with Flask backend
- 🌐 Easily customizable and scalable

---

## 🧰 Tech Stack

| Technology      | Role                        |
|-----------------|-----------------------------|
| React.js        | Frontend framework           |
| styled-components | CSS-in-JS styling         |
| Framer Motion   | UI animations                |
| Axios or Fetch  | API communication            |
| HTML + CSS      | UI structure & base styling  |

---

## 🖼 UI Screenshots

### 🏡 Home Page

![Home Page](https://github.com/Ankitajoshi2002/Crop_Yeild-_predictor_System/blob/5a18cb7d509becd4cc90086c568935a379391e81/image/Frontend_HOME_preview.png)

---

### 📋 Prediction Form

![Prediction Form](https://github.com/Ankitajoshi2002/Crop_Yeild-_predictor_System/blob/5a18cb7d509becd4cc90086c568935a379391e81/image/Frontend_PForm_preview.png)

---

### ℹ️ About Page

![About Page](https://github.com/Ankitajoshi2002/Crop_Yeild-_predictor_System/blob/5a18cb7d509becd4cc90086c568935a379391e81/image/Frontend_ABOUT_preview.png)

---

### 🖥️ Backend Server View

![Server View](https://github.com/Ankitajoshi2002/Crop_Yeild-_predictor_System/blob/aff4f520967b96d280aad47f93c6b5f7962ce5a1/image/BACKEND_SERVER.png)

---

## 📁 Folder Structure

```
frontend/
├── App.js               # Main app component
├── App.css              # Styling
├── index.js             # Entry point
└── package.json         # Dependencies
```

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js & npm installed
- Backend Flask server running on port `5000`

### 📦 Install dependencies
```bash
npm install
```

### ▶️ Start the frontend app
```bash
npm start
```

App will run on:  
📍 `http://localhost:3000`

---

## 🔗 Backend Integration

Make sure the Flask server (ML model) is running locally on:

```
POST http://localhost:5000/predict
```

Use CORS to allow API access from frontend.

---

## 📝 Form Fields

| Field             | Description                          |
|------------------|--------------------------------------|
| Crop Name         | e.g., Wheat, Rice                    |
| Crop Year         | Year of cultivation (e.g., 2022)     |
| Season            | Season (e.g., Rabi, Kharif)          |
| State             | State name (e.g., Punjab)            |
| Area              | Area in hectares                     |
| Rainfall          | Average rainfall in mm               |
| Fertilizer usage  | Fertilizer input in kg               |
| Pesticide         | Pesticide quantity in tonnes         |
| Soil Type         | Soil classification (e.g., Loamy)    |

---

## 💡 How it Works

1. User enters crop details via form
2. React sends a POST request to the backend
3. Backend ML model predicts yield
4. Prediction is displayed in real time

---

## 👩‍💻 Author

**Ankita Joshi**  
🎓 MCA @ Graphic Era Deemed University  
💼 Passionate about Web Development & Machine Learning  

📬 Email: ankita.joshi2002@gmail.com  
🌐 GitHub: [Ankitajoshi2002](https://github.com/Ankitajoshi2002)

---

> 🔗 Pair this with [`CROP_BACKEND_README.md`](https://github.com/Ankitajoshi2002/Crop_Yeild-_predictor_System/blob/main/CROP_BACKEND_README.md) for a complete project overview.
