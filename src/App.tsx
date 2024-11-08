import { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import { Frame } from "./components/Frame";

const AbacusContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f3f4f6;
`;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled.button`
  background-color: #fff;
  border: 1px solid #b3b3b3;
  padding: 15px 20px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const StyledInput = styled.input`
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  padding: 12px 15px;
  border-radius: 10px;
  font-size: 16px;
  color: #333;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0px 0px 8px rgba(74, 144, 226, 0.3);
  }
`;

const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const HelperText = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const App = () => {
  const getSavedValue = (key: string, defaultValue: boolean | number) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  };

  const [isAlternateFrame, setIsAlternateFrame] = useState(() => getSavedValue("isAlternateFrame", false));
  const [isAlternateBead, setIsAlternateBead] = useState(() => getSavedValue("isAlternateBead", false));
  const [numberRod, setNumberRod] = useState(() => getSavedValue("numberRod", 13));
  const [numberBeadsTop, setNumberBeadsTop] = useState(() => getSavedValue("numberBeadsTop", 1));
  const [numberBeadsBottom, setNumberBeadsBottom] = useState(() => getSavedValue("numberBeadsBottom", 4));

  useEffect(() => {
    localStorage.setItem("isAlternateFrame", JSON.stringify(isAlternateFrame));
    localStorage.setItem("isAlternateBead", JSON.stringify(isAlternateBead));

    localStorage.setItem("numberRod", JSON.stringify(numberRod));
    localStorage.setItem("numberBeadsTop", JSON.stringify(numberBeadsTop));
    localStorage.setItem("numberBeadsBottom", JSON.stringify(numberBeadsBottom));
  }, [isAlternateBead, isAlternateFrame, numberBeadsBottom, numberBeadsTop, numberRod]);

  const handleToggleFrame = () => {
    setIsAlternateFrame((prev: boolean) => !prev);
  };

  const handleToggleBead = () => {
    setIsAlternateBead((prev: boolean) => !prev);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, setValue: (value: number) => void, maxValue: number) => {
    const value = Number(e.target.value);
    if (value <= maxValue) {
      setValue(value);
    }
  };

  return (
    <AbacusContainer>
      <SettingsContainer>
        <InputContainer>
          <LabelInput>
            <HelperText>
              Введите количество стержней <span style={{ color: "#808080" }}>(маск. 15)</span>
            </HelperText>
            <StyledInput
              value={numberRod}
              onChange={(e) => handleInputChange(e, setNumberRod, 15)}
              type="number"
              min={0}
              max={15}
            />
          </LabelInput>
          <LabelInput>
            <HelperText>
              Введите количество косточек сверху от разделителя
              <span style={{ color: "#808080" }}>(маск. 2)</span>
            </HelperText>
            <StyledInput
              value={numberBeadsTop}
              onChange={(e) => handleInputChange(e, setNumberBeadsTop, 2)}
              type="number"
              min={0}
              max={2}
            />
          </LabelInput>
          <LabelInput>
            <HelperText>
              Введите количество косточек снизу от разделителя
              <span style={{ color: "#808080" }}>(маск. 6)</span>
            </HelperText>
            <StyledInput
              value={numberBeadsBottom}
              onChange={(e) => handleInputChange(e, setNumberBeadsBottom, 6)}
              type="number"
              min={0}
              max={6}
            />
          </LabelInput>
        </InputContainer>
        <InputContainer>
          <StyledButton onClick={handleToggleFrame}>Сменить цвет рамки</StyledButton>
          <StyledButton onClick={handleToggleBead}>Сменить цвет косточек</StyledButton>
        </InputContainer>
      </SettingsContainer>
      <Frame
        isAlternateFrame={isAlternateFrame}
        numberBeadsTop={numberBeadsTop}
        numberBeadsBottom={numberBeadsBottom}
        isAlternateBead={isAlternateBead}
        numberRod={numberRod}
      />
    </AbacusContainer>
  );
};
