import React from "react";
import styled, { css } from "styled-components";
import beadSkin1 from "../images/BeadSkin1.png";
import beadSkin2 from "../images/BeadSkin2.png";

interface BeadProps {
  numberBeadsTop?: number;
  numberBeadsBottom?: number;
  isBottom?: boolean;
  isAlternateBead: boolean;
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
  height: 40px;
  margin-top: 5px;
`;

export const Bead: React.FC<BeadProps> = ({ numberBeadsTop, numberBeadsBottom, isBottom, isAlternateBead }) => {
  return (
    <StyledBead isBottom={isBottom}>
      {Array.from({ length: numberBeadsTop ?? 0 }).map((_, index) => (
        <StyledImage key={`bottom-${index}`} src={isAlternateBead ? beadSkin1 : beadSkin2} alt="bead" />
      ))}
      {Array.from({ length: numberBeadsBottom ?? 0 }).map((_, index) => (
        <StyledImage key={`bottom-${index}`} src={isAlternateBead ? beadSkin1 : beadSkin2} alt="bead" />
      ))}
    </StyledBead>
  );
};
