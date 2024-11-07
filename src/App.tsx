import styled from "styled-components";
import { Frame } from "./components/Frame";

interface AbacusProps {
  frameSkin: string;
  beadSkin: string;
}

const AbacusContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const App: React.FC<AbacusProps> = ({ frameSkin, beadSkin }) => {
  const numberBeadsTop = [1];
  const numberBeadsBottom = [4, 4, 4, 4];

  return (
    <div>
      <AbacusContainer>
        <Frame
          frameSkin={frameSkin}
          beadSkin={beadSkin}
          numberBeadsTop={numberBeadsTop}
          numberBeadsBottom={numberBeadsBottom}
        />
      </AbacusContainer>
    </div>
  );
};
