import React from "react";
import styled, { css } from "styled-components";
import { Bead } from "./Bead";
import frameSkin1 from "../images/FrameSkin1.png";
import frameSkin2 from "../images/FrameSkin2.png";

interface FrameProps {
  numberBeadsTop: number;
  numberBeadsBottom: number;
  isAlternateFrame: boolean;
  isAlternateBead: boolean;
  numberRod: number;
}

export const AbacusFrame = styled.div<{ isAlternateFrame: boolean; numberRod: number }>`
  display: flex;
  justify-content: center;
  border: 10px solid #838383;
  border-radius: 10px;
  position: relative;

  ${({ isAlternateFrame }) =>
    isAlternateFrame &&
    css`
      border: 10px solid #692212;
    `}

  ${({ numberRod }) =>
    numberRod === 0 &&
    css`
      border: none;
    `}
`;

const FrameContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgFrame = styled.img`
  height: 500px;
  position: relative;
  z-index: 1;
`;

export const Frame: React.FC<FrameProps> = ({
  isAlternateFrame,
  numberBeadsTop,
  numberBeadsBottom,
  isAlternateBead,
  numberRod,
}) => {
  return (
    <AbacusFrame isAlternateFrame={isAlternateFrame} numberRod={numberRod}>
      {Array.from({ length: numberRod }).map((_, index) => (
        <FrameContainer key={index}>
          <ImgFrame src={isAlternateFrame ? frameSkin2 : frameSkin1} alt="frame" />
          <Bead isAlternateBead={isAlternateBead} numberBeadsTop={numberBeadsTop} />
          <Bead isAlternateBead={isAlternateBead} numberBeadsBottom={numberBeadsBottom} isBottom />
        </FrameContainer>
      ))}
    </AbacusFrame>
  );
};
