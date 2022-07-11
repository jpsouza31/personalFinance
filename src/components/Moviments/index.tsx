import { useState } from "react";
import { View } from "react-native";
import { IList } from "../../routes/Home";
import * as S from "./styles";

const Moviments = ({ data }: { data: IList }) => {
  const [showValue, setShowValue] = useState(false);

  return (
    <S.Container onPress={() => setShowValue(!showValue)}>
      <S.StyledDate>{data.date}</S.StyledDate>
      <S.Content>
        <S.StyledLabel>{data.label}</S.StyledLabel>
        {showValue ? (
          <S.StyledValue type={data.type}>{`R$ ${data.value}`}</S.StyledValue>
        ) : (
          <S.StyledHiddenValue/>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Moviments;
