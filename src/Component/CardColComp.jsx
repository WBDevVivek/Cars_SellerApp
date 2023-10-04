import "../styles.css";
import React from "react";

// -----------------------------------------

import { Col, Button, Card } from "react-bootstrap";

// -----------------------------------------

// -----------------------------reactIcons--------------

import { BsCurrencyDollar } from "react-icons/bs";

import { AiOutlineHeart } from "react-icons/ai";
import FourIconComp from "./FourIconComp";

// -----------------------------reactIcons--------------

export default function CardColComp({ cardDataval }) {
  return (
    <Col>
      {/* -------------for Card-------------- */}

      <Card style={{}}>
        {/* ------------------------------------------------ */}

        <Button variant="primary " className="yearBTN">
          {cardDataval?.year}
        </Button>

        <div className="heartIconDiv">
          <AiOutlineHeart size={20} color="" />
        </div>

        {/* ------------------------------------------------ */}

        <div className="otherDetailsDiv">
          <Card.Img variant="top" src={cardDataval?.cardImg} />

          {/* ------------------------------------------------ */}

          <div className="fourDotDiv">
            <div className="forDotDivCircle1 active"></div>
            <div className="forDotDivCircle1"></div>
            <div className="forDotDivCircle1"></div>
          </div>

          {/* ------------------------------------------------ */}

          <Card.Body>
            <Card.Title>{cardDataval?.cardTitle}</Card.Title>
            {/* ------------------------------------------------ */}
            <FourIconComp />
            {/* ------------------------------------------------ */}

            <div className="lastDiv">
              {/* ------------------------------------------------ */}

              <div className="lastDivFirst">
                <span className="span1">
                  <BsCurrencyDollar size={20} color="" />
                </span>
                <span className="span2">{cardDataval?.price}</span>
                <span className="span3">/month</span>
              </div>
              {/* ------------------------------------------------ */}
              <div className="lastDivSec">
                <Button variant="primary">Read More</Button>
              </div>

              {/* ------------------------------------------------ */}
            </div>
          </Card.Body>
        </div>
      </Card>

      {/* -------------for Card-------------- */}
    </Col>
  );
}
