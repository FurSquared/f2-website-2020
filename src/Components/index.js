import React from 'react';
import Title from './Title';
import get from 'lodash/get';
import PrismicLinkButton from './PrismicLinkButton';
import PrismicImage from './PrismicImage';
import RichText from 'prismic-reactjs/src/Component';

//const parts = get(children, 'prismic.allBasic_pages.edges[0].node');
function Components({children}) {
  const title = get(children, 'title[0]', null);
  const secondaryTitle = get(children, 'secondary_title[0]', null);
  const tertiaryTitle = get(children, 'tertiary_title[0]', null);
  const primaryLink = {
    to: get(children, 'primary_link', null),
    label: get(children, 'primary_link_label', null)
  };
  const image = get(children, 'image');
  const content = get(children, 'content');
  const secondaryLink = {
    to: get(children, 'secondary_link', null),
    label: get(children, 'secondary_link_label', null)
  };

  return (
    <React.Fragment>
      <Title node={title}/>
      <Title node={secondaryTitle}/>
      <Title node={tertiaryTitle}/>
      <PrismicLinkButton node={primaryLink}/>
      <PrismicImage node={image}/>
      {content && RichText.render(content)}
      <PrismicLinkButton node={secondaryLink}/>
    </React.Fragment>
  )
}

export default Components;

