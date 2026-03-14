import pandas as pd
import json


def fetch_forecast_data():

    with open("data/forecast_wind.json") as f:
        json_data = json.load(f)

    if isinstance(json_data, dict) and "data" in json_data:
        data = json_data["data"]
    else:
        data = json_data

    df = pd.DataFrame(data)

    df["startTime"] = pd.to_datetime(df["startTime"])
    df["publishTime"] = pd.to_datetime(df["publishTime"])

    df = df[["startTime", "publishTime", "generation"]]

    return df