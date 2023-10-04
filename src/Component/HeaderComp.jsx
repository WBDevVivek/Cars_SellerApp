import "../styles.css";
import React from "react";

// -----------------------------------------

import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";

// -----------------------------------------

import { AllContextState } from "../CarStateContext";

// ----------------------------------------------

export default function HeaderComp() {
  // ------------------------------------------------

  const { searchCatValue, setSearchCatValue } = AllContextState();

  return (
    <Row className="containerRow1">
      <Col>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            name="searchCategory"
            value={searchCatValue}
            onChange={(e) => setSearchCatValue(e.target.value)}
          />
        </Form>
      </Col>

      <Col>
        <NavDropdown title="Relevance" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
      </Col>

      <Col>
        <NavDropdown title="All Brands" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
      </Col>

      <Col></Col>
      <Col></Col>
    </Row>
  );
}
