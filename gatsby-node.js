const _ = require('lodash');
const fsPath = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      prismic {
      
        allHomepages(first: 1) {
          edges {
            node {
              _meta {
                id
                type
              }
            }
          }
        }
        
        allBasic_pages {
          edges {
            node {
              _meta {
                id
                type
              }
              path
            }
          }
        }
        
        allContacts {
          edges {
            node {
              _meta {
                id
                type
              }
            }
          }
        }
        
      }
    }
  `);

  const {
    data: { prismic },
  } = result;

  Object.keys(prismic).forEach(page => {
    const edges = prismic[page].edges;

    edges.forEach(edge => {
      const {
        _meta: { id, type },
        path
      } = edge.node;

      const url = type === 'homepage' ? '/' : (path ? path : type);

      console.log(`Creating ${type} at ${url}`);

      createPage({
        path: url,
        component: fsPath.resolve(`src/templates/${type}.js`),
        context: {
          id,
        },
      })
    })
  })
};
