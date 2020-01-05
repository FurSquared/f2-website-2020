import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import Well from '../components/Well';
import Components from '../components';
import get from 'lodash/get';
import {Col, Row} from 'reactstrap';
import LinkButton from '../components/LinkButton';
import styled from 'styled-components';

const FullWidthRow = styled(Row)`
  width: 100%;
  .col-sm-6, .col-12 {
    display: flex;
    justify-content: center;
  }
`;

const Homepage = ({data}) => {
  const node = get(data, 'prismic.allHomepages.edges[0].node');

  return (
    <Layout>
      <Well>
        <Components>
          {node}
        </Components>
        <FullWidthRow>
          <Col sm={6} xs={12}>
            <LinkButton to={`https://www.marriott.com/event-reservations/reservation-link.mi?id=1565183065412&key=GRP&app=resvlink%22`}>Book Here</LinkButton>
          </Col>
          <Col sm={6} xs={12}>
            <LinkButton to={`/register`}>Register Here</LinkButton>
          </Col>
        </FullWidthRow>
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
