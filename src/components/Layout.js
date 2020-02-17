import React, {useRef} from 'react';
import styled from 'styled-components';
import background from '../images/background.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from 'reactstrap'
import NavBar from './NavBar';
import {Helmet} from 'react-helmet';
import Footer from './Footer';
import { createGlobalStyle } from 'styled-components';
import Block from '../fonts/Serendior-Block.otf';
import Regular from '../fonts/Serendior-Regular.otf';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Serendior';
        src: local('Font Name'), local('FontName'),
        url(${Regular}) format('otf'),
        url(${Block}) format('otf');
        font-weight: 300;
        font-style: normal;
    }
`;

const Background = styled.div`
  background:
    url('${background}');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  
  font-family: obviously, sans-serif;
  font-style: normal;
  font-weight: 400;
  
  p, li {
    color: #fff;
  }
  
  ul {
    text-align: left;
  }
  
  a, h1, h2, h3, h4, h5, b, strong {
    color: #b7a43a;
  }
`;

const Body = styled.div`
  height: 100%;
`;

const StyledRow = styled(Row)`
  // height: 100%;
`;

function Layout({children}) {
  const navBarRef = useRef(null);

  return (
    <React.Fragment>
      <GlobalStyles/>
      {/*<NavBar innerRef={navBarRef}/>*/}
      <Background>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Lora|Open+Sans&display=swap" rel="stylesheet"/>
        </Helmet>
        <Body>
          <StyledRow>
            <Col
              xlg={{size: 6, offset: 3}}
              md={{size: 8, offset: 2}}
              sm={{size: 10, offset: 1}}
              xs={12}
            >
              <Content>
                {children}
              </Content>
            </Col>
          </StyledRow>
        </Body>
        {/*<Footer/>*/}
      </Background>
    </React.Fragment>
  )
}

export default Layout;