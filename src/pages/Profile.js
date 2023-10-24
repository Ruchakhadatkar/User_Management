import React, { useEffect } from "react";
import "./Profile.css";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const params = useParams();
  console.log(params);

  // useEffect(()=>{
  //   fetchData()

  // },[])

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/" + params.id);
    const data = await response.json();
    setName(data?.name);
    setEmail(data?.email);
    setGender(data?.gender);
    setStatus(data?.status);
  };

  fetchData();

  const handleDelete = async () => {
    const response = await fetch("http://localhost:5000/" + params.id, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    navigate("/");
  };

  return (
    <div className="app">
      <div className="container">
        <Link to={"/"}>
          <button className="homeBtn">
            <p>Home</p>
            <div className="icon">{/* <FaUser /> */}</div>
          </button>
        </Link>

        <div className="mainData">
          <div className="card">
            <div className="btn">
            <Link to={`/edit/${params.id}`}>
              <button className="edit">
                <FaPencil />
              </button>
              </Link>
              <button className="delete" onClick={handleDelete}>
                <MdDelete />
              </button>
            </div>
            <div className="info">
              <div>
                <FaUserLarge className="user" />
              </div>
              <div className="userDetails">
                <div className="detail">
                  <p>
                    {" "}
                    <span style={{ fontWeight: 800 }}>Name : </span>{" "}
                    <span>{name}</span>
                  </p>
                </div>
                <div className="detail">Email :{email}</div>
                <div className="detail">Gender :{gender}</div>
                <div className="detail">Status :{status}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
