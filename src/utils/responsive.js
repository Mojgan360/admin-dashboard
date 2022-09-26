import { css } from "styled-components";

export const desktop = (props) => {
  return css`
    @media only screen and (max-width: 1100px) {
      ${props}
    }
  `;
};
