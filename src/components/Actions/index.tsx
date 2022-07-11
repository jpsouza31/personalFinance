import * as S from "./styles";
import { AntDesign } from "@expo/vector-icons";

const Actions = () => {
  return (
    <S.Container horizontal={true} showsHorizontalScrollIndicator={false}>
      <S.ActionButton>
        <S.AreaButton>
          <AntDesign name="addfolder" size={26} color="#000" />
        </S.AreaButton>
        <S.LabelButton>Entradas</S.LabelButton>
      </S.ActionButton>

      <S.ActionButton>
        <S.AreaButton>
          <AntDesign name="tagso" size={26} color="#000" />
        </S.AreaButton>
        <S.LabelButton>Compras</S.LabelButton>
      </S.ActionButton>

      <S.ActionButton>
        <S.AreaButton>
          <AntDesign name="creditcard" size={26} color="#000" />
        </S.AreaButton>
        <S.LabelButton>Carteira</S.LabelButton>
      </S.ActionButton>

      <S.ActionButton>
        <S.AreaButton>
          <AntDesign name="barcode" size={26} color="#000" />
        </S.AreaButton>
        <S.LabelButton>Boletos</S.LabelButton>
      </S.ActionButton>

      <S.ActionButton>
        <S.AreaButton>
          <AntDesign name="setting" size={26} color="#000" />
        </S.AreaButton>
        <S.LabelButton>Conta</S.LabelButton>
      </S.ActionButton>
    </S.Container>
  );
};

export default Actions;
