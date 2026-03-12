# 🛡️ ToxiGuard AI

<!-- <p align="center">
Intelligent Toxic Text Detection & Constructive Rewriting System
</p>

<p align="center">

![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![Transformers](https://img.shields.io/badge/HuggingFace-Transformers-yellow)
![License](https://img.shields.io/badge/License-MIT-orange)

</p>
 -->


**ToxiGuard AI** is an AI-powered communication moderation system designed to detect toxic language and transform it into **polite, constructive communication**.

The system leverages **Transformer-based Natural Language Processing models** to:

- Detect toxic text
- Analyze emotional tone
- Generate constructive rewritten messages

The goal of ToxiGuard AI is to **promote healthier digital communication across online platforms.**




# 🚀 Key Features

🔎 Toxicity Detection

- Uses transformer-based NLP models to analyze text and determine whether it contains toxic or harmful language.

📊 Toxicity Intensity Score

- Provides a confidence score indicating how toxic the message is.

😊 Emotion Analysis

- Detects the emotional tone of the message (e.g., anger, frustration).

✨ Constructive Rewriting

- Automatically rewrites toxic messages into polite, professional language while preserving meaning.

⚡ Real-Time Processing

- Processes messages instantly through a FastAPI backend.

💻 Interactive Web Interface

- Modern frontend built with React allowing users to analyze messages easily.


# 🏗️ Tech Stack

| Category | Technologies |
|--------|-------------|
| **Frontend** | React.js, HTML5, CSS3, JavaScript, Axios |
| **Backend** | FastAPI, Python |
| **AI / NLP Models** | HuggingFace Transformers, Toxicity Classification Model, Emotion Detection Model, LLM-based Rewriting |
| **Development Tools** | Git, GitHub |
| **Runtime Environment** | Node.js, npm |
| **Environment Management** | Python Virtual Environment |


# 🧠 System Architecture

<img width="2197" height="445" alt="sts" src="https://github.com/user-attachments/assets/6391d829-a6a3-4962-845e-9ab8d67248b0" />

## 🎯 Applications


| Domain | Use Case |
|------|------|
| Social Media | Toxic comment moderation |
| Online Communities | Maintain respectful discussions |
| Workplace Communication | Improve professional messaging |
| Chat Platforms | Reduce harassment and abusive language |
| Educational Platforms | Encourage constructive communication |


---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/ToxiGuard-AI.git
cd ToxiGuard-AI
```
## 2️⃣ Backend Setup
Navigate to backend
```
cd backend
```

Create virtual environment
```
python -m venv venv
```
Activate environment
```
venv\Scripts\activate
```
Install dependencies
```
pip install -r requirements.txt
```
Run the backend server
```
uvicorn main:app --reload
```
Backend runs at:
```
http://127.0.0.1:8000
```
## 3️⃣ Frontend Setup
Navigate to frontend
```
cd frontend
```
Install dependencies
```
npm install
```
Run the application
```
npm start
```
Frontend runs at:
```
http://localhost:3000
```

## 📊 Example Output
Input Message :

    You people are useless and ruining everything. 

Rewritten Output :

    I believe there are some issues affecting our progress and it would be helpful to address them constructively.


##  🌐 Future Improvements

| Feature                | Description                             |
| ---------------------- | --------------------------------------- |
| Multi-language Support | Detect toxicity in multiple languages   |
| Context-Aware Models   | Understand conversation context         |
| Moderation API         | Provide integration for other platforms |
| Browser Extension      | Real-time chat moderation               |


