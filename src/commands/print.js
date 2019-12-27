import {
  OutputFactory
} from 'javascript-terminal';

export const optDef = {};

export default (state, commandOptions) => {
  const input = commandOptions.join(' ');

  return {
    output: OutputFactory.makeTextOutput(input)
  };
};