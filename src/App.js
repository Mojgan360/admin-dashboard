import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import styled from "styled-components";
import "./App.css";
import { Navbar, Sidbar } from "./layouts";

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
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Wrapper>
          <TooltipComponent position="Top" content="Settings ">
            <Button type="button">
              <FiSettings />
            </Button>
          </TooltipComponent>
        </Wrapper>
        <div className="wrapper">
          <div className="nav-side">
            <Sidbar />
          </div>

          <div className="container">
            <Navbar />

            <div>
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
            </div>
          </div>
        </div>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  justify-content: space-around;

  .wrapper {
    display: flex;
  }
  .nav-side {
    background-color: pink;
  }
  .container {
    background-color: tomato;
  }
`;
const Wrapper = styled.div`
  z-index: 1000;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: blue;
  padding: 8px;
  &:hover {
    background-color: blue;
    color: #fff;
    border-radius: 50%;
  }
`;

export default App;
