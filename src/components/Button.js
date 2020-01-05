import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  text-align: center;
  color: #000;
  width: ${props => props.short ? '100%' : '250px'} ;
  max-width: 400px;
  cursor: pointer;
  
  div:first-child {
      padding: 
        ${props => props.short ? '1.25rem' : '2rem'} 
        1rem 
        ${props => props.short ? '1.25rem' : '2rem'} 
        1rem;
      display: inline-block;
      white-space: nowrap;
      width: 100%;
      
      --aug-inset:7px; 
      --aug-inset-bg: #b7a43a; 
      --aug-inset-opacity: 0.6;
      
      --aug-border:5px; 
      --aug-border-bg: #b7a43a; 
      --aug-border-opacity: 0.9; 
      
      --aug-tr:15px; 
      --aug-tr-height:15px; 
      --aug-tr-width: 15px;; 
      
      --aug-bl:15px; 
      --aug-bl-height:15px; 
      --aug-bl-width:15px; 
    }
`;

function Button({children, onClick, short = false}) {
  return (
    <StyledButton className={`button`} short={short}>
      <div augmented-ui="tr-clip bl-clip exe" onClick={onClick && onClick}>
        {children}
      </div>
    </StyledButton>
  )
}

export default Button;
