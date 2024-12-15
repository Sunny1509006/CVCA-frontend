// import React from "react";
import "./Dashboard.css";
import { Header } from "./Header";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       {/* Header */}
//      <Header />

//       {/* Main Body */}
//       <div className="dashboard-body">
//         <div className="left-sidebar">
//           <h3>Total Surveys</h3>
//           <p>132</p>
//           <h3>Average Vulnerability</h3>
//           <p>75%</p>
//           <h3>Highest MPI Score</h3>
//           <p>88</p>
//           <h3>Lowest MPI Score</h3>
//           <p>34</p>
//         </div>

//         <div className="main-body">
//           {/* Right Body - Upper Part */}
//           <div className="map-container">
//             <div className="map">
//               {/* You can replace the div with an actual map component later */}
//               <h4>Map</h4>
//             </div>
//           </div>

//           {/* Right Body - Middle Part */}
//           <div className="stats">
//             <div className="stat-card">
//               <h4>Highest Sensitivity</h4>
//               <p>85%</p>
//             </div>
//             <div className="stat-card">
//               <h4>Highest Exposure</h4>
//               <p>90%</p>
//             </div>
//             <div className="stat-card">
//               <h4>Highest Adaptive Capacity</h4>
//               <p>70%</p>
//             </div>
//           </div>

//           {/* Right Body - Lower Part */}
//           <div className="vulnerability-comparison">
//             <h4>Detailed Comparison of Vulnerability</h4>
//             {/* Detailed comparison of vulnerability (you can replace with dynamic data later) */}
//             <div className="comparison-table">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Region</th>
//                     <th>Vulnerability Score</th>
//                     <th>Exposure</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>Region 1</td>
//                     <td>65</td>
//                     <td>80%</td>
//                   </tr>
//                   <tr>
//                     <td>Region 2</td>
//                     <td>55</td>
//                     <td>60%</td>
//                   </tr>
//                   <tr>
//                     <td>Region 3</td>
//                     <td>75</td>
//                     <td>90%</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import VulneralibilityDetails from "./VulneralibilityDetails";
import { DashboardMap } from "./DashboardMap";

mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

