import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
`;

function PrismicImage({node}) {
  if(!node) {
    return null;
  }

  return <Img src={node.url} alt={node.alt} />
}

export default PrismicImage;