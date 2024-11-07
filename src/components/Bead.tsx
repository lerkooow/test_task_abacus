import React from "react";
import styled, { css } from "styled-components";

interface BeadProps {
  numberBeadsTop?: number[];
  numberBeadsBottom?: number[];
  beadSkin: string;
  isBottom?: boolean;
}

const StyledBead = styled.div<{ isBottom?: boolean }>`
  position: absolute;
  top: 30px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ isBottom }) =>
    isBottom &&
    css`
      top: auto;
      bottom: 30px;
    `}
`;

const StyledImage = styled.img`
  height: 45px;
`;

export const Bead: React.FC<BeadProps> = ({ numberBeadsTop, numberBeadsBottom, beadSkin, isBottom }) => {
  return (
    <StyledBead isBottom={isBottom}>
      {numberBeadsTop?.map((_, index) => <StyledImage key={index} src={beadSkin} alt="bead" />)}
      {numberBeadsBottom?.map((_, index) => <StyledImage key={index} src={beadSkin} alt="bead" />)}
    </StyledBead>
  );
};
