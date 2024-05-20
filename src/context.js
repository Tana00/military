import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const LocationContext = createContext(null);

export const LocationProvider = ({ children }) => {
  const location = useLocation();
  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
};

export const useAppLocation = () => useContext(LocationContext);
