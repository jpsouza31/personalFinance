import { Text, TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  ${({}) => css`
    flex: 1;
    margin-bottom: 24px;
    border-bottom-width: 0.5;
    border-bottom-color: #dadada;
  `}
`;

export const Content = styled(View)`
  ${({}) => css`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2px;
    margin-bottom: 8px;
  `}
`;

export const StyledDate = styled(Text)`
  ${({}) => css`
    color: #dadada;
    font-weight: bold;
  `}
`;

export const StyledLabel = styled(Text)`
  ${({}) => css`
    font-size: 16px;
    font-weight: bold;
  `}
`;

const ValueModifier = {
  revenue: css`
    color: #2ecc71;
  `,
  expense: css`
    color: #e74c3c;
  `,
};

export enum ValueType {
  revenue = "revenue",
  expense = "expense",
}

interface ValueStyledProps {
  type: keyof typeof ValueType;
}

export const StyledValue = styled(Text)<ValueStyledProps>`
  ${({ type }) => css`
    font-size: 16px;
    color: #2ecc71;
    font-weight: bold;
    ${type && ValueModifier[type]}
  `}
`;

export const StyledHiddenValue = styled(View)`
  ${({}) => css`
    margin-top: 6px;
    width: 80px;
    height: 10px;
    background-color: #DADADA;
    border-radius: 8px;
  `}
`;
