import React from "react";

import "./index.css";

interface BrandTileProps {
  imgUrl: string;
}

const BrandTile: React.FC<BrandTileProps> = ({ imgUrl }) => {
  return (
    <div className="brand-tile-container">
      <img src={imgUrl} alt="brand" className="brand-image" />
    </div>
  );
};

export default BrandTile;
