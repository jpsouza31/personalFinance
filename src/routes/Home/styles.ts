import { FlatList, SafeAreaView, Text } from "react-native";
import styled, { css } from "styled-components/native";
import { IList } from ".";

export const Container = styled(SafeAreaView)`
  ${({}) => css`
    flex: 1;
    background-color: #fafafa;
  `}
`;

export const Title = styled(Text)`
  ${({}) => css`
    font-size: 18px;
    font-weight: bold;
    margin: 14px;
  `}
`;

export const List = styled(FlatList as new () => FlatList<IList>)`
  ${({}) => css`
    margin-left: 14px;
    margin-right: 14px;
  `}
`;
