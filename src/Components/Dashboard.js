import React from "react";
import "./Dashboard.css";
import { Header } from "./Header";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header */}
     <Header />

      {/* Main Body */}
      <div className="dashboard-body">
        <div className="left-sidebar">
          <h3>Total Surveys</h3>
          <p>132</p>
          <h3>Average Vulnerability</h3>
          <p>75%</p>
          <h3>Highest MPI Score</h3>
          <p>88</p>
          <h3>Lowest MPI Score</h3>
          <p>34</p>
        </div>

        <div className="main-body">
          {/* Right Body - Upper Part */}
          <div className="map-container">
            <div className="map">
              {/* You can replace the div with an actual map component later */}
              <h4>Map</h4>
            </div>
          </div>

          {/* Right Body - Middle Part */}
          <div className="stats">
            <div className="stat-card">
              <h4>Highest Sensitivity</h4>
              <p>85%</p>
            </div>
            <div className="stat-card">
              <h4>Highest Exposure</h4>
              <p>90%</p>
            </div>
            <div className="stat-card">
              <h4>Highest Adaptive Capacity</h4>
              <p>70%</p>
            </div>
          </div>

          {/* Right Body - Lower Part */}
          <div className="vulnerability-comparison">
            <h4>Detailed Comparison of Vulnerability</h4>
            {/* Detailed comparison of vulnerability (you can replace with dynamic data later) */}
            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Region</th>
                    <th>Vulnerability Score</th>
                    <th>Exposure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Region 1</td>
                    <td>65</td>
                    <td>80%</td>
                  </tr>
                  <tr>
                    <td>Region 2</td>
                    <td>55</td>
                    <td>60%</td>
                  </tr>
                  <tr>
                    <td>Region 3</td>
                    <td>75</td>
                    <td>90%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
