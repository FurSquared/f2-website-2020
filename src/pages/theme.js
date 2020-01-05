import React from 'react';
import {graphql, useStaticQuery, Link, StaticQuery} from 'gatsby';
import Well from '../components/Well';
import Layout from '../components/Layout';
import get from 'lodash/get';
import Title from '../components/Title';
import RichText from 'prismic-reactjs/src/Component';
import styled from 'styled-components';

const ThemeStyles = styled.div`
  strong {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 200;
  }

  a {
    text-decoration: none;
    color: white;
    cursor: arrow;
  }
`;

function Theme() {
  return (
    <StaticQuery
      query={query}
      render={data => {

        const nodes = get(data, 'prismic.allThemes.edges[0].node');
        return (
        <Layout>
          <Well>
            <Title node={nodes.title[0]}/>
            <ThemeStyles>
              {RichText.render(nodes.invitation)}
              <Link to={`/corporation`}>Join u<strong>s.</strong></Link><p> The fu<strong>t</strong>ure is now. Reality Cubed.</p>
            </ThemeStyles>
            {RichText.render(nodes.content)}
          </Well>
        </Layout>
        );
      }}
      />
  );
}

const query = graphql`
    query ThemeQuery {
        prismic {
            allThemes {

                edges {
                    node {
                        title
                        invitation
                        content
                    }
                }
            }
        }
    }
`;

export default Theme;