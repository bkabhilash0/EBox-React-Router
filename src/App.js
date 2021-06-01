import React, { useState } from "react";
import C1 from "./components/C1";
import R1 from "./components/R1";
import ContextProvider from "./store/user-context";
import Update from "./components/Update";

export const TestContext = React.createContext();

const App = () => {
  return (
    <ContextProvider>
      <C1/>
      <R1/>
      <Update/>
    </ContextProvider>
  )
};

export default App;
