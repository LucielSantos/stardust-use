import { Button } from "luciel-stardust-react";
import * as S from "../styles";

export const ButtonExample = () => {
  return (
    <S.Section>
      <S.Subtitle>Button</S.Subtitle>

      <S.Flex container>
        <S.Flex row>
          <Button>Padrão (primary)</Button>

          <Button variant="secondary">Secundário</Button>

          <Button disabled>Desabilitado</Button>
        </S.Flex>
      </S.Flex>
    </S.Section>
  );
};
