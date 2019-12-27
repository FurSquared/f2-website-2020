import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../Components/Layout';
import Well from '../Components/Well';
import Components from '../Components';
import get from 'lodash/get';

const Homepage = ({data}) => {
  console.log(data);

  const node = get(data, 'prismic.allHomepages.edges[0].node');

  return (
    <Layout>
      <Well>
        <Components>
          {node}
        </Components>
      </Well>
    </Layout>
  )
};

export const query = graphql`
  query HomepageQuery($uid: String) {
    prismic {
      allHomepages(uid: $uid) {
        edges {
          node {
            _meta {
              id
              type
            }
            title
            secondary_title
            tertiary_title
          }
        }
      }
    }
  }
`;

export default Homepage
