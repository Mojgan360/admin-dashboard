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
} from "../features/dashboard/dashboardSlice";

import avatar from "../data/avatar.jpg";

const Container = styled.div``;

const Wrapper = styled.nav`
  display: grid;
  justify-items: center;
  margin: 0 auto;
  width: 100vw;
`;
const UlWrapper = styled.ul`
  background-color: ${({ show }) => (show ? "green" : "yellow")};

  width: 100%;
  max-width: ${({ show }) => (show ? "900px" : "500px")};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: minmax(40px, 60px);
  align-items: center;

  /* background-color: yellow; */
`;

const IconeLeft = styled.div`
  background-color: greenyellow;
  display: ${({ myprops }) => (myprops ? "grid" : "none")};
  grid-column: 1 / 3;
  justify-self: start;

  /* width: 50px; */
`;

const IconeCenter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-column: 3 / 5;
  grid-gap: 5px;
`;
const IconeRight = styled.div`
  background-color: aquamarine;
  /* justify-content: ${({ myprops }) =>
    myprops ? "flex-start" : "space-between"}; */
  grid-column: 5 / 7;
  justify-self: end;

  img {
    width: 30px;
    height: 30px;
  }
  .avatar {
    display: flex;
    justify-content: flex-end;
    margin-right: 0;
  }
`;

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="TopLeft">
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
    if (size >= 1100) dispatch(setScreenSize());
  }, [size]);

  return (
    <Container>
      <Wrapper>
        <UlWrapper show={isSidebarOpen}>
          <IconeLeft className="left" myprops={isSidebarOpen}>
            <NavButton
              title="Menu"
              customFunc={() => {
                dispatch(toggleSidebar());
              }}
              color="green"
              icon={<AiOutlineMenu />}
            />
          </IconeLeft>

          <IconeCenter className="center">
            <NavButton
              title="Cart"
              // customFunc={() => handleClick("cart")}
              // color={currentColor}
              icon={<FiShoppingCart />}
            />
            <NavButton
              title="Chat"
              dotColor="#03C9D7"
              // customFunc={() => handleClick("chat")}
              // color={currentColor}
              icon={<BsChatLeft />}
            />
            <NavButton
              title="Notification"
              dotColor="rgb(254, 201, 15)"
              // customFunc={() => handleClick("notification")}
              // color={currentColor}
              icon={<RiNotification3Line />}
            />
          </IconeCenter>
          <IconeRight className="right">
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

            {/* {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />} */}
          </IconeRight>
        </UlWrapper>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
