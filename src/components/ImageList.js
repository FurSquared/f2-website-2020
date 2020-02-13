import React from 'react';
import Title from './Title';
import RichText from 'prismic-reactjs/src/Component';
import get from 'lodash/get';import ModalImage from "react-modal-image";

function ImageList({images}) {
  return (
    <>
      {images.map((image, key) => {
        return <Image image={image} key={key}/>
      })}
    </>
  );
}

function Image({image}) {
  const title = get(image, 'image_title');
  const description = get(image, 'image_description');
  const imgSrc = get(image, 'image.url');

  return (
    <>
      <Title node={title}/>
      {description && RichText.render(description)}
      <ModalImage
        small={imgSrc}
        large={imgSrc}
        alt={title}
      />
    </>
  )
}

export default ImageList;