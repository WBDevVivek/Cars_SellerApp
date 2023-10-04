import "../styles.css";
import React from "react";

// -----------------------------------------

import { Pagination } from "@mui/material";
import { AllContextState } from "../CarStateContext";

// -----------------------------------------

export default function Pagination2() {
  const { setPage, navigate } = AllContextState();

  return (
    <Pagination
      count={10}
      style={{
        padding: 20,
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}
      onChange={(_, pagiValue) => {
        setPage(pagiValue);
        navigate(`/page/${pagiValue}`);
      }}
    />
  );
}
