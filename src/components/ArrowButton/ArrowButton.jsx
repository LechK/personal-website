import React from "react";
import { bool, func } from "prop-types";
import * as S from "./ArrowButton.style";

function ArrowButton({ open, setOpen, rotation, color }) {
  return (
    <S.Center
      rotation={rotation}
      open={open}
      onClick={() => setOpen(!open)}
      className={color}
    ></S.Center>
  );
}

ArrowButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default ArrowButton;
