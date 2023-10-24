import React, { useEffect } from "react";
import { useState } from "react";
import "./Register.css";
import { BiChevronsLeft } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/" + params.id, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ name, email, gender, status }), // body data type must match "Content-Type" header
    });
    const data = await response.json();
    console.log(data);
    navigate("/");
  };

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/" + params.id);
    const data = await response.json();
    setName(data.name);
    setEmail(data.email);
    setGender(data.gender);
    setStatus(data.status);
  };
 

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="app">
      <div className="container">
        <div className="heading">
          <p>User Management System</p>
        </div>
        <Link to={"/"}>
          <button className="allUser">
            <div className="symbolBack">
              <BiChevronsLeft />
            </div>
            <p>All Users</p>
          </button>
        </Link>

        <form
          onSubmit={(e) => {
            handleSave(e);
          }}
        >
          <div className="head">
            <h4>New User</h4>
            <p>Use the below form to create new account</p>
          </div>
          <div className="input">
            <label htmlFor="">Name</label>
            <input
              value={name}
              type="text"
              placeholder="Enter Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="">Email</label>
            <input
              value={email}
              type="text"
              placeholder="Enter Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="gender">
            <p>Gender</p>
            <input
              value="male"
              type="radio"
              name="gender"
              onChange={(e) => {
                setGender("male");
              }}
            />
            <label htmlFor="">Male</label>
            <input
              value="female"
              type="radio"
              name="gender"
              onChange={(e) => {
                setGender("female");
              }}
            />
            <label htmlFor="">Female</label>
          </div>
          <div className="status">
            <p>Status</p>
            <input
              value="active"
              type="radio"
              name="status"
              className="active"
              onChange={(e) => {
                setStatus("Active");
              }}
            />
            <label htmlFor="">Active</label>
            <input
              value="inactive"
              type="radio"
              name="status"
              className="inactive"
              onChange={(e) => {
                setStatus("Inactive");
              }}
            />
            <label htmlFor="">Inactive</label>
          </div>
          <div className="saveBtn">
            <button>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
