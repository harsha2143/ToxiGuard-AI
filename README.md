<div align="center">

# 🛡️ ToxiGuard AI

### Intelligent Toxic Text Detection & Constructive Rewriting System

*Transform harmful language into polite, professional communication — powered by Transformer-based NLP*

![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=flat-square&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=flat-square&logo=react&logoColor=black)
![HuggingFace](https://img.shields.io/badge/HuggingFace-Transformers-FFD21E?style=flat-square&logo=huggingface&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-22C55E?style=flat-square)

</div>


## 📌 Overview

**ToxiGuard AI** is an AI-powered communication moderation system that detects toxic language and rewrites it into **polite, constructive messages**. It uses state-of-the-art Transformer-based NLP models to analyze, score, and transform harmful text in real time — promoting healthier digital communication across any online platform.


## ✨ Key Features

🔎 **Toxicity Detection**

- Uses transformer-based NLP models to analyze text and determine whether it contains toxic or harmful language.

📊 **Toxicity Intensity Score**

- Provides a confidence score indicating how toxic the message is.

😊 **Emotion Analysis**

- Detects the emotional tone of the message (e.g., anger, frustration).

✍️ **Constructive Rewriting**

- Automatically rewrites toxic messages into polite, professional language while preserving meaning.

⚡ **Real-Time Processing**

- Processes messages instantly through a FastAPI backend.

💻 **Interactive Web Interface**

- Modern frontend built with React allowing users to analyze messages easily.
## 🔄 Example Transformation

```
Input  →  "You people are useless and ruining everything."

Output →  "I believe there are some issues affecting our progress
           and it would be helpful to address them constructively."
```

> **Toxicity Score:** `94% (Anger)` → `2% (Neutral)` ✅

---

## 🏗️ System Architecture


<img width="2197" height="445" alt="sts" src="https://github.com/user-attachments/assets/6391d829-a6a3-4962-845e-9ab8d67248b0" />


## 🧰 Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React.js, HTML5, CSS3, JavaScript, Axios |
| **Backend** | FastAPI, Python 3.9+ |
| **AI / NLP** | HuggingFace Transformers, Toxicity Classifier, Emotion Detection Model, LLM-based Rewriter |
| **Dev Tools** | Git, GitHub, Node.js, npm |
| **Environment** | Python Virtual Environment (venv) |

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/harsha2143/ToxiGuard-AI.git
cd ToxiGuard-AI
```

---

### 2. Backend Setup

```bash
# Navigate to backend
cd backend

# Create and activate virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS / Linux

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn main:app --reload
```

> 🟢 Backend running at `http://127.0.0.1:8000`

---



### 3️. Frontend Setup
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
> 🟢 Frontend running at `http://localhost:3000`

---

## 🎯 Applications

| Domain | Use Case |
|---|---|
| 📱 Social Media | Automated toxic comment moderation |
| 🏘️ Online Communities | Maintain respectful, productive discussions |
| 💼 Workplace Tools | Improve professionalism in internal messaging |
| 💬 Chat Platforms | Reduce harassment and abusive language in real time |
| 🎓 Education | Encourage constructive communication among students |


## 🌐 Future Improvements

- [ ] **Multi-language Support** — Detect and rewrite toxic content in multiple languages
- [ ] **Context-Aware Models** — Understand full conversation context to reduce false positives
- [ ] **Moderation API** — Plug-and-play integration for third-party platforms
- [ ] **Browser Extension** — Real-time chat moderation across any website


<!-- <div align="center">

Made with ❤️ to promote healthier digital communication

</div> -->
