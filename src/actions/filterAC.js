export const filterAC = (filter) => ({
  type: 'FILTER_BY',
  payload: filter
});

export const queryAC = (value) => ({
  type: 'SET_QUERY',
  payload: value
});