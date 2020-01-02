import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Well from '../Components/Well';
import Layout from '../Components/Layout';
import get from 'lodash/get';
import Person from '../Components/Person';
import sortBy from 'lodash/sortBy';
import filter from 'lodash/filter';

function People({type}) {
  const data = useStaticQuery(query);
  const people = sortBy(filter(get(data, 'prismic.allPersons.edges', []), person =>  person.node.type === type), person => person.node.order);

  return (
    <Layout>
      <Well>
        {people.map((node, key) => {
          return <Person node={node.node} key={key} pull={key % 2 === 0 ? 'right' : 'left'}/>
        })}
      </Well>
    </Layout>
  );
}

const query = graphql`
    query boardQuery {
        prismic {
            allPersons {
                edges {
                    node {
                        name
                        type
                        order
                        title
                        image
                        bio
                    }
                }
            }
        }
    }


`;

export default People;