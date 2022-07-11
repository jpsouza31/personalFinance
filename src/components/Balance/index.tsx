import { View } from "react-native";
import * as S from "./styles";

const Balance = () => {
  return (
    <S.Container>
      <View>
        <S.ItemTitle>Saldo</S.ItemTitle>
        <S.ItemContent>
          <S.ItemSymbom>R$</S.ItemSymbom>
          <S.ItemBalance>19.000,00</S.ItemBalance>
        </S.ItemContent>
      </View>

      <View>
        <S.ItemTitle>Gastos</S.ItemTitle>
        <S.ItemContent>
          <S.ItemSymbom>R$</S.ItemSymbom>
          <S.ItemExpense>10.000,00</S.ItemExpense>
        </S.ItemContent>
      </View>
    </S.Container>
  );
};

export default Balance;
