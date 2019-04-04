// Base Actions.
export const request = (type) => {
  return {
    type: type
  };
}

export const received = (type, payload) => {
  return {
    type: type,
    payload: payload
  }
};

export const error = type => {
  return {
    type: type
  }
};
