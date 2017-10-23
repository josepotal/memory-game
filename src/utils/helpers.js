import initBoard from '../utils/initializeGame';

export const getInitialState = () => {
  const board = initBoard;
  return {
    board,
    pairSelected: [],
    checking: false,
    attempts: 0,
    modal: false
  };
};
