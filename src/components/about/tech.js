import React from "react";
import "./tech.css";

function Tech({icon, field, content}) {
  return (
    <div className="tech">
      <div className="book">
        <div className="book-content">
            {content}
        </div>
        <div className="cover">
          <p>
            <i
              className={icon}
              style={{ fontSize: "2rem" }}
            ></i>
            <br />
            <br />
            {field}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tech;