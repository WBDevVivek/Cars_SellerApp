import "../styles.css";
import React from "react";

// -----------------------------------------

import { Card } from "react-bootstrap";

// -----------------------------------------

// -----------------------------reactIcons--------------

import { IoBedOutline } from "react-icons/io5";

import { GiBathtub } from "react-icons/gi";
import { GiGothicCross } from "react-icons/gi";

import { BsBuildings } from "react-icons/bs";

// -----------------------------reactIcons--------------

export default function FourIconComp() {
  return (
    <Card.Text className="fourIconsDiv">
      {/* ------------------------------------------------ */}
      <span className="fourIconsDivFirst">
        <span className="firstIcon">
          <BsBuildings size={20} color="rgb(92 97 100)" />

          <span className="para2">4 People</span>
        </span>

        {/* ------------------------------------------------ */}

        <span className="secIcon">
          <IoBedOutline size={20} color="rgb(92 97 100)" />

          <span className="para2">4 Bed</span>
        </span>
      </span>
      {/* ------------------------------------------------ */}
      <span className="fourIconsDivSecond">
        <span className="thirdIcon">
          <GiBathtub size={20} color="rgb(92 97 100)" />

          <span className="para2">1 Bath</span>
        </span>

        {/* ------------------------------------------------ */}

        <span className="fourthIcon">
          <GiGothicCross size={20} color="rgb(92 97 100)" />

          <span className="para2">732 sft</span>
        </span>
      </span>
      {/* ------------------------------------------------ */}
    </Card.Text>
  );
}
