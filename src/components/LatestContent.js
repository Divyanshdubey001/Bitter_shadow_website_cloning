import { ArrayData } from "../data";
import HeroSection from "./HeroSection";
import { useState } from "react";
import "../styles/latestcontent.css";

const LatestContent = () => {
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleChange = (event) => {
    setFilteredCategory(event.target.value);
    console.log("Function Clicked");
  };

  const filteredImage = ArrayData.filter((img) => {
    return filteredCategory === "All" || img.category === filteredCategory;
  });
  return (
    <>
      <HeroSection />
      <div className="content-title">
        <h1>Latest Photos</h1>
      </div>
      <div className="category-container">
        <select onChange={handleChange} className="select-catagory">
          <option value="All">All</option>
          <option value="water">Water</option>
          <option value="abstract">Abstract</option>
          <option value="food">Food</option>
          <option value="sky">Sky</option>
          <option value="work">Work</option>
          <option value="beach">Beach</option>
          <option value="mountain">Mountain</option>
          <option value="sunset">Sunset</option>
        </select>
      </div>
      <div className="content-wrapper">
        {filteredImage.map((ArrayData) => (
          <div className="display-cards">
            <div className="imgs">
              <img src={ArrayData.img} alt="img" className="currentImg"></img>
              <div className="card-desc">
                <div className="date">{ArrayData.date}</div>
                <div className="views">{ArrayData.views}</div>
              </div>
            </div>
          </div>
        ))}
        <div>
          <div className="buttons">
            <div className="prev-button">
              <button>Previous</button>
            </div>
            <div className="button-number">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
            </div>
            <div className="next-button">
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestContent;
