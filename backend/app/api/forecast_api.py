from fastapi import APIRouter
from app.services.actual_service import fetch_actual_generation
from app.services.forecast_service import fetch_forecast_data
from app.utils.forecast_logic import compute_latest_forecast

router = APIRouter()


@router.get("/forecast-data")
def get_forecast_data(horizon: int = 4):

    actual_df = fetch_actual_generation()
    forecast_df = fetch_forecast_data()

    result = compute_latest_forecast(actual_df, forecast_df, horizon)

    return result