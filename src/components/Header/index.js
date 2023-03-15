import React from "react";
import "./Header.css";

import Image from "../../images/soc-logo.png";

export default function Header({ title }) {
  return (
    <div className="Header">
      <img src={Image} alt="School of code logo" />
      <h1>{title}</h1>
    </div>
  );
}
