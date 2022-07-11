import { Text, TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(View)`
  ${({}) => css`
    background-color: #8000ff;
    flex-direction: row;
    padding: 30px 16px 44px 16px;
  `}
`;

export const Content = styled(View)`
  ${({}) => css`
    flex: 1;
    padding-top: 25px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const UserName = styled(Text)`
  ${({}) => css`
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
  `}
`;

export const UserButton = styled(TouchableOpacity)`
  ${({}) => css`
    width: 44px;
    height: 44px;
    background-color: rgba(255, 255, 255, 0.5);
    align-items: center;
    justify-content: center;
    border-radius: 22px;
  `}
`;
