# ⚖️ NyayaLens

AI-Powered Legal Document Analyzer & Contract Intelligence Platform

## 📌 Overview

NyayaLens is a Legal-Tech platform that helps users understand complex legal documents quickly and easily.

Users can upload PDF or DOCX legal agreements, extract important information, analyze contract clauses, and ask questions about the uploaded document using an AI-powered assistant.

The goal is to make legal documents more accessible for tenants, employees, freelancers, and individuals without legal expertise.

---

## 🚀 Features

### 📄 Document Upload
- Upload PDF contracts
- Upload DOCX agreements
- Automatic text extraction

### 🔍 Contract Analysis
- Extracts important contract information
- Identifies key clauses
- Provides document summaries

### 🤖 Legal AI Assistant
Ask questions such as:

- Can the landlord increase the rent?
- What is the notice period?
- Is there an early termination penalty?
- What is the security deposit amount?

### 🧠 RAG-Based Retrieval
- Stores uploaded documents in ChromaDB
- Retrieves relevant context before answering
- Reduces hallucinations by using document-specific information

### ⚡ Fallback Intelligence
- Continues answering common legal questions even when AI APIs are unavailable
- Ensures smooth demo experience during hackathons

---

## 🏗️ System Architecture

```text
User Uploads Document
          │
          ▼
PDF / DOCX Parser
          │
          ▼
Text Extraction
          │
          ▼
ChromaDB Storage
          │
          ▼
RAG Retrieval Layer
          │
          ▼
AI Legal Assistant
          │
          ▼
Answers & Insights
```

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- FastAPI
- Python

### Document Processing
- PyPDF2
- python-docx

### Database
- ChromaDB

### AI
- Google Gemini API
- Rule-Based Fallback System

---

## 📂 Project Structure

```text
NyayaLens/
│
├── backend/
│   ├── main.py
│   ├── services/
│   │   ├── pdf_parser.py
│   │   ├── docx_parser.py
│   │   ├── gemini_service.py
│   │   └── rag_service.py
│   │
│   └── uploads/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Shalini5760/NyayaLens.git
cd NyayaLens
```

### Backend Setup

```bash
cd backend

pip install -r requirements.txt
```

Create a `.env` file:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Run FastAPI server:

```bash
python -m uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

### Frontend Setup

Open:

```text
frontend/index.html
```

in your browser.

---

## 💡 Use Cases

- Rental Agreement Analysis
- Lease Agreement Review
- Employment Contract Review
- Service Agreement Understanding
- Legal Clause Discovery
- Contract Risk Awareness

---

## 🔮 Future Enhancements

- Contract Risk Score
- Clause Classification
- Multi-language Support
- Legal Recommendation Engine
- OCR Support for Scanned Documents
- Advanced Contract Comparison

---

## 🎯 Hackathon Vision

NyayaLens aims to bridge the gap between legal complexity and everyday users by providing instant document understanding, contract intelligence, and AI-assisted legal insights.

---

## 👩‍💻 Developer

**Shalini**

Built for Hackathon 2026 🚀