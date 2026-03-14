import pandas as pd


def compute_latest_forecast(actual_df, forecast_df, horizon_hours):

    result = []

    horizon = pd.Timedelta(hours=horizon_hours)

    for _, row in actual_df.iterrows():

        target_time = row["startTime"]
        cutoff_time = target_time - horizon

        candidates = forecast_df[
            (forecast_df["startTime"] == target_time)
            & (forecast_df["publishTime"] <= cutoff_time)
        ]

        if candidates.empty:
            continue

        latest = candidates.sort_values("publishTime").iloc[-1]

        result.append({
            "time": str(target_time),                     # convert timestamp
            "actual": int(row["generation"]),             # convert numpy int
            "forecast": int(latest["generation"])         # convert numpy int
        })

    return result