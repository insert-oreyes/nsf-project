import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      {/* --> left side of the page */}
      <div className="blur hero-blur"></div>
      <div className="hero-left">
        <Header />

        {/* the best add */}
        <div className="the-best-add">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best natural physique's coach</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Fiber </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body.</span>
          </div>
          <div className="description-text">
            <span>
              In here we will shape and build your ideal body, following my
              method
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="hero-figures">
          <div>
            <span>
              <NumberCounter
                end={140}
                start={100}
                delay={2}
                className="increment"
                preFix="+"
              />
            </span>
            <span>Sport coach</span>
          </div>
          <div>
            <span><NumberCounter
                end={999}
                start={100}
                delay={2}
                className="increment"
                preFix="+"
              /></span>
            <span>Lorem lorem</span>
          </div>
          <div>
            <span><NumberCounter
                end={333}
                start={100}
                delay={2}
                className="increment"
                preFix="+"
              /></span>
            <span>Lorem Lorem</span>
          </div>
        </div>

        {/* buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>

      {/* --> right side of the page */}

      <div className="hero-right">
        {/* buttons */}
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero main img */}

        <img className="hero-image" src={hero_image} alt="" />
        <motion.img
          className="hero-image-back"
          src={hero_image_back}
          alt=""
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
        />

        {/* customers */}
        <motion.div
          className="calories"
          initial={{ right: "38rem" }}
          whileInView={{ right: "49rem" }}
          transition={transition}
        >
          <img src={calories} alt="" />
          <div>
            <span><NumberCounter
                end={200}
                start={100}
                delay={2}
                className="increment"
                preFix="+"
              /></span>
            <span>Customers</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
