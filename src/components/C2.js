import React from "react";
import { UserContext } from "../store/user-context";

const C2 = (props) => {
  return (
    <UserContext.Consumer>
      {(ctx) => {
        return <div>C2 Component name = {ctx.age}</div>;
      }}
    </UserContext.Consumer>
  );
};

export default C2;
