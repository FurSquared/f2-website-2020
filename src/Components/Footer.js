import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  
  div.menu{
      width: 100%;
      height: 100px;

      padding: 1.5rem 0.5rem 0.5rem 0.5rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      
      --aug-inset:7px; 
      --aug-inset-bg: rgba(58, 134, 183); 
      
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
      --aug-t-width: 19.2%;
      
      @media (max-width: 768px) {        
        --aug-tl:10px; 
        --aug-tl-height:10px; 
        --aug-tl-width:10px; 
        
        --aug-tr:10px; 
        --aug-tr-height:10px; 
        --aug-tr-width:10px; 
        
        --aug-t:75px; 
        --aug-t-height:10px; 
      }
    }
`;

const SocialMedia = styled.div`
  width: 5rem;
  display: flex;
  justify-content: space-around;
`;

const FooterText = styled.div`
  color: #b7a43a;
`;

function Footer() {

  return (
    <Container>
      <div className={`menu`} augmented-ui="tl-clip tr-clip t-clip-x exe">
        <SocialMedia>
          <a href={`https://www.facebook.com/fursquared`} target={`_blank`} rel={`noreferrer noopener`}>
            <FontAwesomeIcon
              icon={faFacebook}
              color={`#b7a43a`}
              size={`2x`}
            />
          </a>
          <a href={`https://twitter.com/fursquared`} target={`_blank`} rel={`noreferrer noopener`}>
            <FontAwesomeIcon
              icon={faTwitter}
              color={`#b7a43a`}
              size={`2x`}
            />
          </a>
        </SocialMedia>
        <FooterText>Copyright © Fur Squared 2020</FooterText>
      </div>
    </Container>
  )
}

export default Footer;