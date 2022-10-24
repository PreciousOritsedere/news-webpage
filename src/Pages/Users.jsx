import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import ErrorBoundary from "../components/ErrorBoundary";

function Users({ currUsers }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currPage, setCurrPage] = useState(1);
  const [usersPerPage] = useState(10);

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
    <div>
      <h1>Web 3 Users</h1>
      {currUsers.map((user) => (
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
          <h2>Home</h2>
        </div>
        <div>
          <ErrorBoundary>
            <div>currentUsers={currentUsers}</div>
          </ErrorBoundary>
          <ErrorBoundary>
            <Pagination
              numberOfPages={numberOfPages}
              currentPage={currPage}
              setCurrentPage={setCurrPage}
            />
          </ErrorBoundary>
        </div>
      </section>
    </div>
  );
}

export default Users;
