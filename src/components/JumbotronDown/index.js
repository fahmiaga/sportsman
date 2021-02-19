import React from "react";
import jumbotronImage from "../../assets/img/jumbotron/image1.png";

const JumbotronDown = () => {
  return (
    <>
      <div
        className="jumbotron-down"
        style={{ backgroundImage: `url(${jumbotronImage})` }}
      >
        <h1>Join Sportsman for free</h1>
        <div>
          <button className="fb">
            <i class="fab fa-facebook-f"></i>&nbsp; Facebook
          </button>
        </div>
        <div>
          <button className="google">
            <i class="fab fa-google"></i>&nbsp; Google
          </button>
        </div>
        <a href="">Signup with email</a>
        <p>
          By signing up for Sportsman, you agree to the Terms of Service. View
          our Privacy Policy.
        </p>
      </div>
      <div class="subscription">
        <h3>Sportsman Subscription</h3>
        <div class="explore-button">
          <button>Explore</button>
        </div>
      </div>
    </>
  );
};

export default JumbotronDown;
