import React from 'react';
import styled from 'styled-components';
import {Link as BaseLink, useStaticQuery, graphql} from 'gatsby';

const query = graphql`
    query SidebarQuery {
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
  width: 100%;
  
  div.menu{
      width: 100%;
      height: 600px;
      padding: 0.5rem;
      display: inline-block;
     
      --aug-inset:7px; 
      --aug-inset-bg: rgba(58, 134, 183); 
      --aug-inset-opacity: 0.6;
      
      --aug-border:5px; 
      --aug-border-bg:rgba(58, 134, 183, 0.7 ); 
      --aug-border-opacity: 0.9; 
    
      --aug-br:30px; 
      --aug-br-height:30px; 
      --aug-br-width:30px; 
      
      --aug-tr:30px; 
      --aug-tr-height:30px; 
      --aug-tr-width:30px; 
      
      --aug-r-offset:0px; 
      --aug-r:20px; 
      --aug-r-height: 250px;
    }
`;

const Actions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1rem;
`;

const Link = styled(BaseLink)`
  padding-top: 1rem;
  color: #b7a43a;
  font-size: 1.45rem;
  text-transform: uppercase;
  
  &:hover {
    color: rgba(128, 164, 58, 0.8);
    text-decoration: none;
  }
`;

function SideBar() {
  const menu = useStaticQuery(query);
  const {prismic: {allMenus: {edges: [ {node: {body: [{fields}]}}]}}} = menu;

  return (
    <Container>
      <div className={`menu`} augmented-ui="tr-clip br-clip r-clip-y exe">
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

export default SideBar;