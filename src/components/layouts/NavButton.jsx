import React from "react";
import styled from "styled-components";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
const Button = styled.button`
  position: relative;
  background-color: transparent;
  span {
    position: absolute;
    bottom: 15px;
    left: 12px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    z-index: 20;
  }
`;

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <Button type="button" onClick={() => customFunc()} style={{ color }}>
        <span style={{ background: dotColor }} />
        {icon}
      </Button>
    </TooltipComponent>
  );
};

export default NavButton;
