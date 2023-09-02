import React from "react";
import "./index.css";

const Header = (props) => {
  return (
    <div className="nav-container">
      <div className="items-container">
        <div className="nav-item">
          <p>Flex Item 1</p>
        </div>

        <div className="nav-item">
          <p>Flex Item 2</p>
        </div>

        <div className="nav-item">
          <p>Flex Item 3 (Aligned to End)</p>
        </div>

        <div className="nav-item">
          <p>Flex Item 4 (Aligned to End)</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
