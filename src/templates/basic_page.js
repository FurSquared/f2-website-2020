import React from 'react'
import Layout from '../Components/Layout';
import Well from '../Components/Well';
import {graphql} from 'gatsby';
import Components from '../Components';
import get from 'lodash/get';
import find from 'lodash/find';

const BasicPage = ({data, pageContext: {id}}) => {
  const edges = get(data, 'prismic.allBasic_pages.edges');

  const node = find(edges, edge => edge.node._meta.id.toString() === id.toString());

  return (
    <Layout>
      <Well>
        <Components>
          {get(node, 'node', null)}
        </Components>
      </Well>
    </Layout>
  )
};

export const query = graphql`
    query BasicPageQuery($id: String) {
        prismic {
            allBasic_pages(id: $id){
                edges {
                    node {
                        _meta {
                            id
                        }
                        title
                        secondary_title
                        tertiary_title
                        path
                        primary_link_label
                        primary_link {
                            _linkType
                            __typename
                            ... on PRISMIC__ExternalLink {
                                url
                            }
                        }
                        image
                        content
                        secondary_link_label
                        secondary_link {
                            _linkType
                            __typename
                            ...on PRISMIC__ExternalLink {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default BasicPage
