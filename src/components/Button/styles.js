import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border-radius: 15px;
    background-color: ${(props) => props.operator ? "#E1873D" : "#333333"};
    color: #FFFFFF;
    border: none;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    
    grid-column: ${(props) => props.gridColumn || 'auto'};
    grid-row: ${(props) => props.gridRow || 'auto'};
    
    &:hover {
        opacity: 0.6;
    }
`