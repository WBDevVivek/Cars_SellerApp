import "../styles.css";
import React, { useState } from "react";

// -----------------------------------------

import { Container, Row, Button } from "react-bootstrap";

// -----------------------------------------

import Pagination from "../Component/Pagination";

import HeaderComp from "../Component/HeaderComp";
import CardFullbody from "../Pages/CardFullbody";

export default function HomePage() {
  return (
    <>
      <Container>
        <HeaderComp />
        <CardFullbody />
        <Row className="containerRow3">
          <Pagination />
        </Row>
      </Container>
    </>
  );
}
