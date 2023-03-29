import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function IconAccount() {
  const navigate = useNavigate();

  return (
    <div className="divIcon" onClick={() => navigate("/profile")}>
      <AiOutlineUser className="icon" />
    </div>
  );
}
