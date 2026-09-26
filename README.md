````markdown
# ✨ StudyMap AI

An AI-powered study assistant that generates a practical **7-day learning roadmap**, personalized **study tips**, and **5 relevant YouTube learning resources** for any topic.

StudyMap AI uses **Groq AI** to generate structured study plans and the **YouTube Data API v3** to find relevant learning videos.

---

## 🚀 Features

- 🤖 **AI-Generated 7-Day Study Plan**
  - Starts with fundamentals
  - Progresses logically from basic to advanced concepts
  - Includes important topics and practical activities

- 💡 **AI Study Tips**
  - Provides useful tips to improve the learning process

- ▶️ **YouTube Learning Resources**
  - Fetches 5 relevant YouTube videos
  - Displays video title, channel, description, thumbnail, and direct YouTube link

- ✅ **Structured AI Responses**
  - Groq AI returns a predictable JSON structure for reliable frontend rendering

- 📱 **Responsive UI**
  - Clean, modern interface built with React and Tailwind CSS

- ⚡ **Simple Architecture**
  - No database, authentication, or unnecessary backend complexity

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- Lucide React

### Backend

- Node.js
- Express.js
- CORS
- dotenv
- Axios
- Groq SDK

### APIs

- Groq API
- YouTube Data API v3

### Deployment

- Frontend: Vercel
- Backend: Render

---

## 📁 Project Structure

```text
StudyMap-AI/
├── backend/
│   ├── config/
│   │   └── ai.js
│   ├── controllers/
│   │   └── aiController.js
│   ├── routes/
│   │   └── aiRoutes.js
│   ├── services/
│   │   ├── aiService.js
│   │   └── youtubeService.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── StudyForm.jsx
    │   │   ├── StudyPlan.jsx
    │   │   └── ResourceCard.jsx
    │   ├── pages/
    │   │   └── AiHelpdesk.jsx
    │   └── services/
    │
    └── package.json
```

---

## ⚙️ How It Works

1. The user enters a topic in the React frontend.
2. The frontend sends the topic to the Express backend.
3. The backend sends the topic to Groq AI.
4. Groq generates a structured 7-day study plan and study tips.
5. The backend searches YouTube using the same topic.
6. The backend combines the AI result and YouTube resources.
7. The frontend displays the study plan, videos, and study tips.

---

## 🔌 API Endpoint

### Generate Study Plan

**POST**

```text
/api/ai/study-plan
```

Full local URL:

```text
http://localhost:5000/api/ai/study-plan
```

### Request Body

```json
{
  "topic": "JavaScript"
}
```

### Successful Response

```json
{
  "success": true,
  "message": "Study plan generated successfully",
  "data": {
    "topic": "JavaScript",
    "studyPlan": [],
    "videos": [],
    "studyTips": []
  }
}
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
GROQ_API_KEY=your_groq_api_key
YOUTUBE_API_KEY=your_youtube_api_key
```

### Important

* Never commit `.env` to GitHub.
* API keys are stored only on the backend.
* The frontend does not require a `.env` file in the current project setup.

---

## 💻 Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/SanjivKumarPatel/StudyMap-AI.git
cd StudyMap-AI
```

### 2. Start the backend

```bash
cd backend
npm install
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

### 3. Configure backend environment variables

Create:

```text
backend/.env
```

and add:

```env
PORT=5000
GROQ_API_KEY=your_groq_api_key
YOUTUBE_API_KEY=your_youtube_api_key
```

### 4. Start the frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The Vite development server runs on the URL shown in your terminal, normally:

```text
http://localhost:5173
```

---

## 🌐 Production API

The deployed backend is available at:

```text
https://pcs-ai-helpdesk.onrender.com
```

The frontend uses:

```text
https://pcs-ai-helpdesk.onrender.com/api
```

---

## 📦 Build for Production

### Frontend

```bash
cd frontend
npm run build
```

The production files are generated in:

```text
frontend/dist
```

### Backend

```bash
cd backend
npm start
```

---

## 🚀 Deployment

### Backend — Render

The backend is deployed as a Render Web Service.

Recommended settings:

```text
Root Directory: backend
Build Command: npm install
Start Command: npm start
```

Required environment variables:

```text
GROQ_API_KEY
YOUTUBE_API_KEY
```

### Frontend — Vercel

The frontend is a Vite application and can be deployed from the `frontend` directory.

Recommended settings:

```text
Framework Preset: Vite
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

No `vercel.json` file is required for the current frontend setup.

---

## 🔒 Security

* API keys are kept in backend environment variables.
* `.env` is excluded through `.gitignore`.
* The Groq and YouTube API keys are never sent directly to the browser.
* The frontend communicates with the backend through a REST API.

---

## 🎯 Project Purpose

StudyMap AI was built as a lightweight AI learning assistant that combines **AI-generated planning** with **real YouTube learning resources** in one simple interface.

The project focuses on practical learning assistance while keeping the architecture simple and easy to maintain.

---

## 👨‍💻 Author

**Sanjiv Kumar Patel**

---

```
```
