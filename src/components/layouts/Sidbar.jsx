import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../features/dashboard/dashboardSlice";
import { desktop } from "../../utils/responsive";

import { links } from "../../data/dummy";
// import { GiBlackBar } from "react-icons/gi";

const Sidbar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state) => state.dash);
  console.log(isSidebarOpen);

  return (
    <Container show={isSidebarOpen}>
      <Header>
        <Link to="/">
          <SiShopware /> <span>Shoppy</span>
        </Link>
        <TooltipComponent content="menu" position="TopCenter">
          <button
            type="button"
            onClick={() => {
              dispatch(toggleSidebar());
            }}
          >
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </Header>
      <SideBarWrapper>
        <>
          <Main>
            {links.map(({ title, links }) => {
              return (
                <div key={title}>
                  <p> {title}</p>
                  <ul className="main-ul">
                    {links.map((item) => {
                      return (
                        <MyNavLink key={item.name} to={`/${item.name}`}>
                          {item.icon} <span>{item.name}</span>
                        </MyNavLink>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </Main>
        </>
      </SideBarWrapper>
    </Container>
  );
};
const Container = styled.div`
  display: ${(props) => props.show && "none"};
  /* width: 18rem; */
`;
const SideBarWrapper = styled.aside``;

const Header = styled.div`
  overflow: hidden;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-weight: 700;
    font-style: italic;
  }
  button {
    width: 30px;
    height: 30px;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    background-color: transparent;
    border-radius: 50%;
    color: black;
    ${desktop({
      display: "flex",
    })}
    &:hover {
      background-color: #e4e4e7;
    }
  }
`;
const Main = styled.div`
  /* overflow: auto; */
  overflow: hidden;
  margin-left: 1rem;

  flex: 1;
  display: flex;
  flex-direction: column;
  p {
    margin-left: 1.5rem;
    font-weight: 400;
    color: #9ca3af;
    text-transform: uppercase;
  }
  span {
    margin-left: 1rem;
  }
  .main-ul {
    display: flex;
    flex-direction: column;
    color: gray;
  }
`;

const MyNavLink = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  color: #27272a;
  font-weight: 400;
  text-decoration: none;
  text-transform: capitalize;
  letter-spacing: 1px;

  &:hover {
    color: green;
    background-color: #d4d4d4;
  }

  &.active {
    color: #16a34a;
    font-weight: 700;
  }
`;

export default Sidbar;
