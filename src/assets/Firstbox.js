import React from "react";
import proud from "./proud.png";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function Firstbox() {
  return (
    <>
      <div className="first">
        <div className="size-content left">
          <h1>
            Hi, I'm Sarim Hassan{" "}
            <span role="img" aria-label="img" className="wave">
              👋
            </span>
          </h1>
          <p>
            A Computer Scientist with a thought of changing the world with
            technologies like Deep Learning and Block Chain.An aspiring Data
            Scientist with a focus on Python for Machine Learning, Deep learning
            for computer vision and Natural Language
            <br />
            <span className="icons blue">
              <FaFacebook />
            </span>
            <span className="icons purple">
              <GrInstagram />
            </span>
            <span className="icons blue">
              <AiFillLinkedin />
            </span>
            <span className="icons">
              <AiFillGithub />
            </span>
          </p>
        </div>
        <div className="size-image right">
          <img src={proud} alt="proud" className="image" />
        </div>
      </div>
    </>
  );
}
export default Firstbox;
