import React from 'react';
import styled from 'styled-components';
import {Link as BaseLink, useStaticQuery, graphql} from 'gatsby';


const Container = styled.div`
  width: 100%;
  height: 120px;
  margin-top: 20px;
 
  div.menu{
      width: 100%;
      height: 100px;
      // padding: 0.5rem;
      display: inline-block;
     
      --aug-inset:7px; 
      --aug-inset-bg: rgba(58, 134, 183); 
      --aug-inset-opacity: 0.6;
      
      --aug-border:5px; 
      --aug-border-bg:rgba(58, 134, 183, 0.7 ); 
      --aug-border-opacity: 0.9; 
    
      --aug-tl:30px; 
      --aug-tl-height:30px; 
      --aug-tl-width:30px; 
      
      --aug-tr:30px; 
      --aug-tr-height:30px; 
      --aug-tr-width:30px; 
      
      --aug-t-offset:0px; 
      --aug-t:150px; 
      --aug-t-height:15px; 
      --aug-t-width: 500px;
    }
`;

function Footer() {

  return (
    <Container>
      <div className={`menu`} augmented-ui="tl-clip tr-clip t-clip-x exe">
      </div>
    </Container>
  )
}

export default Footer;