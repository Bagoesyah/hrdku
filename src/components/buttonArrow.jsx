import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function ButtonArrow() {
  const navigate = useNavigate();

  return (
    <div className="button-arrow" onClick={() => navigate("/")}>
      <AiOutlineArrowLeft className="icon-arrow" />
    </div>
  );
}

export default ButtonArrow;
