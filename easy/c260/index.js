const transitions = {
  CLOSED: ['OPENING'],
  OPENING: ['STOPPED_WHILE_OPENING', 'OPEN'],
  STOPPED_WHILE_OPENING: ['CLOSING'],
  OPEN: ['CLOSING'],
  CLOSING: ['STOPPED_WHILE_CLOSING', 'CLOSED'],
  STOPPED_WHILE_CLOSING: ['OPENING'],
};

// transition :: State -> Action -> State
export const transition = (state, action) =>
  transitions[state][action === 'button_clicked' ? 0 : 1];

export default input => input.split('\n').reduce(transition, 'CLOSED');
