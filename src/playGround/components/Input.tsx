import { Input } from "luciel-stardust-react";
import * as S from "../styles";

export const InputExample = () => {
  return (
    <S.Section>
      <S.Subtitle>Input</S.Subtitle>

      <S.Flex container>
        <S.Flex row>
          <Input
            label="Label do Input"
            placeholder="Placeholder"
            defaultValue="Valor do campo"
          />

          <Input
            label="Com helper text"
            placeholder="Placeholder"
            defaultValue="Valor do campo"
            helperText="Texto de ajuda"
          />

          <Input label="Com placeholder" placeholder="Placeholder" />

          <S.Flex flex={2}>
            <Input
              label="Full width"
              placeholder="Placeholder"
              defaultValue="Valor do campo"
              isFullWidth
            />
          </S.Flex>

          <Input
            label="Com erro"
            placeholder="Placeholder"
            defaultValue="Valor do campo"
            helperText="Texto de ajuda"
            hasError
          />

          <Input
            label="Desabilitado"
            placeholder="Placeholder"
            defaultValue="Valor do campo"
            helperText="Texto de ajuda"
            disabled
          />
        </S.Flex>
      </S.Flex>
    </S.Section>
  );
};