const Dashboard = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const centerCoords = [90.4125, 23.8103]; // Center of Dhaka

  const high = 47; // Static value
  const medium = 23;
  const low = 30;
  const total = high + medium + low;

  const vulnerabilityData = [
    {
      category: "Economic",
      items: [
        { name: "School Going Children", value: 0.44 },
        { name: "BMI", value: 0.38 },
        { name: "Protein Consumption", value: 0.31 },
        { name: "Green Consumption", value: 0.27 },
        { name: "Drug Addicted Family Member", value: 0.36 },
      ],
    },
    {
      category: "Environmental",
      items: [
        { name: "Monsoon Waterlogging", value: 0.19 },
        { name: "Water Drainage Time", value: 0.08 },
        { name: "Work Absenteeism", value: 0.18 },
      ],
    },
    {
      category: "Social",
      items: [
        { name: "Using Health Care Center", value: 0.07 },
        { name: "Health Care Center Distance", value: 0.07 },
        { name: "Lighted and Ventilated House", value: 0.09 },
        { name: "Own Residence", value: 0.05 },
        { name: "Internet Access", value: 0.03 },
        { name: "Structural Vulnerability", value: 0.01 },
        { name: "Waste Management", value: 0.06 },
      ],
    },
  ];

  // useEffect(() => {
  //   if (map.current) return;

  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: "mapbox://styles/mapbox/light-v10",
  //     center: centerCoords,
  //     zoom: 10,
  //   });

  //   // Add boundary layers (Mockup data for Dhaka North and South zones)
  //   map.current.on("load", () => {
  //     map.current.addSource("dhaka-boundary", {
  //       type: "geojson",
  //       data: {
  //         type: "FeatureCollection",
  //         features: [
  //           {
  //             type: "Feature",
  //             properties: { name: "Dhaka North" },
  //             geometry: {
  //               type: "Polygon",
  //               coordinates: [
  //                 [
  //                   [90.35, 23.85],
  //                   [90.45, 23.85],
  //                   [90.45, 23.95],
  //                   [90.35, 23.95],
  //                   [90.35, 23.85],
  //                 ],
  //               ],
  //             },
  //           },
  //           {
  //             type: "Feature",
  //             properties: { name: "Dhaka South" },
  //             geometry: {
  //               type: "Polygon",
  //               coordinates: [
  //                 [
  //                   [90.35, 23.75],
  //                   [90.45, 23.75],
  //                   [90.45, 23.85],
  //                   [90.35, 23.85],
  //                   [90.35, 23.75],
  //                 ],
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //     });

  //     map.current.addLayer({
  //       id: "dhaka-boundary-layer",
  //       type: "fill",
  //       source: "dhaka-boundary",
  //       paint: {
  //         "fill-color": [
  //           "match",
  //           ["get", "name"],
  //           "Dhaka North",
  //           "#6A5ACD",
  //           "Dhaka South",
  //           "#FFD700",
  //           "#ccc",
  //         ],
  //         "fill-opacity": 0.2,
  //       },
  //     });

      // Add markers
  //     const markerCoordinates = [
  //       { coords: [90.41, 23.82], name: "Slum 1", vulnerability: "High" },
  //       { coords: [90.43, 23.77], name: "Slum 2", vulnerability: "Low" },
  //     ];

  //     markerCoordinates.forEach((marker) => {
  //       new mapboxgl.Marker({
  //         color: marker.vulnerability === "High" ? "red" : "green",
  //       })
  //         .setLngLat(marker.coords)
  //         .setPopup(
  //           new mapboxgl.Popup().setHTML(
  //             `<h4>${marker.name}</h4><p>Vulnerability: ${marker.vulnerability}</p>`
  //           )
  //         )
  //         .addTo(map.current);
  //     });
  //   });
  // }, []);

  const renderArc = () => {
    const highArc = (high / total) * 360;
    const mediumArc = (medium / total) * 360;
    const lowArc = (low / total) * 360;

    return {
      background: `conic-gradient(
        #FF4D4D 0deg ${highArc}deg,
        #FFB347 ${highArc}deg ${highArc + mediumArc}deg,
        #73C374 ${highArc + mediumArc}deg 360deg
      )`,
      borderRadius: "50%",
      width: "150px",
      height: "150px",
    };
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          gap: "20px",
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
          {/* Total Surveys */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h2>Total Surveys</h2>
            <h1 style={{ marginBottom: "10px" }}>2,431,348</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div style={renderArc()}></div>
              <div
                style={{
                  position: "absolute",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                0.67
              </div>
            </div>
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
              Average Vulnerability
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                fontSize: "14px",
              }}
            >
              <span style={{ color: "#FF4D4D" }}>High: 47%</span>
              <span style={{ color: "#FFB347" }}>Medium: 23%</span>
              <span style={{ color: "#73C374" }}>Low: 30%</span>
            </div>
          </div>

          {/* Indicators */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                backgroundColor: "#F9F9F9",
                padding: "10px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <p>Highest Sensitivity</p>
              <h3>0.76</h3>
            </div>
            <div
              style={{
                backgroundColor: "#F9F9F9",
                padding: "10px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <p>Highest Exposure</p>
              <h3>0.76</h3>
            </div>
            <div
              style={{
                backgroundColor: "#F9F9F9",
                padding: "10px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <p>Highest Adaptive Capacity</p>
              <h3>0.76</h3>
            </div>
          </div>
        </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
        {/* Map Section */}
        {/* <div
          style={{
            flexGrow: 1,
            borderRadius: "10px",
            overflow: "hidden",
            height: "500px",
            backgroundColor: "#EAEDED",
          }}
        >
          <div
            ref={mapContainer}
            style={{ width: "100%", height: "100%" }}
          ></div>
        </div> */}
        <DashboardMap />

        {/* Vulnerability Details */}
        {/* <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Vulnerability Details</h3>
          <p style={{ fontSize: "12px", color: "#888" }}>
            Calculated until 30 Nov 2024
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {vulnerabilityData.map((category) => (
              <div key={category.category} style={{ flex: 1 }}>
                <h4 style={{ marginBottom: "10px", color: "#444" }}>
                  {category.category}
                </h4>
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <div
                      style={{ width: "50%", fontSize: "12px", color: "#555" }}
                    >
                      {item.name}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#EEE",
                        borderRadius: "4px",
                        overflow: "hidden",
                        height: "10px",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${item.value * 100}%`,
                          backgroundColor:
                            item.value > 0.3 ? "#6A5ACD" : "#73C374",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "#333",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div> */}
        <VulneralibilityDetails />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
