import React from "react";
import styled from "styled-components";
import { Bead } from "./Bead";

interface FrameProps {
  frameSkin: string;
  beadSkin: string;
  numberBeadsTop: number[];
  numberBeadsBottom: number[];
}

export const AbacusFrame = styled.div`
  display: flex;
  justify-content: center;
  border: 10px solid #838383;
  border-radius: 10px;
  position: relative;
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

export const Frame: React.FC<FrameProps> = ({ frameSkin, beadSkin, numberBeadsTop, numberBeadsBottom }) => {
  const numberRow = 10;

  return (
    <AbacusFrame>
      {Array.from({ length: numberRow }).map((_, index) => (
        <FrameContainer key={index}>
          <ImgFrame src={frameSkin} alt="frame" />
          <Bead beadSkin={beadSkin} numberBeadsTop={numberBeadsTop} />
          <Bead beadSkin={beadSkin} numberBeadsBottom={numberBeadsBottom} isBottom />
        </FrameContainer>
      ))}
    </AbacusFrame>
  );
};
