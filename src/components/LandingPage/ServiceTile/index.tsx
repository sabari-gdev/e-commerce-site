import React from "react";
import "./index.css";

interface ServiceTileProps {
  title: string;
  content: string;
  icon: string;
}

const ServiceTile: React.FC<ServiceTileProps> = ({ icon, title, content }) => {
  return (
    <div className="tile-container">
      <div className="icon-container">
        <img src={icon} alt="service-logo" className="service-icon" />
      </div>
      <div>
        <p className="service-title">{title}</p>
        <p className="service-content">{content}</p>
      </div>
    </div>
  );
};

export default ServiceTile;
