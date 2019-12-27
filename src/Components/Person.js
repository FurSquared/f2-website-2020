import React from 'react';
import styled from 'styled-components';
import PrismicImage from './PrismicImage';
import Title from './Title';
import RichText from 'prismic-reactjs/src/Component';

const PersonContainer = styled.div`
  padding: 1rem;
  width: 100%;

  .person-aug {
    padding: 1rem;

    display: flex;
    flex-direction: ${props => props.pull === 'right' ? 'row' : 'row-reverse'};
    
    @media (max-width: 768px) {
      justify-content: center;
    }
    
    --aug-inset:7px; 
    --aug-inset-bg: #b7a43a; 
    --aug-inset-opacity: 0.6;
    
    --aug-border:5px; 
    --aug-border-bg: #b7a43a; 
    --aug-border-opacity: 0.9; 
    
    --aug-tr: 20px; 
    --aug-tr-height: 20px; 
    --aug-tr-width: 20px; 
    
    --aug-tl:20px; 
    --aug-tl-height:20px; 
    --aug-tl-width: 20px;; 
    
    --aug-br:20px; 
    --aug-br-height:20px; 
    --aug-br-width:20px; 
    
    --aug-bl:20px; 
    --aug-bl-height:20px; 
    --aug-bl-width:20px; 
    
    --aug-b-offset:150px; 
    --aug-b:50px; 
    --aug-b-height:5px; 
    --aug-b-width: 100px;
  }
`;

const PersonImage = styled.div`
  width: 20%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const PersonBioImage = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;

const PersonBio = styled.div`
  width: 80%;
`;

function Person({node, pull}) {
  console.log(node, pull);

  return (
    <PersonContainer pull={pull}>
      <div className={`person-aug`} augmented-ui="tr-clip bl-clip tl-clip br-clip exe">
        <PersonImage>
          <PrismicImage node={node.image}/>
        </PersonImage>
        <PersonBio>
          <Title node={node.name[0]}/>
          <Title node={node.title[0]}/>
          <PersonBioImage>
            <PrismicImage node={node.image}/>
          </PersonBioImage>
          {RichText.render(node.bio)}
        </PersonBio>
      </div>
    </PersonContainer>
  );
}

export default Person;

