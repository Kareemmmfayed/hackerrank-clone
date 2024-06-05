import React from "react";
import question from "../assets/question.png";
import one from "../assets/animation/tool1.png";
import two from "../assets/animation/tool2.png";
import three from "../assets/animation/tool3.png";
import four from "../assets/animation/tool4.png";
import five from "../assets/animation/tool5.png";
import six from "../assets/animation/tool6.png";
import seven from "../assets/animation/tool7.png";

function Question() {
  return (
    <div className="question">
      <ul>
        <li>
          {" "}
          <img src={one} alt="" className="normal" />{" "}
        </li>
        <li>
          {" "}
          <img src={two} alt="" className="normal" />{" "}
        </li>
        <li>
          {" "}
          <img src={three} alt="" className="normal" />{" "}
        </li>
        <li>
          {" "}
          <img src={four} alt="" className="normal" />{" "}
        </li>
        <li>
          {" "}
          <img src={five} alt="" className="normal" />{" "}
        </li>
        <li>
          {" "}
          <img src={six} alt="" className="normal" />{" "}
        </li>
        <li>
          {" "}
          <img src={seven} alt="" className="normal" />{" "}
        </li>
      </ul>
      <img src={question} alt="Interview" />
    </div>
  );
}

export default Question;
