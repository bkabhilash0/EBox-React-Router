import React, { useState } from "react";

export const UserContext = React.createContext({
    name: "",
    age: "",
    setAge: () => {},
    handleNameChange: (e) => {},
});

const ContextProvider = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("0");

  const handleNameChange = (e) => {
      setName(e.target.value)
  }

  const values = {
    name,
    age,
    handleNameChange,
    setAge,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

export default ContextProvider;