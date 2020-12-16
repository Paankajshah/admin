import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => `
            background : ${theme.palette.primary.main};
      `}
`;

export const LoginBox = styled(Paper)`
  width: 400px;
  border-radius: 10px;
  padding: 2rem 2rem 1.5rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .passwordContainer {
    width: 100%;
    position: relative;
    .show-hide-btn {
      position: absolute;
      top: 5px;
      right: 10px;
    }
  }
  .btm-actions {
    display: flex;
  }
  ${({ theme }) => `
            background : ${theme.palette.primary.main};
      `}
  @media(max-width : 992px) {
    height: 100%;
    width: 100%;
  }
`;

export const Logo = styled.img`
  max-width: 120px;
  height: auto;
  margin-bottom: 1rem;
`;
