export function getNewState(state, newState) {
  return Object.assign({}, state, newState);
}

// I can use this function in other section of my app.
export function isFirstRender(items) {
  return !items || items.length === 0 || Object.keys(items).length === 0;
}
