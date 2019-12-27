export const commandNames = [
  'print',
];

export default commandNames.reduce((mapping, commandName) => {
  return {
    ...mapping,
    [commandName]: {
      function: require(`./${commandName}`).default,
      optDef: require(`./${commandName}`).optDef
    }
  };
}, {});