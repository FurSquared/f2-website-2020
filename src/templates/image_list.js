import React from 'react'
import Layout from '../components/Layout';
import Well from '../components/Well';
import {graphql} from 'gatsby';
import Components from '../components';
import get from 'lodash/get';
import find from 'lodash/find';
import Images from '../components/ImageList';

const ImageList = ({data, pageContext: {id}}) => {
  console.log(data);
  const edges = get(data, 'prismic.allImage_lists.edges');

  const node = get(find(edges, edge => edge.node._meta.id.toString() === id.toString()), 'node');

  console.log(node);

  const images = get(node, 'body[0].fields');

  console.log(images);

  return (
    <Layout>
      <Well>
        <Components>
          {node}
        </Components>
        <Images images={images}/>
      </Well>
    </Layout>
  )
};

export const query = graphql`
  query ImageListQuery($id: String) {
    prismic {
      allImage_lists(id: $id) {
        edges {
          node {
            _meta {
                id
            }
            title
            description
            path
            body {
              ... on PRISMIC_Image_listBodyImage {
                type
                label
                fields {
                  image_title
                  image_description
                  image
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ImageList
