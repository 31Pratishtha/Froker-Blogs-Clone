import React, { useState, useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {setAdmin} = useContext(AdminContext)
  const navigate = useNavigate();

  const Login = (e) => {
    e.preventDefault();
    setAdmin(true)
    navigate("/blogs");
  };
  return (
    <div>
      <form action="" onSubmit={Login}>
        <button>Login as Admin</button>
      </form>
    </div>
  );
}
