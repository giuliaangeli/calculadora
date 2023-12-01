import { ButtonContainer } from './styles';

const Button = ({label, gridColumn, gridRow, onClick, operator}) => {
    return (
      <ButtonContainer onClick={onClick} gridColumn={gridColumn} gridRow={gridRow} operator={operator} type="button">
       {label}
      </ButtonContainer>
    );
  }
  
  export default Button;