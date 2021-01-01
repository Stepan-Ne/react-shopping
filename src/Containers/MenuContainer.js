import { connect } from 'react-redux';
import MenuTop from '../Components/MenuTop';
import { removeBook } from '../actions/cartAC';
import {uniq} from 'lodash';



const mapState = (state) => ({
  booksInCart: state.cartReducer.booksInCart,
  items: uniq(state.cartReducer.booksInCart, 'id')
});

export default connect( mapState, { removeBook } )(MenuTop);