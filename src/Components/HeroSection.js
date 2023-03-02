import "../Styles/heroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-wrapper">
          <img
            src="https://images.pexels.com/photos/45229/drop-of-water-inject-water-drip-45229.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="loading"
          ></img>
          <div className="button-desc">
            <input type="text" placeholder="Search"></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
