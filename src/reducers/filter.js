const initialState = {
  filterBy: 'all',
  searchQuery: null
}

const filterReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_QUERY':
      return {
        ...state,
        searchQuery: action.payload

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