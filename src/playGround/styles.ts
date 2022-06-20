import styled from 'styled-components';

export const Section = styled.div``;

export const Title = styled.h1``;

export const Subtitle = styled.h2``;

export const Divider = styled.hr`
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.neutrals.gray4};
`;

interface FlexProps {
  flex?: number;
  container?: boolean;
  row?: boolean;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  width: ${({ container }) => (container ? '100%' : 'auto')};
  flex: ${({ flex }) => flex || 1};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  gap: 1rem;
  flex-wrap: wrap;
`;
