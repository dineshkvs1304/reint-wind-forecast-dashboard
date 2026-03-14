# Wind Forecast Monitoring Dashboard

## Overview

This project was developed as part of the REint Full Stack Software Engineer challenge.  
The goal of the application is to analyze wind generation forecasts and compare them with actual generation values using an interactive dashboard.

The system consists of a backend API that processes the dataset and provides forecast data, and a frontend dashboard that visualizes the data. Users can interact with the application by adjusting the forecast horizon and selecting time ranges.

The project also includes a Jupyter notebook used for exploratory data analysis and visualization.

---

# Live Application

The frontend application is deployed on Vercel:

https://reint-wind-forecast-dashboard.vercel.app

---

# Tech Stack

### Frontend
- Next.js
- TypeScript
- Recharts

### Backend
- FastAPI
- Python
- Pandas
- NumPy

### Data Analysis
- Jupyter Notebook
- Matplotlib
- Seaborn

### Deployment
- Vercel (Frontend)

---

# Project Architecture

The application follows a simple client-server architecture.

Frontend (Next.js Dashboard)  
↓  
API Request  
↓  
Backend (FastAPI Server)  
↓  
Data Processing  
↓  
Dataset

The frontend sends requests to the backend API to retrieve forecast data.  
The backend processes the dataset and returns structured JSON data containing timestamps, actual wind generation values, and forecasted values.

The frontend then visualizes the data using an interactive time-series chart.

---

# Repository Structure

```
reint-wind-forecast-dashboard
│
├── frontend
│   ├── app
│   │   └── page.tsx
│   ├── package.json
│   ├── next.config.ts
│   └── node_modules
│
├── backend
│   ├── app
│   │   └── main.py
│   ├── data
│   ├── requirements.txt
│   └── venv
│
├── analysis
│   └── forecast_analysis.ipynb
│
├── docs
│
└── README.md
```

### frontend

Contains the Next.js dashboard responsible for displaying forecast and actual wind generation values in an interactive chart.

### backend

Contains the FastAPI server that loads the dataset, processes forecast data, and exposes API endpoints used by the frontend.

### analysis

Contains a Jupyter notebook used for exploring the dataset and visualizing trends in the wind generation data.

### docs

Reserved for project documentation and notes.

---

# Running the Application Locally

## 1. Clone the Repository

```bash
git clone https://github.com/dineshkvs1304/reint-wind-forecast-dashboard.git
cd reint-wind-forecast-dashboard
```

---

# 2. Start the Backend

Navigate to the backend folder:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the environment:

Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the API server:

```bash
uvicorn app.main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

---

# 3. Start the Frontend

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:3000
```

---

# API Endpoint

The backend provides the following endpoint:

```
GET /forecast-data?horizon=4
```

Query parameter:

- horizon → forecast horizon in hours

The endpoint returns JSON containing timestamps, actual generation values, and forecasted values.

---

# Dashboard Features

The dashboard provides the following functionality:

- Visualization of actual vs forecast wind generation
- Adjustable forecast horizon using a slider
- Time range selection using date inputs
- Interactive chart for exploring time series data

---

# Data Analysis

The Jupyter notebook located in the `analysis` directory contains exploratory analysis of the dataset, including visualizations and comparisons between forecasted and actual wind generation values.

---

# AI Usage Disclosure

AI tools were used during development to assist with debugging issues, helping resolve coding issues and improve clarity, and improving documentation clarity.

All implementation decisions, architecture, and final code structure were reviewed and adjusted manually.

---

# Author

Kandyana Venkata Sai Dinesh 