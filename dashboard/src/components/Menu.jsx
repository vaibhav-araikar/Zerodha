import React, { useState } from "react";
import "./Menu.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Users/AuthContext";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  // basically hum dashboard pr click karenge to 0 pass karenge and orders pr click karenge to 1 pass karenge and so on...

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  // currently true hai to false hoga or false hai to true ho jayega

  const handleLogout = () => {
    logout();
    setIsProfileDropdownOpen(false);
    navigate("/login");
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  // jo bhi menu currently active hai vo dikh jayega and orange color me highlight ho jayega

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                {/* //currently agar is item ko select kiya hai to active class de diye warna menu class de dijiye */}
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />

        {isAuthenticated ? (
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">
              {(user?.userId || "U").slice(0, 2).toUpperCase()}
            </div>
            <p className="username">{user?.userId || "USER"}</p>

            {isProfileDropdownOpen && (
              <div className="profile-dropdown">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLogout();
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="login-btn">Login</button>
            </Link>
            <Link
              to="/login"
              state={{ view: "signup" }}
              style={{ textDecoration: "none" }}
            >
              <button className="signup-btn">Signup</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
