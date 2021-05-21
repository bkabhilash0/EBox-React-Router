import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const { users } = props;
  return (
    <div>
      {users.map((user) => (
        <h1 key={user.id}>
          <Link to={`/user/${user.username}`} style={{textDecoration: "none"}}>{user.name}</Link>
        </h1>
      ))}
    </div>
  );
};

export default Home;
