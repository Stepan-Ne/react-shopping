const initialState = {
 books: []
}

const cartReducer = (state = initialState, action) => {
switch (action.type) {
  case `ADD_BOOK`:
      return {
          ...state,
          books: [...state.books, action.payload],
         
      };
  case `REMOVE_BOOK`:
      return {
          ...state,
          books: state.books.filter(b => b.id === action.payload)
      };

  default:
      return state;

}
};

export default cartReducer;