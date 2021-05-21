import React from "react";
import { useHistory, useLocation, useParams } from "react-router";

const User = (props) => {
  const params = useParams();
  let { users } = props;
  const { username } = params;
  const getUser = () => {
    const result = users.filter((user) => user.username === username)[0];
    if (result) {
      return (
        <>
          <h1>{result.name}</h1>
          <h1>{result.username}</h1>
          <h1>{result.email}</h1>
          <h1>{result.phone}</h1>
          <h1>{result.website}</h1>
        </>
      );
    }
    return <h1>No User Found</h1>;
  };
  return <div>{users.length < 1 ? <h1>Loading....</h1> : getUser()}</div>;
};

export default User;
