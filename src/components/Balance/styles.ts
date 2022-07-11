import { Text, TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(View)`
  ${({}) => css`
    background-color: #fff;
    flex-direction: row;
    justify-content: space-between;
    margin: -24px 14px 0px;
    padding: 22px 18px;
    z-index: 99;
    border-radius: 5px;
  `}
`;

export const ItemTitle = styled(Text)`
  ${({}) => css`
    font-size: 20px;
    color: #dadada;
  `}
`;

export const ItemContent = styled(Text)`
  ${({}) => css`
    flex-direction: row;
    align-items: center;
  `}
`;

export const ItemSymbom = styled(Text)`
  ${({}) => css`
    color: #dadada;
    margin-right: 6px;
  `}
`;

export const ItemBalance = styled(Text)`
  ${({}) => css`
    font-size: 22px;
    color: #2ecc71;
  `}
`;

export const ItemExpense = styled(Text)`
  ${({}) => css`
    font-size: 22px;
    color: #e74c3c;
  `}
`;
