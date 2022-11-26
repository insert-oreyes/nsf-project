import React from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "./Plans.css";
import { motion } from "framer-motion";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Get ready to</span>
        <span>start your journey</span>
        <span className="stroke-text">now with us</span>
      </div>
      {/* plans cards */}
      <div className="plans">
        {plansData.map((plan, i) => {
          return (
            <motion.div
              className="plan"
              key={i}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              {plan.icon}
              <span>{plan.name}</span>
              <span>€ {plan.price}</span>

              <div className="features">
                {plan.features.map((features, i) => {
                  return (
                    <div className="feature">
                      <img src={whiteTick} alt="" />
                      <span key={i}>{features}</span>
                    </div>
                  );
                })}
              </div>
              <div>
                <span>See more information --> </span>
              </div>
              <button className="btn">Join now</button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
