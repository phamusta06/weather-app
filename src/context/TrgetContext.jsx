/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const TargetContext = createContext(null);

export const useTargetContext = () => {
  return useContext(TargetContext);
};

const TargetProvider = ({ children }) => {
  const [nameSearch, setNameSearch] = useState("rabat");
  const [typeTemp, setTypeTemp] = useState(true);

  const contextValue = {
    nameSearch,
    setNameSearch,
    typeTemp,
    setTypeTemp,
  };

  return (
    <TargetContext.Provider value={contextValue}>
      {children}
    </TargetContext.Provider>
  );
};

export default TargetProvider;
