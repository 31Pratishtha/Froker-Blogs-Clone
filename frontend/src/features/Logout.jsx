import React, { useState, useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const {setAdmin} = useContext(AdminContext)
  const navigate = useNavigate();

  const Logout = (e) => {
    e.preventDefault();
    setAdmin(false)
    navigate("/blogs");
  };
  return (
    <div>
      <form action="" onSubmit={Logout}>
        <button>Logout</button>
      </form>
    </div>
  );
}
