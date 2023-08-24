import React from "react";
import "./index.css";
import { ShoppingCart } from "@mui/icons-material";

interface FeaturedProductTileProps {
  id: number;
  image: string;
  inSale: boolean;
  name: string;
  originalPrice: number;
  salePrice?: number;
}

const FeaturedProductTile: React.FC<FeaturedProductTileProps> = ({
  image,
  name,
  originalPrice,
  inSale,
}) => {
  return (
    <div className="featured-tile-container">
      <div className="featured-image">
        <img
          src={image}
          alt="Featured Product"
          className="featured-product-image"
        />
        {inSale && <div className="sale-badge">Sale</div>}
      </div>
      <div className="featured-product-details">
        <div className="featured-product-info">
          <p>{name}</p>
          <p>{originalPrice}</p>
        </div>
        <div className="featured-product-cart-icon">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductTile;
