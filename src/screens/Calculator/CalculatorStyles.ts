import styled from "styled-components/native";

export const CalculatorContainer = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CalculatorButton = styled.TouchableOpacity<{equal?: boolean}>`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${({ equal }) => equal ? '#ff9a00' : '#f0f0f0'};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<{equal?: boolean}>`
  font-size: 24px;
  color: ${({ equal }) => equal ? '#fff' : '#000'};
`;

export const CalculatorResult = styled.Text`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: right;
`;