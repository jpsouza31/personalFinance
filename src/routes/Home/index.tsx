import { FlatList, ListRenderItem, Text, View } from "react-native";
import Actions from "../../components/Actions";
import Balance from "../../components/Balance";
import Header from "../../components/Header";
import Moviments from "../../components/Moviments";
import { ValueType } from "../../components/Moviments/styles";
import * as S from "./styles";

export interface IList {
  id: number;
  label: string;
  value: string;
  date: string;
  type: ValueType;
}

const list: IList[] = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300,90",
    date: "17/09/2022",
    type: ValueType.expense,
  },
  {
    id: 2,
    label: "Pix Cliente X",
    value: "2.500,00",
    date: "17/09/2022",
    type: ValueType.revenue,
  },
  {
    id: 3,
    label: "Salario",
    value: "7.200,00",
    date: "17/09/2022",
    type: ValueType.revenue,
  },
];

export default function Home() {
  const renderItem: ListRenderItem<IList> = ({ item }) => (
    <Moviments data={item} />
  );
  return (
    <S.Container>
      <Header />
      <Balance />

      <Actions />

      <S.Title>Ultimas movimentações</S.Title>

      <S.List
        data={list}
        keyExtractor={(item: IList) => String(item.id)}
        renderItem={renderItem}
      />
    </S.Container>
  );
}
