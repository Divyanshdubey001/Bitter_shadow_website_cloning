import { ArrayData } from "../data";
import "../Styles/latestcontent.css";

const LatestContent = () => {
  return (
    <>
      <div className="content-title">
        <h1>Latest Photos</h1>
      </div>
      <div className="content-wrapper">
        {ArrayData.map((arraydata) => (
          <div className="display-cards">
            <div className="imgs">
              <img src={arraydata.img} alt="img" className="currentImg"></img>
              <div className="card-desc">
              <div className="date">{arraydata.date}</div>
              <div className="views">{arraydata.views}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
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
    </>
  );
};

export default LatestContent;
