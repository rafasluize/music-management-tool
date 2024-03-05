import styled, { css, keyframes } from 'styled-components';

const opacityAnimation = keyframes`
  0% {opacity: 1}
  50% {opacity: 0.65}
  100% {opacity: 1}
`;

export const Skeleton = styled.div<{
  width?: string;
  height?: string;
  margin?: string;
  circle?: boolean;
  borderRadius?: string;
}>`
  animation: ${opacityAnimation} 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  background: linear-gradient(90deg, #dadee7 0%, #f3f4f6 100%);
  border-radius: ${({ theme }) => theme.border.radius.xlarge};

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
  ${({ circle }) =>
    circle &&
    css`
      border-radius: ${({ theme }) => theme.border.radius.circle};
    `};
  ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${borderRadius};
    `};
`;

export const SkeletonSquare = styled(Skeleton)`
  border-radius: ${({ theme }) => theme.border.radius.small};
`;
