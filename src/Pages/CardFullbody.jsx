import "../styles.css";
import React from "react";

// -----------------------------------------

import { Row } from "react-bootstrap";
import CardColComp from "../Component/CardColComp";

// -----------------------------------------

import { AllContextState } from "../CarStateContext";

// ----------------------------------------------

export default function CardFullbody() {
  const { page, handleSearch } = AllContextState();

  return (
    <Row className="containerRow2">
      <Row>
        {/* ------------------------------------forCardMap-------------------------------------------------------------- */}

        {handleSearch()
          .slice((page - 1) * 6, (page - 1) * 6 + 6)
          .map((row, ind) => {
            return <CardColComp cardDataval={row} key={ind} />;
          })}

        {/* ------------------------------------forCardMap-------------------------------------------------------------- */}
      </Row>
    </Row>
  );
}
