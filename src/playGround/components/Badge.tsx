import { Badge, useTheme } from "luciel-stardust-react";
import * as S from "../styles";

export const BadgeExample = () => {
  const theme = useTheme();

  return (
    <S.Section>
      <S.Subtitle>Badge</S.Subtitle>

      <S.Flex container>
        <S.Flex row>
          <Badge label="Test" />

          <Badge label="Test" colorScheme="negative" />

          <Badge label="Test" colorScheme="alert" />

          <Badge label="Test" colorScheme="neutral1" />

          <Badge label="Test" colorScheme="neutral2" />

          <Badge label="Test" colorScheme="neutral3" />

          <Badge label="Test" colorScheme="neutral4" />
        </S.Flex>

        <S.Flex row>
          <Badge label="Test" variant="flat" />

          <Badge label="Test" colorScheme="negative" variant="flat" />

          <Badge label="Test" colorScheme="alert" variant="flat" />

          <Badge label="Test" colorScheme="neutral1" variant="flat" />

          <Badge label="Test" colorScheme="neutral2" variant="flat" />

          <Badge label="Test" colorScheme="neutral3" variant="flat" />

          <Badge label="Test" colorScheme="neutral4" variant="flat" />
        </S.Flex>

        <S.Flex row>
          <Badge label="Test" variant="light" />

          <Badge label="Test" colorScheme="negative" variant="light" />

          <Badge label="Test" colorScheme="alert" variant="light" />

          <Badge label="Test" colorScheme="neutral1" variant="light" />

          <Badge label="Test" colorScheme="neutral2" variant="light" />

          <Badge label="Test" colorScheme="neutral3" variant="light" />

          <Badge label="Test" colorScheme="neutral4" variant="light" />
        </S.Flex>

        <S.Flex row>
          <Badge label="Test" bgColor={theme.brand.color.primary.pure} />

          <Badge label="Test" bgColor={theme.brand.color.secondary.pure} />

          <Badge
            label="Test"
            bColor={theme.brand.color.secondary.dark}
            bgColor={theme.brand.color.secondary.pure}
            variant="light"
            typographyProps={{
              color: theme.brand.color.primary.pure,
            }}
          />

          <Badge
            label="Test"
            bgColor={theme.brand.color.primary.dark}
            typographyProps={{
              color: theme.brand.color.secondary.pure,
            }}
          />

          <Badge
            label="Test"
            variant="flat"
            bgColor={theme.brand.color.primary.dark}
            typographyProps={{
              color: theme.brand.color.secondary.pure,
            }}
          />

          <Badge
            label="Test"
            variant="light"
            bgColor={theme.brand.color.secondary.dark}
            bColor={theme.brand.color.primary.pure}
            typographyProps={{
              color: theme.brand.color.primary.pure,
            }}
          />

          <Badge
            label="Test"
            bgColor={theme.brand.color.secondary.dark}
            typographyProps={{
              color: theme.brand.color.secondary.pure,
            }}
          />
        </S.Flex>
      </S.Flex>
    </S.Section>
  );
};
