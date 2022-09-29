import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import styled from "styled-components";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { Navbar, Sidbar } from "./components/layouts";

import {
  Ecommerce,
  Orders,
  Employees,
  Customers,
  Calendar,
  ColorPicker,
  Editor,
  Kanban,
  Area,
  ColorMapping,
  Bar,
  Stacked,
  Pyramid,
  Line,
  Pie,
  Financial,
} from "./pages";

const Container = styled.div`
  z-index: 200;
  max-width: 1440px;
  width: 100vw;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: minmax(50px, auto);

  overflow: hidden;
`;

const SidebarWrapper = styled.div`
  width: 270px;

  display: ${({ show }) => show && "none"};
  grid-column: 1 / 3;
  grid-row: 1 / 8;
`;

const NavWrapper = styled.div`
  background-color: #ccc;
  width: 100%;

  grid-column: ${({ show }) => (show ? "1/13" : "3 / 13")};
  grid-row: 1 /2;
  overflow: hidden;
`;
const ButtonWrapper = styled.div`
  grid-column: 12 / 13;
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
`;

const PageWrapper = styled.div`
  grid-column: ${({ show }) => (show ? "1/13" : "3 / 13")};
  grid-row: 2 /3;
`;

const Button = styled.div`
  padding: 8px;
  font-size: 20px;
  color: blue;
  display: flex;
  align-items: center;

  &:hover {
    background-color: blue;
    color: #fff;
    border-radius: 50%;
  }
`;

function App() {
  const { isSidebarOpen } = useSelector((state) => state.dash);
  return (
    <BrowserRouter>
      <Container>
        <ButtonWrapper>
          <TooltipComponent position="Top" content="Settings ">
            <Button type="button">
              <FiSettings />
            </Button>
          </TooltipComponent>
        </ButtonWrapper>
        <SidebarWrapper show={isSidebarOpen}>
          <Sidbar />
        </SidebarWrapper>

        <NavWrapper show={isSidebarOpen}>
          <Navbar />
        </NavWrapper>
        <PageWrapper show={isSidebarOpen}>
          <Routes>
            {/* dashboard  */}
            <Route path="/" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />

            {/* pages  */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />

            {/* apps  */}
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/color-picker" element={<ColorPicker />} />

            {/* charts  */}
            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<ColorMapping />} />
            <Route path="/pyramid" element={<Pyramid />} />
            <Route path="/stacked" element={<Stacked />} />
          </Routes>
        </PageWrapper>
      </Container>
    </BrowserRouter>
  );
}

export default App;
