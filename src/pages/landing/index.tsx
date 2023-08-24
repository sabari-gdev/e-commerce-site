import { Carousel } from "antd";
import React from "react";

import "./index.css";

import BrandTile from "../../components/LandingPage/BrandTile";
import ServiceTile from "../../components/LandingPage/ServiceTile";
import CurratedPicksTile from "../../components/LandingPage/PicksTitle";
import FeaturedProductTile from "../../components/LandingPage/FeaturedProductTile";

const featuredProducts = [
  {
    id: 1,
    name: "Shirt",
    image:
      "https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    originalPrice: 252,
    inSale: false,
  },
  {
    id: 2,
    name: "Shirt",
    image:
      "https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    originalPrice: 252,
    inSale: false,
  },
  {
    id: 3,
    name: "Shirt",
    image:
      "https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    originalPrice: 252,
    inSale: false,
  },
  {
    id: 4,
    name: "Shirt",
    image:
      "https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    originalPrice: 252,
    inSale: false,
  },
  {
    id: 5,
    name: "Shirt",
    image:
      "https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    originalPrice: 252,
    inSale: false,
  },
  {
    id: 6,
    name: "Shirt",
    image:
      "https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    originalPrice: 252,
    inSale: false,
  },
];

const LandingPage: React.FC = () => {
  return (
    <div className="h-[100vh]">
      <Carousel
        className="relative h-[80vh] object-contain"
        autoplay
        effect="fade"
      >
        <div className="relative">
          <img
            src="./assets/images/banner-1.jpg"
            alt="banner"
            className="h-[80vh] w-full rounded-md object-cover"
          />
        </div>

        <img
          src="./assets/images/banner-2.jpg"
          alt="banner"
          className="h-[80vh] w-full rounded-md object-cover"
        />
        <img
          src="./assets/images/banner-3.jpg"
          alt="banner"
          className="h-[80vh] w-full rounded-md object-cover"
        />
        <img
          src="./assets/images/banner-4.jpg"
          alt="banner"
          className="h-[80vh] w-full rounded-md object-cover"
        />
      </Carousel>

      <div className="brands-section">
        <h1 className="section-title">Brands</h1>
        <div className="flex justify-between items-center">
          <BrandTile imgUrl="./assets/images/brand-1.webp" />
          <BrandTile imgUrl="./assets/images/brand-2.png" />
          <BrandTile imgUrl="./assets/images/brand-3.webp" />
          <BrandTile imgUrl="./assets/images/brand-4.png" />
          <BrandTile imgUrl="./assets/images/brand-5.png" />
          <BrandTile imgUrl="./assets/images/brand-3.webp" />
          <BrandTile imgUrl="./assets/images/brand-4.png" />
          <BrandTile imgUrl="./assets/images/brand-5.png" />
        </div>
      </div>

      <div className="flex justify-between items-center py-6">
        <h1 className="section-title border-r-2 border-black flex-1">
          We provide best
          <br /> customer experiences
        </h1>

        <h1 className="text-md pl-6 text-gray-400">
          We ensure our customers have the best shopping experience.
        </h1>
      </div>

      <div className="services-section">
        <ServiceTile
          title="Original Products"
          content={
            "We provide money back guarantee if the\nproduct are not original"
          }
          icon="./assets/icons/icon_money_back.png"
        />
        <ServiceTile
          title="Satisfaction Guarantee"
          content="Exchange the product you've purchased if it doesn't fit on you"
          icon="./assets/icons/icon_customer_satisfaction.png"
        />
        <ServiceTile
          title="New Arrival Everyday"
          content="We updates our collection almost everyday"
          icon="./assets/icons/icon_arrival.png"
        />
        <ServiceTile
          title="Fast & Free shipping"
          content="We offer fast and free shipping for our loyal customers"
          icon="./assets/icons/icon_fast_shipping.png"
        />
      </div>

      <div className="currated-picks-section">
        <h1 className="section-title">Currated Picks</h1>
        <div className="currated-picks-tiles">
          <CurratedPicksTile
            imgURL="https://images.pexels.com/photos/2765557/pexels-photo-2765557.jpeg?auto=compress&cs=tinysrgb&w=1200"
            buttonText="Best Seller"
            onClick={() => {}}
          />
          <CurratedPicksTile
            imgURL="https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1200"
            buttonText="Shop Men"
            onClick={() => {}}
          />
          <CurratedPicksTile
            imgURL="https://images.pexels.com/photos/2905819/pexels-photo-2905819.jpeg?auto=compress&cs=tinysrgb&w=1200"
            buttonText="Shop Women"
            onClick={() => {}}
          />
          <CurratedPicksTile
            imgURL="https://images.pexels.com/photos/1980103/pexels-photo-1980103.jpeg?auto=compress&cs=tinysrgb&w=1200"
            buttonText="Shop Casuals"
            onClick={() => {}}
          />
        </div>
      </div>

      {/* <div className="featured-products-section">
        <h1 className="section-title">Featured Products</h1>
        <div className="featured-products-tiles w-fit"> */}
      {/* {featuredProducts.map((product) => (
            <FeaturedProductTile
              id={product.id}
              name={product.name}
              inSale={product.inSale}
              originalPrice={product.originalPrice}
              image={product.image}
            />
          ))} */}
      {/* </div>
      </div> */}

      <div className="limited-offer-banner">
        <img
          src="https://images.pexels.com/photos/11002846/pexels-photo-11002846.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt=""
          className="limited-banner-image"
        />
        <div className="limited-offer-text">
          <h1 className="limited-offer-title"> Limited Offer</h1>
          <h1 className="limited-offer-content">
            35% off only this Friday and get special gift
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
