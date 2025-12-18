# 🌤 Weather LLM Web Application

A full-stack web application that allows users to ask for the **weather of any city using natural language**.  
The backend uses **FastAPI + LangChain + OpenRouter (LLM)** with a **tool-based approach**, and the frontend is built with **React** and modern animations.

---

## ✨ Features

- 🌍 Ask weather-related questions in plain English  
- 🤖 LLM-powered responses using **LangChain Agent**
- 🛠 Tool calling to fetch real-time weather data
- ⚡ FastAPI backend
- 🎨 React frontend with animations
- ✨ Letter-by-letter dropping animation for responses
- 🔐 Secure API key handling via environment variables

---

## 🏗 Tech Stack

### Frontend
- React (Vite)
- CSS (custom animations)

### Backend
- FastAPI
- LangChain
- OpenRouter (LLM provider)
- OpenWeather API

---

## 📁 Backend setup
cd backend
pip install -r requirements.txt
uvicorn main:app --reload


## 📁 Frontend setup
cd frontend
npm install
npm run dev



