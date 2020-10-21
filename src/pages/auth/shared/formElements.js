import styled from "styled-components";
import Colors from "../../../constants/colors";

export const Content = styled.div`
  background: ${props => props.background || Colors.tabBackground};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormContent = styled.div`
  padding: 32px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 24px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  flex: 1 0 auto;
`;

export const Details = styled.div`
  flex: 0 0 auto;
  background: rgba(255, 255, 255, 0.1);
  padding: 32px;
  display: flex;
`;

export const DetailsButton = styled.button`
  flex: 1 0 72px;
  font-size: 1.25rem;
  padding: 32px;
  margin: 12px;
  background: ${Colors.coverOption};
  border: none;
  color: white;
  cursor: pointer;
`;

export const Label = styled.label`
  display: block;
  font-family: "Open Sans";
  color: white;
  width: 100%;
  text-align: center;
`;

export const Input = styled.input`
  display: block;
  padding: 12px;
  font-size: 1.25rem;
  outline: none;
  margin: auto;
  margin-bottom: 32px;
  width: 85%;
  border: 1px solid black;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.5);
  color: white;
`;