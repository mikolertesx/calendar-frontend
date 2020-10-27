import styled from 'styled-components';
import Colors from '../../constants/colors';

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