import React, {useState} from 'react';
import styled from 'styled-components';
import {Link as BaseLink, useStaticQuery, StaticQuery, graphql} from 'gatsby';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import logo from '../images/logo.png';

const query = graphql`
    query MyMenuQuery {
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

`;

const Container = styled(Navbar)`
  width:100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: transparent !important;
  padding: 0.5rem 0;
  
  div.menu {
      width: 100%;
      min-height: 100px;
      padding: 0.5rem 1rem;
      display: inline-block;
      margin: 0 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
     
      --aug-inset:7px; 
      --aug-inset-bg: rgba(58, 134, 183); 
      --aug-inset-opacity: 1;
      
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
      --aug-b-width: 19.2%;
      
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        
        --aug-bl:10px; 
        --aug-bl-height:10px; 
        --aug-bl-width:10px; 
        
        --aug-br:10px; 
        --aug-br-height:10px; 
        --aug-br-width:10px; 
        
        --aug-b:75px; 
        --aug-b-height:10px; 
      }
    }
`;

const Menu = styled(NavbarToggler)`
  margin: 1rem;
`;

const MenuCollapse = styled(Collapse)`
  display: flex;
  
  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;

const Link = styled(BaseLink)`
  padding-right: 1rem;
  color: #b7a43a;
  font-size: 1.45rem;
  text-transform: uppercase;
  
  &:hover {
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const Logo = styled.img`
  height: 50px;
  margin: 1rem;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledNavItem = styled(NavItem)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const menu = useStaticQuery(query);
  // const {prismic: {allMenus: {edges: [ {node: {body: [{fields}]}}]}}} = menu;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StaticQuery
      query={query}
      render={data => {
        const {prismic: {allMenus: {edges: [{node: {body: [{fields}]}}]}}} = data;

        return (

          <Container color="light" light expand="md" opacity={menuOpen ? 1 : 0.6}>
            <div className={`menu`} augmented-ui="bl-clip br-clip b-clip-x exe">
              <Row>
                <Link to={`/`}>
                  <Logo src={logo} alt={`logo`}/>
                </Link>
                <Menu onClick={toggleMenu} className={`light`} />
              </Row>
              <MenuCollapse isOpen={menuOpen} navbar>
                <Nav navbar>
                  {fields.map((
                    {
                      label: [
                        { text: label}
                      ],
                      url: [
                        { text: url}
                      ],
                    }, key) => {
                    return <StyledNavItem key={`menu_${label}`}><Link to={url}>{label}</Link></StyledNavItem>
                  })}
                </Nav>
              </MenuCollapse>
            </div>
          </Container>
        )
      }}
    />
  )
}

export default NavBar;