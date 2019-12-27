import React from 'react'
import Layout from '../Components/Layout';
import Well from '../Components/Well';
import {graphql} from 'gatsby';
import get from 'lodash/get';
import Components from '../Components';
import {Row, Col} from 'reactstrap';

const Contact = ({data}) => {
  const parts = get(data, 'prismic.allContacts.edges[0].node');
  const conditions = get(parts, 'body[0].fields', []);

  return (
    <Layout>
      <Well>
        <Components>
          {parts}
        </Components>
        <Row>
          <Col sm={6}>
            <p>If You...</p>
          </Col>
          <Col sm={6}>
            <p>Then Contact...</p>
          </Col>
          {conditions.map(item => {
            return [
              <p>{item.key}</p>,
              <a href={`mailto:${item.value}`}>{item.value}</a>
            ].map(item => {
              return <Col sm={6}>{item}</Col>
            })
          })}
        </Row>
      </Well>
    </Layout>
  )
};

export const query = graphql`
    query ContactQuery($uid: String) {
        prismic {
            allContacts(uid: $uid){
                edges {
                    node {
                        title
                        secondary_title
                        content
                        body {
                            ... on PRISMIC_ContactBodyCondition {
                                fields {
                                    value
                                    key
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default Contact
