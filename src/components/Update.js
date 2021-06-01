import React, { useContext } from "react";
import { UserContext } from "../store/user-context";

const Update = () => {
  const ctx = useContext(UserContext);
  const { handleNameChange, setAge } = ctx;
  return (
    <div>
      <input type="text" onChange={handleNameChange} />
      <input type="number" onChange={(e) => setAge(e.target.value)} />
    </div>
  );
};

export default Update;
