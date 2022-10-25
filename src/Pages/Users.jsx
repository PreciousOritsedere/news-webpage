import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import ErrorBoundary from "../components/ErrorBoundary";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currPage, setCurrPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await fetch("https://randomuser.me/api/?results=20");
      const data = await result.json();
      setUsers(data.results);
      setLoading(false);
    };

    fetchApi();
  }, []);

  // Spinner
  if (loading) {
    return <Spinner />;
  }

  //   Pagination calc
  const indexOfLastUser = currPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const numberOfPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="usersContainer">
      <h1>Web 3 Users</h1>
      {currentUsers.map((user) => (
        <div key={user.login.uuid} className="users">
          <img src={user.picture.thumbnail} alt="user" />
          <h3>
            {user.name.first} {user.name.last}
          </h3>
          <p>{user.email}</p>
          <p>
            {user.location.city}, {user.location.country}
          </p>
        </div>
      ))}

      <section>
        <div>
          <ErrorBoundary>
            <Pagination
              numberOfPages={numberOfPages}
              currPage={currPage}
              setCurrPage={setCurrPage}
            />
          </ErrorBoundary>
        </div>
      </section>
    </div>
  );
}

export default Users;
