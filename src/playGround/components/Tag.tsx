import { Tag } from "luciel-stardust-react";
import * as S from "../styles";

export const TagExample = () => {
  return (
    <S.Section>
      <S.Subtitle>Tag</S.Subtitle>

      <S.Flex container>
        <S.Flex row>
          <Tag label="Primária" />

          <Tag label="Secundária" variant="secondary" />

          <Tag label="Terciária" variant="tertiary" />

          <Tag label="Ícone na direita" hasIconRight />

          <Tag label="Ícone na esquerda" variant="tertiary" hasIconLeft />
        </S.Flex>
      </S.Flex>
    </S.Section>
  );
};
