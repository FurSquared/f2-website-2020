import React from 'react';
import {Link} from 'gatsby';
import Button from './Button';

function LinkButton({className, children, to, short, target = '_blank'}) {
  if(!to) {
    return (
      <Button className={className} short={short} onClick={null}>
        {children}
      </Button>
    )
  } else if(to.substr(0, 1) === '/') {
    return (
      <Link to={to} className={className}>
        <Button short={short} onClick={null}>
          {children}
        </Button>
      </Link>
    );
  } else {
    return (
      <a className={className} href={to} target={target}>
        <Button short={short} onClick={null}>
          {children}
        </Button>
      </a>
    );
  }
}

export default LinkButton;
