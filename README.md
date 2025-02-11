# 🌿 FMS AI ChatBot

## 🚜 Overview

FMS AI ChatBot is an **AI-powered assistant** designed for **Farm Management Systems (FMS)**. It provides **smart insights** for managing crops, livestock, and resources by integrating **Google Gemini AI**. The chatbot is currently designed to handle user queries and process information related to farm management efficiently.

## ✨ Features

- 🌱 **Smart Crop & Livestock Guidance**
- 📂 **Document-Based Training** (Train the bot with provided files)
- 💬 **Multilingual Support** (English & Urdu)
- ⚡ **Real-time AI Insights** using Google Gemini API
- 🔍 **Search & Retrieve Information** from stored data
- 💾 **Chat History Storage in Frontend**

## 🏗 Tech Stack

- **Frontend:** React.js (UI & Chat Interface)
- **Backend:** Node.js & Express.js (API & AI Integration)
- **Database:** None (Currently using in-memory chat storage)
- **AI Model:** Google Gemini API

## 🛠 Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/sadaqat120/FMS-AI-ChatBot.git
cd FMS-AI-ChatBot
```

### 2️⃣ Install Dependencies

#### **Backend**

```sh
cd backend
npm install
```

#### **Frontend**

```sh
cd frontend
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the **backend** directory with:

```sh
PORT=5000
GOOGLE_API_KEY=your_google_gemini_api_key
```

### 4️⃣ Run the Application

#### **Backend:**

```sh
cd backend
npm start
```

#### **Frontend:**

```sh
cd frontend
npm start
```

## 📂 How the Chatbot works

1. User sends a message via the **chat interface**.
2. The message is processed and sent to the **backend API**.
3. The backend interacts with **Google Gemini AI** to generate a response.
4. The response is displayed in the **chat UI**.

---

### 🤝 Contributing

Pull & feature requests are welcome! 🚀
