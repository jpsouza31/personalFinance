import Balance from "../../components/Balance";
import Header from "../../components/Header";
import * as S from "./styles";

export default function Home() {
  return (
    <S.Container>
      <Header />
      <Balance />
    </S.Container>
  );
}
