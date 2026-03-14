import pandas as pd
import json


def fetch_actual_generation():

    with open("data/actual_wind.json") as f:
        json_data = json.load(f)

    # If the JSON contains a "data" field use it, otherwise use the list directly
    if isinstance(json_data, dict) and "data" in json_data:
        data = json_data["data"]
    else:
        data = json_data

    df = pd.DataFrame(data)

    df["startTime"] = pd.to_datetime(df["startTime"])

    df = df[["startTime", "generation"]]

    return df