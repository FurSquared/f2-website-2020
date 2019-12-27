import React, {useState} from 'react';
import styled from 'styled-components';
import background from '../images/background.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Container} from 'reactstrap'
import 'augmented-ui/augmented.css';
import Particles from 'react-particles-js';
import Terminal from './Terminal';
import NavBar from './NavBar';
import {Helmet} from 'react-helmet';
import Footer from './Footer';
import SideBar from './SideBar';

const Background = styled.div`
  background:
    linear-gradient(
      rgba(0, 0, 0, 0.65), 
      rgba(0, 0, 0, 0.65)
    ),
    url('${background}');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  font-family: obviously, sans-serif;
  font-style: normal;
  font-weight: 400;
  
  p, li {
    color: #fff;
  }
  
  a {
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
  margin-top: 150px;
  height: 100%;
  width: 100%;
`;

function Layout({children}) {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <Background>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/app2ftr.css"/>
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
      <NavBar/>
      <Terminal onToggle={setTerminalOpen}/>
      <Body>
        <Row>
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
        </Row>
      </Body>
    </Background>
  )
}

export default Layout;