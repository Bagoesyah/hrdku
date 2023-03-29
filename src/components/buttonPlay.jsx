import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function ButtonPlay() {
  const navigate = useNavigate();

  return (
    <div className="divIcon" onClick={() => navigate("/absensi-harian")}>
      <BsFillPlayFill className="button-play" />
    </div>
  );
}
