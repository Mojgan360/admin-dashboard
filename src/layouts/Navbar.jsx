import React, { useEffect } from "react";
import styled from "styled-components";

import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/dashboard/dashboardSlice";

import avatar from "../data/avatar.jpg";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="TopCenter">
    <button type="button" onClick={() => customFunc()} style={{ color }}>
      {/* <span style={{ background: dotColor }} /> */}
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const dispatch = useDispatch();

  const { isSidebarOpen, chat, cart, userProfile, notification } = useSelector(
    (state) => state.dash
  );
  return (
    <Container>
      <div className="test">
        <NavButton
          title="Menu"
          customFunc={() => {
            dispatch(toggleSidebar());
          }}
          color="green"
          icon={<AiOutlineMenu />}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 1100px;
  max-width: 1400px;
  background-color: #ccc;
`;

export default Navbar;
