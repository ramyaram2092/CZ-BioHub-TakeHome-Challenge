import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Display = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const res = location.state;
  // console.log(res);
  return (
    <div>
      <h1>Fibonacci Sequence</h1>
      {res && (
        <div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex" }}>
            {res.map((value, index) => (
              <li key={index} style={{ marginRight: "20px" }}>
                {value},
              </li>
            ))}
          </ul>
        </div>
      )}

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
