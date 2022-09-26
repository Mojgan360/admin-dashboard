import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { AiOutlineMenu } from "react-icons/ai";
// import { FiShoppingCart } from "react-icons/fi";
// import { BsChatLeft } from "react-icons/bs";
// import { RiNotification3Line } from "react-icons/ri";
// import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useDispatch, useSelector } from "react-redux";
import {
  toggleSidebar,
  setScreenSize,
} from "../features/dashboard/dashboardSlice";

import { desktop } from "../utils/responsive";

// import avatar from "../data/avatar.jpg";

const Container = styled.div`
  width: 1100px;
  max-width: 1400px;
  /* background-color: #ccc; */
`;

const IconeWrapper = styled.div`
  width: 200px;

  display: ${({ myprops }) => (myprops ? "flex" : "none")};
`;

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="TopCenter">
    <button type="button" onClick={() => customFunc()} style={{ color }}>
      <span style={{ background: dotColor }} />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const dispatch = useDispatch();

  const { isSidebarOpen, chat, cart, userProfile, notification } = useSelector(
    (state) => state.dash
  );
  console.log("navbar is: ", isSidebarOpen);
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);
  useEffect(() => {
    if (size >= 1100) {
    } else {
      dispatch(setScreenSize());
    }
  }, [size]);

  return (
    <Container>
      <h1>{size}</h1>
      <IconeWrapper className="list-icone" myprops={isSidebarOpen}>
        <NavButton
          title="Menu"
          customFunc={() => {
            dispatch(toggleSidebar());
          }}
          color="green"
          icon={<AiOutlineMenu />}
        />
      </IconeWrapper>
    </Container>
  );
};

export default Navbar;
