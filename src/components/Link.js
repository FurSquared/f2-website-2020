import React from 'react';
import {Link as BaseLink} from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled.div`
  a {
    text-align: center;
    color: #b7a43a;
    font-size: 1.45rem;
    text-transform: uppercase;
    white-space: nowrap;
    
    &:hover {
      text-decoration: none;
    }
    
    @media (max-width: 768px) {
      padding-right: 0;
    }
  }
  
  .button {
    width: 100%;
  }
`;

function Link({to, children, internal = true}) {
  if(internal) {
    return (
      <StyledLink>
        <BaseLink to={to}>{children}</BaseLink>
      </StyledLink>
    );
  } else {
    return (
      <StyledLink>
        <a href={to}>{children}</a>
      </StyledLink>
    );
  }
}

export default Link;