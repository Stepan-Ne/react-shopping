const initialState = {
 booksInCart: []
}

const cartReducer = (state = initialState, action) => {
switch (action.type) {
  case `ADD_BOOK`:
      return {
          ...state,
          booksInCart: [...state.booksInCart, action.payload],
         
      };
  case `REMOVE_BOOK`:
      return {
          ...state,
          booksInCart: state.booksInCart.filter(b => b.id !== action.payload)
      };

  default:
      return state;

}
};

export default cartReducer;