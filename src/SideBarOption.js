import React from "react";

import "./SideBarOption.css";

function SideBarOption({ inbox, Icon, text, number }) {
  return (
    <div className={`sidebaroption ${inbox && "sidebaroption--active"}`}>
      <div className="sideOptDetails">
        <Icon
          className={`sidebaroptionIcon ${
            inbox && "sidebaroptionIcon--active"
          }`}
        />
        <h4 className={`optionName ${inbox && "optionName--active"}`}>
          {text}
        </h4>
      </div>
      <p className={`optionnumber ${inbox && "optionnumber--active"}`}>
        {number}
      </p>
    </div>
  );
}

export default SideBarOption;
