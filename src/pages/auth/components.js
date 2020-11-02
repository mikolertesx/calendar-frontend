import styled from "styled-components";
import Colors from "../../constants/colors";

export const ContentOptionsDiv = styled.div`
  width: 100%;
  flex: 0 0 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-bottom: 0;
`;

export const ContentOptionsButton = styled.button`
  margin: 12px auto;
  padding: 24px;
  width: 80%;
  background: ${(props) => (!props.inverse ? Colors.coverOption : "white")};
  border: 1px solid ${Colors.coverOptionBorder};
  border-radius: 15px;
  color: ${(props) => (!props.inverse ? "white" : Colors.coverOption)};
  font-size: 1.25rem;
  cursor: pointer;
`;

export const Pages = {
  Options: "OPTIONS",
  LogIn: "LOGIN",
  SignIn: "SIGNIN",
};

export const LogoContent = styled.div`
  color: white;
  width: 100%;
  position: relative;
  margin: auto;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoTitle = styled.div`
  position: absolute;
  background: ${Colors.coverTitle};
  font-family: "Sans-serif";
  font-size: 3rem;
  border-radius: 5px;
  padding: 4px 26px;
  transform: rotate(-45deg);
  color: ${Colors.tabBackground};
`;

export const SmallPart = styled.span`
  font-size: 0.9em;
  font-weight: 200;
  font-family: "Open Sans";
`;

export const BigPart = styled.span`
  font-size: 1em;
  font-weight: 400;
  font-family: "Open Sans";
`;
