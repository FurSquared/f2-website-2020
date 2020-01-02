import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: #b7a43a;
`;

const H2 = styled.h2`
  color: #b7a43a;
`;

const H3 = styled.h3`
  color: #b7a43a;
`;

const H4 = styled.h4`
  color: #b7a43a;
`;

const H5 = styled.h5`
  color: #b7a43a;
`;

const H6 = styled.h6`
  color: #b7a43a;
`;


function Title({node}) {
  if(!node) {
    return null;
  }

  if(!Array.isArray(node)) {
    node = [node];
  }

  return node.map((n, k) => {
    const {text, type} = n;

    switch(type) {
      default:
      case 'heading1':
        return <H1 key={k}>{text}</H1>;
      case 'heading2':
        return <H2 key={k}>{text}</H2>;
      case 'heading3':
        return <H3 key={k}>{text}</H3>;
      case 'heading4':
        return <H4 key={k}>{text}</H4>;
      case 'heading5':
        return <H5 key={k}>{text}</H5>;
      case 'heading6':
        return <H6 key={k}>{text}</H6>;
    }
  })
}

export default Title;