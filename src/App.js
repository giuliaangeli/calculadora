import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Grid } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  let currentResult = currentNumber.match(/[-+]?\d*\.?\d+|\*|\/|[-+]/g) || [];

  const handleAddNumber = (num) => {
    const updatedNumber = updateCurrentNumber(currentNumber, num);

    setCurrentNumber(updatedNumber);
  };

  const handleClearNumber = () => {
    setCurrentNumber('0');
  };
 
  const handleResult = () => {
    const operators = ['/', '*'];
  
    operators.forEach(doTheMath);
    resultSum(currentResult)
    setCurrentNumber(String(currentResult[0]));
  };

  const updateCurrentNumber = (prev, num) => {
    if (prev === '0' && (num === '/' || num === '*')) {
      return '';
    }
    if (prev === '0') {
      return String(num);
    }
    if (!isNaN(prev[prev.length - 1])) {
      return prev + String(num);
    }
  
    const lastValue = prev[prev.length - 1];
  
    if (isNaN(lastValue) && isNaN(num)) {
      if (lastValue === '+' && num === '+') {
        return prev;
      } else if (lastValue === '+' && num === '-') {
        return prev.slice(0, prev.length - 1) + '-';
      } else if (lastValue === '-' && num === '+') {
        return prev;
      } else if (lastValue === '-' && num === '-') {
        return prev.slice(0, prev.length - 1) + '+';
      }
    }
  
    if (isNaN(num)) {
      // Se o último caractere foi um ponto '.', retorna a string do novo número.
      if (lastValue === '.') {
        return prev + String(num);
      }
      // Se o novo número é '/', '*' ou outro caractere, retorna uma string vazia ou o próprio número.
      switch (num) {
        case '/':
        case '*':
          return prev;
        default:
          return prev + String(num);
      }
    }
  
    // Caso padrão, retorna o novo número como string
    return prev + String(num);
  };

  function doTheMath(operator){
    for(var i = currentResult.length-1; i > 0; i--){
      if(currentResult[i] === operator){
        var first = Number(currentResult[i-1])
        var second = Number(currentResult[i+1])
        if(operator ===  "/"){
          currentResult[i-1] = resultDiv(first, second);
        }else{
          currentResult[i-1] = resultMult(first, second);
        }
        currentResult.splice(i, 2)
      }
    }
    
    return currentResult
  }

  function resultSum(currentResult){
    for(var i = currentResult.length-1; i > 0; i--){
      var first = Number(currentResult[i])
      var second = Number(currentResult[i-1])
      currentResult[i-1] = first + second;
      currentResult.splice(i, 2)
    }
  }

  function resultDiv(first, second){
    return first / second
  }

  function resultMult(first, second){
    return first * second
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Grid>
          <Button label="C" onClick = {handleClearNumber}/>
          <Button label="<" onClick = {handleClearNumber}/>
          <Button label="+/-" onClick = {handleClearNumber}/>
          <Button label="/" operator onClick = {() => handleAddNumber('/')}/>
          <Button label="7" onClick = {() => handleAddNumber('7')}/>
          <Button label="8" onClick = {() => handleAddNumber('8')}/>
          <Button label="9" onClick = {() => handleAddNumber('9')}/>
          <Button label="*" operator onClick = {() => handleAddNumber('*')}/>
          <Button label="4" onClick = {() => handleAddNumber('4')}/>
          <Button label="5" onClick = {() => handleAddNumber('5')}/>
          <Button label="6" onClick = {() => handleAddNumber('6')}/>
          <Button label="-" operator onClick = {() => handleAddNumber('-')}/>
          <Button label="1" onClick = {() => handleAddNumber('1')}/>
          <Button label="2" onClick = {() => handleAddNumber('2')}/>
          <Button label="3" onClick = {() => handleAddNumber('3')}/>
          <Button label="+" operator onClick = {() => handleAddNumber('+')}/>
          <Button label="0" gridColumn="span 2" onClick = {() => handleAddNumber('0')}/>
          <Button label="." onClick = {() => handleAddNumber('.')}/>
          <Button label="=" operator onClick = {handleResult}/>
        </Grid>
      </Content>
    </Container>
  );
}

export default App;
