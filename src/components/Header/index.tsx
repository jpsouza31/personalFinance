import { Text, TouchableOpacity } from "react-native";
import * as S from "./styles";

import { Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.UserName>João Pedro</S.UserName>
        <S.UserButton activeOpacity={0.9}>
          <Feather name={"user"} size={27} color="#FFF"></Feather>
        </S.UserButton>
      </S.Content>
    </S.Container>
  );
};

export default Header;
