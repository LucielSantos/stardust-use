import { Typography } from "luciel-stardust-react";
import * as S from "../styles";

export const TypographyExample = (): JSX.Element => {
  return (
    <S.Section>
      <S.Subtitle>Typography</S.Subtitle>

      <Typography>Default - Exemplo de tipografia</Typography>

      <Typography type="h6">type = h6 - Exemplo de tipografia</Typography>

      <Typography type="l4">type = l4 - Exemplo de tipografia</Typography>
    </S.Section>
  );
};
