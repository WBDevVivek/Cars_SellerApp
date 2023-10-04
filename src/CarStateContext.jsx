import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// -----------------------------jsonData--------------

import cardDataJSON from "./data.json";

// -----------------------------jsonData--------------

const CarStates = createContext();

export function CarStateContext({ children }) {
  // ----------------------------------------------------------------------------------------

  const navigate = useNavigate();
  const location = useLocation();

  // ----------------------------------------------------------------------------------------

  var varForCardData = cardDataJSON.cardData;

  // ----------------------------------------------------------------------------------------

  const [allCarData, setAllCarData] = useState(varForCardData);

  const [searchCatValue, setSearchCatValue] = useState("");

  const [page, setPage] = useState(1);

  const handleSearch = () => {
    return allCarData.filter((data) =>
      data.cardTitle.toLowerCase().includes(searchCatValue)
    );
  };

  useEffect(() => {
    if (location.pathname === "/page/1") {
      navigate("/");
    }
  });

  // ----------------------------------------------------------------------------------------

  return (
    <CarStates.Provider
      value={{
        varForCardData,
        navigate,
        location,
        searchCatValue,
        setSearchCatValue,
        allCarData,
        setAllCarData,
        handleSearch,
        page,
        setPage
      }}
    >
      {children}
    </CarStates.Provider>
  );
}
export const AllContextState = () => {
  return useContext(CarStates);
};
