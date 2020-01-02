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
                            __typename
                            ... on PRISMIC__ExternalLink {
                                url
                            }
                            ... on PRISMIC__FileLink {
                                url
                            }
                        }
                        image
                        content
                        secondary_link_label
                        secondary_link {
                            ...on PRISMIC__ExternalLink {
                                url
                            }
                            ... on PRISMIC__FileLink {
                                url
                            }
                        }
                        body {
                            ... on PRISMIC_Basic_pageBody2_column_content {
                                type
                                label
                                primary {
                                    primary_title
                                    primary_content
                                    title_1
                                    image_1
                                    content_1
                                    title_2
                                    image_2
                                    content_2
                                }
                            }
                            ... on PRISMIC_Basic_pageBody3_column_content {
                                type
                                label
                                primary {
                                    primary_title
                                    primary_content
                                    title_1
                                    title_1_sub_title_1
                                    title_1_sub_title_2
                                    image_1
                                    content_1
                                    title_2
                                    title_2_sub_title_1
                                    title_2_sub_title_2
                                    image_2
                                    content_2
                                    title_3
                                    title_3_sub_title_1
                                    title_3_sub_title_2
                                    image_3
                                    content_3
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default BasicPage
