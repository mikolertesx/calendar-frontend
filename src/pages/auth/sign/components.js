import { ContentOptionsButton } from "../components";
import Colors from "../../../constants/colors";
import styled from "styled-components";

export const Content = styled.div`
  padding-top: 12px;
  height: 100%;
  background: ${Colors.coverBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Options = styled.div`
  margin-top: auto;
  flex: 0 0 65px;
  display: flex;
  justify-content: space-between;
`;
export const CustomOptions = styled(ContentOptionsButton)`
  margin: 0;
  border-radius: 0;
  border: transparent;
`;
