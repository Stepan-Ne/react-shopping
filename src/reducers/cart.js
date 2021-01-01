const initialState = {
 booksInCart: [
    {
        "id": 1,
        "title": "1984",
        "author": "Джордж Оруэлл",
        "image": "https://cv0.litres.ru/sbc/09233908_cover_185-elektronnaya-kniga--.jpg",
        "price": 415,
        "rating": 5
      },
      {
        "id": 1,
        "title": "1984",
        "author": "Джордж Оруэлл",
        "image": "https://cv0.litres.ru/sbc/09233908_cover_185-elektronnaya-kniga--.jpg",
        "price": 415,
        "rating": 5
      }
 ]
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