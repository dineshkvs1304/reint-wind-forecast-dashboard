# Wind Forecast Monitoring Dashboard

This project analyzes and visualizes wind power forecast accuracy using real electricity generation data.

The system consists of a FastAPI backend that retrieves and processes wind generation data, and a Next.js frontend dashboard that visualizes forecast performance.

---

# Project Structure

backend  
Contains the FastAPI API that fetches wind generation data and calculates forecast values.

frontend  
Next.js application that visualizes actual vs forecast wind generation.

analysis  
Jupyter notebook containing statistical analysis of forecast errors.

---

# Features

• Interactive wind generation dashboard  
• Forecast horizon slider (0–48 hours)  
• Actual vs forecast visualization  
• Forecast error analysis  
• Wind power reliability estimation  

---

# Backend Setup

Navigate to the backend folder
cd backend


Create and activate virtual environment

python -m venv venv
venv\Scripts\activate


Install dependencies
pip install -r requirements.txt


Run backend server
uvicorn app.main:app --reload


Backend runs at
http://127.0.0.1:8000


---

# Frontend Setup

Navigate to frontend folder
cd frontend


Install dependencies
npm install


Run development server
npm run dev


Frontend runs at
http://localhost:3000


---

# Analysis Notebook

The analysis notebook performs:

• Forecast error calculation  
• Error distribution analysis  
• Error by time-of-day analysis  
• Reliable wind generation estimation  

Notebook file:
analysis/forecast_analysis.ipynb


---

# Technologies Used

Python  
FastAPI  
Pandas  
Next.js  
Recharts  
Jupyter Notebook  

---

# Author

Kndyana Venkata Sai Dinesh