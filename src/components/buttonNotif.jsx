import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function IconNotif() {
  const navigate = useNavigate();

  return (
    <div className="divIcon" onClick={() => navigate("/notification")}>
      <AiOutlineBell className="icon" />
    </div>
  );
}
