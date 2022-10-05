import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useDispatch, useSelector } from "react-redux";
import {
  toggleSidebar,
  setScreenSize,
  handleClick,
} from "../../features/dashboard/dashboardSlice";

import { NavButton, Cart, Chat, Notification, UserProfile } from "../index";

import avatar from "../../data/avatar.jpg";

const NavWrapper = styled.nav`
  width: 100%;
  height: 50px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const UlWrapper = styled.ul`
  width: 100%;

  display: flex;
  flex-wrap: nowrap;
  justify-content: ${({ show }) => (show ? "space-between" : "flex-end")};
  align-items: center;
`;

const IconeLeft = styled.div`
  display: ${({ show }) => show || "none"};
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .avatar {
    display: flex;
    margin-right: 10px;
  }
`;
const IconeCenter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  > * {
    padding-right: 10px;
  }
`;

const Navbar = () => {
  const dispatch = useDispatch();

  const { isSidebarOpen, chat, cart, userProfile, notification } = useSelector(
    (state) => state.dash
  );
  console.log("cart is:   ", cart);

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
  }, []);
  useEffect(() => {
    if (size >= 1100) dispatch(setScreenSize());
  }, [size]);

  return (
    <NavWrapper show={isSidebarOpen}>
      <UlWrapper show={isSidebarOpen}>
        <IconeLeft className="left" show={isSidebarOpen}>
          <NavButton
            title="Menu"
            customFunc={() => {
              dispatch(toggleSidebar());
            }}
            color="green"
            icon={<AiOutlineMenu />}
          />
        </IconeLeft>

        <NavRight>
          <IconeCenter className="center">
            <NavButton
              title="Chat"
              // customFunc={() => {
              //   dispatch(handleClick("chat"));
              // }}
              customFunc={() => dispatch(handleClick("chat"))}
              color="#000"
              icon={<BsChatLeft />}
              dotColor="rgb(254, 201, 15)"
            />
            <NavButton
              title="Cart"
              customFunc={() => {
                dispatch(handleClick("cart"));
              }}
              color="#000"
              icon={<FiShoppingCart />}
              dotColor="rgb(254, 201, 15)"
            />
            <NavButton
              title="Notification"
              customFunc={() => {
                dispatch(handleClick("notification"));
              }}
              color="#000"
              icon={<RiNotification3Line />}
              dotColor="rgb(254, 201, 15)"
            />
          </IconeCenter>
          <div>
            <TooltipComponent content="Profile" position="TopLeft">
              <div
                className="avatar"
                // onClick={() => handleClick("userProfile")}
              >
                <img src={avatar} alt="user-profile" />
                <p>
                  <span>Hi,</span>
                  <span>Michael</span>
                </p>
                <MdKeyboardArrowDown />
              </div>
            </TooltipComponent>

            {cart && <Cart />}
            {chat && <Chat />}
            {notification && <Notification />}
            {userProfile && <UserProfile />}
          </div>
        </NavRight>
      </UlWrapper>
    </NavWrapper>
  );
};

export default Navbar;
