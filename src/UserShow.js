import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const UserShow = (props) => {
  const [user, setUser] = useState({});
  const params = useParams();
  let id = params.id;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        const result = response.data;
        setUser(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <div>
      <h2>User - {id}</h2>
      <p>
        {user.name} - {user.email} - {user.address && user.address.city}
      </p>
      <Link to="/users">back</Link>
    </div>
  );
};

export default UserShow;
