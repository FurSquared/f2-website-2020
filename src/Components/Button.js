import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  text-align: center;
  color: #000;
  
  div:first-child {
      padding: 2rem 1rem 2rem 1.5rem;
      display: inline-block;
      
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

function Button({children, onClick}) {
  return (
    <StyledButton>
      <div augmented-ui="tr-clip bl-clip exe" onClick={onClick}>
        {children}
      </div>
    </StyledButton>
  )
}

export default Button;
