import React from "react";
import { bool } from "prop-types";
import * as S from "./SideBarMenu.style";

function Menu({ open, children, direction }) {
  return (
    <S.StyledMenu open={open} direction={direction}>
      {children}
    </S.StyledMenu>
  );
}

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
