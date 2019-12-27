import React from 'react';
import LinkButton from './LinkButton';

function PrismicLinkButton({node}) {
  if(!node) {
    return null;
  }

  const {to, label} = node;

  if(!to || !label) {
    return null;
  }

  return <LinkButton to={to.url}>{label}</LinkButton>
}

export default PrismicLinkButton;