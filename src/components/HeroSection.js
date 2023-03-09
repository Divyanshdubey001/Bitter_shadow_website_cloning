import "../styles/heroSection.css";
import { ArrayData } from "../data/index";
import { useState } from "react";

const HeroSection = () => {
  const [searchImage, setSearchImage] = useState("");

  const handleSearchImage = (event) => {
    setSearchImage(event.target.value);
  };

  const filteredImage = ArrayData.filter(
    (image) => image.category === searchImage.toLowerCase()
  );

  return (
    <>
      <div className="hero-container">
        <div className="hero-wrapper">
          <img
            className="hero-wrapper-img"
            src="https://images.pexels.com/photos/45229/drop-of-water-inject-water-drip-45229.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="loading"
          ></img>

          <div className="search-bar">
            <input
              className="input-search-bar"
              type="text"
              placeholder="Search images..."
              onChange={handleSearchImage}
              value={searchImage} 
            ></input>
            <div className="filter-image-container">
              {filteredImage.map((ArrayData) => (
                <div className="filter-image-wrapper">
                  <div className="filter-img">
                    <img
                      src={ArrayData.img}
                      className="filtered-op"
                      alt="img"
                    ></img>
                    <div className="card-desc-filter">
                      <div className="date">{ArrayData.date}</div>
                      <div className="views">{ArrayData.views}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
