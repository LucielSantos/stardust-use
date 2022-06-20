import {
  BadgeExample,
  ButtonExample,
  InputExample,
  SelectExample,
  TagExample,
  TypographyExample,
} from "./components";
import * as S from "./styles";

const PlayGround = () => {
  return (
    <>
      <S.Title>Play ground</S.Title>

      <S.Divider />

      <TypographyExample />

      <S.Divider />

      <ButtonExample />

      <S.Divider />

      <InputExample />

      <S.Divider />

      <TagExample />

      <S.Divider />

      <BadgeExample />

      <S.Divider />

      <SelectExample />

      <S.Divider />
    </>
  );
};

export default PlayGround;
