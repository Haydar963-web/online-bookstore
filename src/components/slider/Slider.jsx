import "./slider.css";
import FirstBook from "../../images/book1.png";
import SecondtBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";
import { useState } from "react";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div className="slider-container">
      <i
        onClick={() => {
          handleClick("left");
        }}
        className="bi bi-chevron-double-left arrow-left"
      ></i>

      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className="slider-wrapper"
      >
        <div className="slide first-slide">
          <div className="slide-img-wrapper">
            <img src={FirstBook} alt="First Book" />
          </div>
          <div className="slide-info-wrapper">
            <h2 className="slide-info-title">Book Store</h2>
            <p className="slide-info-desc">
              It's not just reading, its living the adventure.
            </p>
          </div>
        </div>
        <div className="slide second-slide">
          <div className="slide-img-wrapper">
            <img src={SecondtBook} alt="Second Book" />
          </div>
          <div className="slide-info-wrapper">
            <h2 className="slide-info-title">The Books For Everyone</h2>
            <p className="slide-info-desc">
              You can read at home or at the bookstore.
            </p>
          </div>
        </div>
        <div className="slide third-slide">
          <div className="slide-img-wrapper">
            <img src={ThirdBook} alt="Third Book" />
          </div>
          <div className="slide-info-wrapper">
            <h2 className="slide-info-title">Check Out The New Titles</h2>
            <p className="slide-info-desc">
              we send you the book you want at home
            </p>
          </div>
        </div>
      </div>

      <i
        onClick={() => {
          handleClick("right");
        }}
        className="bi bi-chevron-double-right arrow-right"
      ></i>
    </div>
  );
};

export default Slider;
