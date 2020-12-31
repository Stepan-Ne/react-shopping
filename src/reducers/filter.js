const initialState = {
  filterBy: 'all',
  setQuery: null
}

const filterReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_QUERY':
      return {
        ...state,

      };
      case `FILTER_BY`:
        return {
            ...state,
            filterBy: action.payload
        };
  
    default:
      return state;
  }
};

export default filterReducer;