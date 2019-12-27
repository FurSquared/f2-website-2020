import React from 'react';
import {Link} from 'gatsby';
import Button from './Button';

function LinkButton({children, to, target = '_blank'}) {
  if(to.substr(0, 1) === '/') {
    return (
      <Link to={to}>
        <Button onClick={null}>
          {children}
        </Button>
      </Link>
    );
  } else {
    return (
      <a href={to} target={target}>
        <Button onClick={null}>
          {children}
        </Button>
      </a>
    );
  }
}

export default LinkButton;
