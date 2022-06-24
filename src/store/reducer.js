const defaultState = {
  num: 1,
};

export default (state = defaultState, dispatch) => {
  const newState = JSON.parse(JSON.stringify(state));
  if (dispatch.type === 'addNum') {
    newState.num += dispatch.value;
    console.log('state.num: ', state.num);
  }
  return newState;
};
