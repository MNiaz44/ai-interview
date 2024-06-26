// AppProvider.js
import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";

const ContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();

  return (
    <AppContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
