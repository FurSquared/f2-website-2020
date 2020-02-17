import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import Well from '../components/Well';
import get from 'lodash/get';
import {Col, Row} from 'reactstrap';
import styled from 'styled-components';
import invitation from '../images/invitation.png';

const FullWidthRow = styled(Row)`
  width: 100%;
  .col-sm-6, .col-12 {
    display: flex;
    justify-content: center;
  }
`;

const Invitation = styled.img`
  // width: 100%;
 height: calc(100vh - 50px);
`;

const Homepage = ({data}) => {
  return (
    <Layout>
      <Well>
        <FullWidthRow>
          <Col
            sm={{offset: 2, size: 8}}
            xs={12}
          >
            <Invitation src={invitation} alt={'invitation'}/>
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
