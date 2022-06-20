import { Select } from "luciel-stardust-react";
import {
  SelectOptions,
  SelectRef,
  SelectValue,
} from "luciel-stardust-react/lib/cjs/components/Select/interfaces";
import { useMemo, useRef, useState } from "react";
import * as S from "../styles";

export const SelectExample = () => {
  const selectRef = useRef<SelectRef>(null);
  const [value, setValue] = useState<SelectValue | null>(null);

  const options = useMemo<SelectOptions>(
    () => [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" },
      {
        section: "Section 1",
        options: [
          { label: "Option 1 1", value: "section-1-option-1" },
          { label: "Option 1 2", value: "section-1-option-2" },
          { label: "Option 1 3", value: "section-1-option-3" },
        ],
      },
      {
        section: "Section 2",
        options: [
          { label: "Option 2 1", value: "section-2-option-1" },
          { label: "Option 2 2", value: "section-2-option-2" },
          { label: "Option 2 3", value: "section-2-option-3" },
        ],
      },
    ],
    []
  );

  return (
    <S.Section>
      <S.Subtitle>Select</S.Subtitle>

      <S.Flex container>
        <S.Flex row>
          <Select
            label="Select comum"
            placeholder="Placeholder..."
            options={options}
          />

          <Select
            label="Sem opções"
            placeholder="Placeholder..."
            noOptionsText="Nenhuma opção encontrada"
            options={[]}
          />

          <Select
            label="Com default value"
            placeholder="Placeholder..."
            options={options}
            defaultValue={{ label: "Option 1 2", value: "section-1-option-2" }}
          />
        </S.Flex>

        <S.Flex row>
          <Select
            label="Select controlado"
            placeholder="Placeholder..."
            options={options}
            value={value}
            onSelect={setValue}
          />

          <Select
            label="Select controlado"
            placeholder="Placeholder..."
            options={options}
            value={value}
            onSelect={setValue}
          />
        </S.Flex>

        <S.Flex row>
          <Select
            label="Sem clear"
            placeholder="Placeholder..."
            options={options}
            clearable={false}
          />

          <Select
            label="Select controlado sem clear"
            placeholder="Placeholder..."
            options={options}
            value={value}
            onSelect={setValue}
            clearable={false}
          />
        </S.Flex>

        <S.Flex row>
          <Select
            label="Searchable"
            placeholder="Placeholder..."
            options={options}
            searchable
          />
        </S.Flex>

        <S.Flex row>
          <Select
            label="Com ref, mude o valor para ver o objeto ref"
            placeholder="Placeholder..."
            options={options}
            ref={selectRef}
            // eslint-disable-next-line no-console
            onSelect={() => console.log(selectRef)}
          />
        </S.Flex>

        <S.Flex row>
          <Select
            label="Com helper text"
            placeholder="Placeholder..."
            options={options}
            helperText="Helper text"
          />

          <Select
            label="Com erro"
            placeholder="Placeholder..."
            options={options}
            helperText="Helper text"
            hasError
            wrapperProps={{
              bColor: "green",
            }}
          />
        </S.Flex>
      </S.Flex>

      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
      <S.Subtitle>Select</S.Subtitle>
    </S.Section>
  );
};
