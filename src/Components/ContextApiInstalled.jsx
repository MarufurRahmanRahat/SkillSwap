import React, { createContext, useState } from "react";

export const ContextApiInstalled = createContext();

export const InstalledProvider = ({ children }) => {
  const [install, setInstall] = useState(false);
   return (
    <ContextApiInstalled.Provider
      value={{ install, setInstall }}
    >
      {children}
    </ContextApiInstalled.Provider>
  );
};