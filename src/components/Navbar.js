import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className={`navbar ${expandNavbar ? "open" : ""}`}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className={`links ${expandNavbar ? "open" : ""}`}>
        <Link to="/"> Home </Link>
        <Link to="/experience"> Experience </Link>
        <Link to="/projects"> Projects </Link>

        <Link to="/resume"> Resume </Link>

      </div>
    </div>
  );
}

export default Navbar;
