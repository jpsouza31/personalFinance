import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(ScrollView)`
  ${({}) => css`
    max-height: 84px;
    margin-top: 18px;
    margin-bottom: 14px;
    padding-right: 14px;
    padding-left: 14px;
  `}
`;

export const ActionButton = styled(TouchableOpacity)`
  ${({}) => css`
    align-items: center;
    margin-right: 32px;
  `}
`;

export const AreaButton = styled(View)`
  ${({}) => css`
    background-color: #ecf0f1;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
  `}
`;

export const LabelButton = styled(Text)`
  ${({}) => css`
    margin-top: 4px;
    text-align: center;
    font-weight: bold;
  `}
`;
