import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, [users]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000");
    const data = await response.json();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  };

  return (
    <div className="app">
      <div className="container">
       
        <Link to={"/register"}>
          <button className="userBtn">
            <p>New User</p>
            <div className="icon">
              <FaUser />
            </div>
          </button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>@Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.status}</td>
                  <td>
                    <div className="buttons">
                      <Link to={`/edit/${user._id}`}>
                        <button className="editBtn">
                          <FaPencil />
                        </button>
                      </Link>

                      <button
                        className="deleteBtn"
                        onClick={() => {
                          handleDelete(user._id);
                        }}
                      >
                        <MdDelete />
                      </button>
                      <Link to={`/profile/${user._id}`}>
                        <button className="profileBtn">
                          <CgProfile />
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
