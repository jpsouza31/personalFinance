import { SafeAreaView } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  ${({}) => css`
    flex: 1;
    background-color: #fafafa;
  `}
`;