"use client";

import React from "react";

export const EdenAIContext = React.createContext({});

export const useEdenAIContext = () => React.useContext(EdenAIContext);

export const EdenAIContextProvider = ({ children }) => {
  const [edenApiKey, setEdenApiKey] = React.useState(null);

  return (
    <EdenAIContext.Provider value={{ edenApiKey, setEdenApiKey }}>
      {children}
    </EdenAIContext.Provider>
  );
};
