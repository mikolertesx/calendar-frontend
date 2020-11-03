import styled from "styled-components";
import Colors from "../../constants/colors";

export const DayContent = styled.div`
`;

export const FormatedDate = styled.h3`
  font-size: 1.25rem;
  text-align: center;
  margin: 12px;
  font-family: "Arial";
  font-weight: normal;
`;

export const EventPlannedH3 = styled.h3`
  font-size: 1rem;
  text-align: left;
  margin-bottom: 6px;
  margin-left: 12px;
  font-family: "Arial";
  font-weight: thin;
`;

export const EventList = styled.ul`
  list-style: none;
`;

export const CircularButton = styled.button`
  display: block;
  margin: 24px auto;
  color: white;
  background: ${Colors.coverOption};
  border: none;
  font-size: 3rem;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  outline: none;
  transition: background 400ms, color 300ms;

  &:hover {
    background: white;
    color: ${Colors.coverOption};
  }
`;

export const GoBackButton = styled.button`
  width: 100%;
  height: 64px;
  background: gray;
  color: white;
  margin: 0;
  border: none;
`;