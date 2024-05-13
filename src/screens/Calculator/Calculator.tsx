import React, { useCallback, useState } from 'react';
import * as S from "./CalculatorStyles"

export function Calculator() {
  const [result, setResult] = useState('0');

  const clearResult = useCallback(() => {
    setResult('0');
  }, []);

  const handleButtonPress = useCallback((value: string) => {
    setResult((prevResult) => {
      if (prevResult === '0' && value !== '.') {
        return value;
      } else {
        return prevResult + value;
      }
    });
  }, []);

const calculateResult = useCallback(() => {
  try {
    setResult(eval(result).toString());
  } catch (error) {
    setResult('Error');
  }
}, [result]);

  const firstLine = [{name: "AC"}, {name: "/",}, {name: "*"}, {name: "-",}]
  const secondLine = [{name: "7"}, {name: "8"}, {name: "9"}, {name: "+"}]
  const thirdLine = [{name: "4"}, {name: "5"}, {name: "6"}, {name: "."}]
  const fourthLine = [{name: "1"}, {name: "2"}, {name: "3"}, {name: "="}]
  const fifthLine = [{name: "0"}]

  return (
    <S.CalculatorContainer>
    <S.CalculatorResult>{result}</S.CalculatorResult>
    <S.Row>
      {firstLine.map((item) => (
        <S.CalculatorButton key={item.name} onPress={() => item.name === "AC" ? clearResult() : handleButtonPress(item.name)} >
          <S.ButtonText>{item.name}</S.ButtonText>
        </S.CalculatorButton>
      ))}
    </S.Row>
    <S.Row>
      {secondLine.map((item) => (
        <S.CalculatorButton key={item.name} onPress={() => handleButtonPress(item.name)} >
          <S.ButtonText>{item.name}</S.ButtonText>
        </S.CalculatorButton>
      ))}

    </S.Row>
    <S.Row>
      {thirdLine.map((item) => (
        <S.CalculatorButton key={item.name} onPress={() => handleButtonPress(item.name)} >
          <S.ButtonText>{item.name}</S.ButtonText>
        </S.CalculatorButton>
      ))}
    </S.Row>
    <S.Row>
      {fourthLine.map((item) => (
        <S.CalculatorButton key={item.name} onPress={() => item.name === "=" ? calculateResult() : handleButtonPress(item.name)} equal={item.name === "="}>
          <S.ButtonText equal={item.name === "="}>{item.name}</S.ButtonText>
        </S.CalculatorButton>
      ))}
    </S.Row>
    <S.Row>
      {fifthLine.map((item) => (
        <S.CalculatorButton key={item.name} onPress={() => handleButtonPress(item.name)} >
          <S.ButtonText>{item.name}</S.ButtonText>
        </S.CalculatorButton>
      ))}
    </S.Row>
  </S.CalculatorContainer>
  );
}
