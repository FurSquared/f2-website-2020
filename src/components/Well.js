import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Content} from './Layout';

const Hero = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;

const InnerWell = styled.div`
  width: 100%;
  text-align: center;
  
  .aug {
      min-height: 250px;
      width: 100%;
      padding: 2rem;
      display: inline-block;
      
      --aug-inset:7px; 
      --aug-inset-bg: rgb(58, 134, 183); 
      --aug-inset-opacity: 0.6;
      
      --aug-border:5px; 
      --aug-border-bg:rgba(58, 134, 183, 0.7 ); 
      --aug-border-opacity: 0.9; 
     
      --aug-tl:25px; 
      --aug-tl-height:25px; 
      --aug-tl-width:25px; 
      
      --aug-tr:20px; 
      --aug-tr-height:20px; 
      --aug-tr-width: 250px;;
      
      --aug-br:25px; 
      --aug-br-height:25px; 
      --aug-br-width:25px; 
      
      --aug-bl:25px; 
      --aug-bl-height:25px; 
      --aug-bl-width:25px; 
      
      --aug-t:0px; 
      --aug-t-height:0px; 
      --aug-t-width:0px; 
      
      --aug-r:0px; 
      --aug-r-height:0px; 
      --aug-r-width:0px; 
      
      --aug-b-offset:0px; 
      --aug-b:150px; 
      --aug-b-height:15px; 
      --aug-b-width: 500px;
      
      --aug-l-offset:0px; 
      --aug-l:20px; 
      --aug-l-height: 150px;
      
      @media (max-width: 768px) {
        --aug-b-width: 100px;
      }
      
      @media (max-width: 1300px) {
        --aug-b-width: 120px;
      }
    }
`;

function Well({children}) {
  return (
    <Hero>
      <InnerWell>
        <div className={`aug`} augmented-ui="tr-clip-x l-clip-y bl-clip tl-clip br-clip b-clip-x exe">
          <Content>
            {children}
          </Content>
        </div>
      </InnerWell>
    </Hero>
  )
}

export default Well;