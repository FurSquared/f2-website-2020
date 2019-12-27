import React from 'react';
import styled from 'styled-components';
import {Link as BaseLink, useStaticQuery, graphql} from 'gatsby';

const query = graphql`
    query MyQuery {
        prismic {
            allMenus {
                edges {
                    node {
                        body {
                            ... on PRISMIC_MenuBodyLink {
                                fields {
                                    label
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    }

`

const Container = styled.div`
  width:100%;
  position: fixed;
  top: 0;
  z-index: 999;
  
  div.menu{
      width: calc(100% - 2rem);
      height: 100px;
      padding: 0.5rem;
      display: inline-block;
      margin: 0 1rem;
     
      --aug-inset:7px; 
      --aug-inset-bg: rgba(58, 134, 183); 
      --aug-inset-opacity: 0.6;
      
      --aug-border:5px; 
      --aug-border-bg:rgba(58, 134, 183, 0.7 ); 
      --aug-border-opacity: 0.9; 
    
      --aug-bl:30px; 
      --aug-bl-height:30px; 
      --aug-bl-width:30px; 
      
      --aug-br:30px; 
      --aug-br-height:30px; 
      --aug-br-width:30px; 
      
      --aug-b-offset:0px; 
      --aug-b:150px; 
      --aug-b-height:15px; 
      --aug-b-width: 500px;
    }
`;

const Actions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
`;

const Link = styled(BaseLink)`
  padding-right: 1rem;
  color: #b7a43a;
  font-size: 1.45rem;
  text-transform: uppercase;
  
  &:hover {
    color: rgba(128, 164, 58, 0.8);
    text-decoration: none;
  }
`;

function NavBar() {
  const menu = useStaticQuery(query);
  const {prismic: {allMenus: {edges: [ {node: {body: [{fields}]}}]}}} = menu;

  return (
    <Container>
      <div className={`menu`} augmented-ui="bl-clip br-clip b-clip-x exe">
        <Actions>
          {fields.map((
            {
              label: [
                { text: label}
              ],
              url: [
                { text: url}
              ],
            }, key) => {
            return <Link key={`menu_${label}`} to={url}>{label}</Link>
          })}
        </Actions>
      </div>
    </Container>
  )
}

export default NavBar;