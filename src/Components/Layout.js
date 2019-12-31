import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import background from '../images/background.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from 'reactstrap'
import Particles from 'react-particles-js';
import Terminal from './Terminal';
import NavBar from './NavBar';
import {Helmet} from 'react-helmet';
import Footer from './Footer';

const Background = styled.div`
  background:
    linear-gradient(
      rgba(0, 0, 0, 0.65), 
      rgba(0, 0, 0, 0.65)
    ),
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
  
  a h1, h2, h3, h4, h5, b, strong {
    color: #b7a43a;
  }
`;

const AutoParticles = styled(Particles)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Body = styled.div`
  margin: 150px 0;
  height: 100%;
`;

const StyledRow = styled(Row)`
  // height: 100%;
`;

function Layout({children}) {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const navBarRef = useRef(null);

  return (
    <React.Fragment>
      <NavBar innerRef={navBarRef}/>
      <Background>
        <Helmet>
          <link rel="stylesheet" href="https://use.typekit.net/app2ftr.css"/>
          <link rel="stylesheet" type="text/css" href="https://unpkg.com/augmented-ui/augmented.css"/>
        </Helmet>
        {!terminalOpen && <AutoParticles
          params={{
            "particles": {
              "number": {
                "value": 160,
                "density": {
                  "enable": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "speed": 4,
                  "size_min": 0.3
                }
              },
              "line_linked": {
                "enable": false
              },
              "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
              }
            }
          }}
        />}
        <Body>
          {/*<Terminal onToggle={setTerminalOpen}/>*/}
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
        <Footer/>
      </Background>
    </React.Fragment>
  )
}

export default Layout;