"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from "recharts";

export default function Home() {

  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [horizon, setHorizon] = useState(4);

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    async function loadData() {

      try {

        setLoading(true);

        const res = await fetch(
          `http://127.0.0.1:8000/forecast-data?horizon=${horizon}`
        );

        const json = await res.json();

        setData(json);
        setFilteredData(json);

      } catch (err) {

        console.error("Fetch error:", err);

      } finally {

        setLoading(false);

      }
    }

    loadData();

  }, [horizon]);

  useEffect(() => {

    if (!startTime && !endTime) {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter((item) => {

      const t = new Date(item.time).getTime();

      if (startTime && t < new Date(startTime).getTime()) return false;
      if (endTime && t > new Date(endTime).getTime()) return false;

      return true;

    });

    setFilteredData(filtered);

  }, [startTime, endTime, data]);

  return (

    <div style={{ padding: "40px", fontFamily: "Arial" }}>

      <h1>Wind Forecast Monitoring Dashboard</h1>

      {/* Forecast Horizon Slider */}

      <div style={{ marginTop: "20px", marginBottom: "20px" }}>

        <label style={{ fontWeight: "bold" }}>
          Forecast Horizon: {horizon} hours
        </label>

        <br />

        <input
          type="range"
          min="0"
          max="48"
          value={horizon}
          onChange={(e) => setHorizon(Number(e.target.value))}
          style={{ width: "400px" }}
        />

      </div>

      {/* Time Filters */}

      <div style={{ marginBottom: "20px" }}>

        <label>Start Time:</label>

        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          style={{ marginLeft: "10px", marginRight: "20px" }}
        />

        <label>End Time:</label>

        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          style={{ marginLeft: "10px" }}
        />

      </div>

      <p>Data points loaded: {filteredData.length}</p>

      {loading && <p>Loading chart...</p>}

      {/* Chart */}

      {filteredData.length > 0 && !loading && (

        <div style={{ marginTop: "30px" }}>

          <LineChart
            width={1200}
            height={500}
            data={filteredData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" hide />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="actual"
              stroke="#2E86DE"
              dot={false}
              name="Actual Generation"
            />

            <Line
              type="monotone"
              dataKey="forecast"
              stroke="#E74C3C"
              dot={false}
              name="Forecast Generation"
            />

          </LineChart>

        </div>

      )}

    </div>

  );
}