import React from "react";
import "./index.css";
import { ChevronRightOutlined } from "@mui/icons-material";

interface CurratedPicksTileProps {
  imgURL: string;
  buttonText: string;
  onClick: () => void;
}

const CurratedPicksTile: React.FC<CurratedPicksTileProps> = ({
  buttonText,
  imgURL,
  onClick,
}) => {
  return (
    <div className="currated-tile-container">
      <div className="tile-image">
        <img src={imgURL} alt="" className="rounded-lg" />
      </div>
      <div className="tile-button">
        <p className="tile-button-text">{buttonText}</p>
        <ChevronRightOutlined style={{ color: "grey" }} />
      </div>
    </div>
  );
};

export default CurratedPicksTile;
