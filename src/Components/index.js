import React from 'react';
import Title from './Title';
import get from 'lodash/get';
import PrismicLinkButton from './PrismicLinkButton';
import PrismicImage from './PrismicImage';
import RichText from 'prismic-reactjs/src/Component';
import filter from 'lodash/filter';
import {Row, Col} from 'reactstrap';

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
  const body = get(children, 'body', null);

  const dualColumnContent = filter(body, item => item.type === '2_column_content', null);
  const triColumnContent = filter(body, item => item.type === '3_column_content', null);

  return (
    <React.Fragment>
      <Title node={title}/>
      <Title node={secondaryTitle}/>
      <Title node={tertiaryTitle}/>
      <PrismicLinkButton node={primaryLink}/>
      <PrismicImage node={image}/>
      {dualColumnContent.map((content, key) => {
        const parts = get(content, 'primary', null);

        if(!parts) {
          return null;
        }

        return (
          <Row key={key}>
            <Col sm={12}>
              <Title node={parts.primary_title}/>
              {RichText.render(parts.primary_content)}
            </Col>
            <Col sm={6} xs={12}>
              <Title node={parts.title_1}/>
              <PrismicImage node={parts.image_1}/>
              {RichText.render(parts.content_1)}
            </Col>
            <Col sm={6} xs={12}>
              <Title node={parts.title_2}/>
              <PrismicImage node={parts.image_2}/>
              {RichText.render(parts.content_2)}
            </Col>
          </Row>
        );
      })}
      {triColumnContent.map((content, key) => {
        const parts = get(content, 'primary', null);

        if(!parts) {
          return null;
        }

        return (
          <Row key={key}>
            <Col sm={4} xs={12}>
              <Title node={parts.title_1[0]}/>
              <PrismicImage node={parts.image_1}/>
              {RichText.render(parts.content_1)}
            </Col>
            <Col sm={4} xs={12}>
              <Title node={parts.title_2[0]}/>
              <PrismicImage node={parts.image_2}/>
              {RichText.render(parts.content_2)}
            </Col>
            <Col sm={4} xs={12}>
              <Title node={parts.title_3[0]}/>
              <PrismicImage node={parts.image_3}/>
              {RichText.render(parts.content_3)}
            </Col>
          </Row>
        );
      })}
      {content && RichText.render(content)}
      <PrismicLinkButton node={secondaryLink}/>
    </React.Fragment>
  )
}

export default Components;

