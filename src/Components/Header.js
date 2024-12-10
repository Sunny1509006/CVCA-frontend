import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import { FiUser } from "react-icons/fi";

export const Header = () => {
  const location = useLocation();
  const tabs = ["/dashboard", "/data", "/manual", "/process"];
  const activeIndex = tabs.indexOf(location.pathname);
  const [barStyle, setBarStyle] = useState({});
  const tabsRef = useRef([]);

  useEffect(() => {
    if (tabsRef.current[activeIndex]) {
      const activeTab = tabsRef.current[activeIndex];
      setBarStyle({
        width: `${activeTab.offsetWidth}px`,
        transform: `translateX(${activeTab.offsetLeft}px)`,
      });
    }
  }, [activeIndex]);

  return (
    <div className="header-container">
      <header className="dashboard-header">
        <div className="header-left">
          <img
            src="/images/logo.jpg" // Replace with your logo URL
            // alt="Logo"
            className="logo-img"
          />
        </div>
        <div className="header-center">
          <ul className="header-tabs">
            {tabs.map((path, index) => (
              <li key={path} ref={(el) => (tabsRef.current[index] = el)}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "active-tab" : "tab"
                  }
                >
                  {path === "/dashboard"
                    ? "Overview"
                    : path.charAt(1).toUpperCase() + path.slice(2)}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="active-tab-bar" style={barStyle}></div>
        </div>
        <div className="header-right">
          {/* <img
            src="https://via.placeholder.com/40" // Profile image URL (can be dynamic)
            alt="Profile"
            className="profile-img"
          /> */}
          <FiUser 
          className="profile-img"
          />
          
        </div>
      </header>
    </div>
  );
};
