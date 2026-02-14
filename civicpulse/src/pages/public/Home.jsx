import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      
      <h1>CivicPulse</h1>
      <p>AI Powered Civic Issue Reporting System</p>

      <hr />

      <h2>How it works</h2>
      <p>1. Capture issue</p>
      <p>2. AI verifies</p>
      <p>3. Authorities resolve</p>

      <br />

      <Link to="/login">
        <button style={{ margin: "10px", padding: "10px 20px" }}>
          Login
        </button>
      </Link>

      <Link to="/register">
        <button style={{ margin: "10px", padding: "10px 20px" }}>
          Register
        </button>
      </Link>

    </div>
  );
};

export default Home;
