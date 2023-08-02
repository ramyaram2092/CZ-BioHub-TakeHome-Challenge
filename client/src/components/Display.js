import React from "react";
import { useNavigate } from "react-router-dom";

const Display = () => {
    const navigate = useNavigate();

  return (
    <div>
      <h1>Fibonacci Sequence</h1>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => navigate("../")}
      >
        Back
      </button>
    </div>
  );
};

export default Display;
