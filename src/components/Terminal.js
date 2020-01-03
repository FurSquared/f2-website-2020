import React, {useEffect, useState} from 'react';
import {ReactThemes} from 'react-terminal-component';
import {Button} from 'reactstrap';
import FPSStats from 'react-fps-stats';
import ReactTerminal, {ReactTerminalStateless} from 'react-terminal-component';
import {
  EmulatorState, OutputFactory, CommandMapping,
  EnvironmentVariables, FileSystem, History,
  Outputs, defaultCommandMapping
} from 'javascript-terminal';
import cookie from 'react-cookies';
import commands from '../commands';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 120px;
  z-index: 9999;
`;

const emulatorState = EmulatorState.create({
  'fs': FileSystem.create({
    '/home': {},
    '/home/root': {}
  }),
  'commandMapping': CommandMapping.create({
    ...defaultCommandMapping,
    ...commands
  })
});

function AppTerminal({close, onToggle}) {
  const [cheatsEnabled, setCheatsEnabled] = useState(cookie.load('cheats-enabled'));
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    onToggle(terminalOpen);
    }, [terminalOpen]);

  useEffect(() => {
    document.addEventListener('keyup', (event) => {
      if(!cheatsEnabled) {
        return;
      }
      if(event.code.toLowerCase() === 'backquote') {
        if(!terminalOpen) {
          setTerminalOpen(true);
        }
      }
    });

    window.enableCheats = message => {
      setCheatsEnabled(message === true);

      cookie.save('cheats-enabled', message, { path: '/' });
      return cheatsEnabled ? "Cheats Disabled" : "Cheats Enabled";
    };
  }, []);

  return (
    <Container>
      {terminalOpen && !close && (
        <React.Fragment>
          <ReactTerminal
            emulatorState={emulatorState}
            theme={ReactThemes.sea}
          />
          <Button color={`danger`} onClick={() => {setTerminalOpen(false)}}>Close</Button>
          <FPSStats bottom={0} top={`auto`} />
        </React.Fragment>
      )}
    </Container>
  );
}

export default AppTerminal;