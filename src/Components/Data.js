import React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Header } from "./Header";

mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

export const Data = () => {
  const surveyOverviewData = [
    { label: "Males", value: 2540, trend: "up" },
    { label: "Females", value: 2304, trend: "up" },
    { label: "Dhaka North", value: 2540, trend: "up" },
    { label: "Dhaka South", value: 2304, trend: "down" },
    { label: "High Exposure", value: 2140, trend: "up" },
    { label: "Low Exposure", value: 1976, trend: "down" },
    { label: "High Sensitivity", value: 1938, trend: "down" },
    { label: "Low Sensitivity", value: 1320, trend: "down" },
    { label: "High Adaptive Capacity", value: 1033, trend: "up" },
    { label: "Low Adaptive Capacity", value: 1043, trend: "up" },
    { label: "High MPI", value: 1001, trend: "down" },
    { label: "Low MPI", value: 870, trend: "up" },
  ];

  const tableData = Array(15).fill({
    date: "30 Nov 2024",
    name: "Shahana Begum",
    location: "Dhaka South",
    sensitivity: 0.35,
    exposure: 0.24,
    adaptiveCapacity: 0.56,
    vulnerability: 0.37,
    mpi: 0.33,
  });

  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [90.4125, 23.8103], // Dhaka coordinates
      zoom: 10,
    });

    new mapboxgl.Marker()
      .setLngLat([90.4125, 23.8103])
      .setPopup(new mapboxgl.Popup().setText("Dhaka Survey Location"))
      .addTo(map);
  }, []);
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          padding: "20px",
          background: "#f7f7f7",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Left Panel */}
        <div
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Survey Overview */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>Survey Overview</h3>
            <p style={{ fontSize: "12px", color: "#888" }}>
              Collected until 30 Nov 2024
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {surveyOverviewData.map((item, index) => (
                <li
                  key={index}
                  style={{
                    margin: "5px 0",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{item.label}</span>
                  <span
                    style={{ color: item.trend === "up" ? "green" : "red" }}
                  >
                    {item.value} {item.trend === "up" ? "\u25B2" : "\u25BC"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Survey Map */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>Survey Map</h3>
            <p style={{ fontSize: "12px", color: "#888" }}>
              Collected until 30 Nov 2024
            </p>
            <div
              id="map"
              style={{ width: "100%", height: "250px", borderRadius: "10px" }}
            ></div>
          </div>
        </div>
        {/* Table Section */}
        <div
          style={{
            flexGrow: 1,
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{ borderBottom: "2px solid #f0f0f0", paddingBottom: "10px" }}
          >
            Survey Data
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr style={{ background: "#f9f9f9", color: "#333" }}>
                  <th style={{ padding: "10px" }}>Date</th>
                  <th style={{ padding: "10px" }}>Name</th>
                  <th style={{ padding: "10px" }}>Location</th>
                  <th style={{ padding: "10px" }}>Sensitivity</th>
                  <th style={{ padding: "10px" }}>Exposure</th>
                  <th style={{ padding: "10px" }}>Adaptive Capacity</th>
                  <th style={{ padding: "10px" }}>Vulnerability</th>
                  <th style={{ padding: "10px" }}>MPI</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: "1px solid #f0f0f0",
                      background: index % 2 === 0 ? "#fff" : "#f9f9f9",
                    }}
                  >
                    <td style={{ padding: "10px" }}>{row.date}</td>
                    <td style={{ padding: "10px" }}>{row.name}</td>
                    <td style={{ padding: "10px" }}>{row.location}</td>
                    <td style={{ padding: "10px" }}>{row.sensitivity}</td>
                    <td style={{ padding: "10px" }}>{row.exposure}</td>
                    <td style={{ padding: "10px" }}>{row.adaptiveCapacity}</td>
                    <td style={{ padding: "10px" }}>{row.vulnerability}</td>
                    <td style={{ padding: "10px" }}>{row.mpi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
