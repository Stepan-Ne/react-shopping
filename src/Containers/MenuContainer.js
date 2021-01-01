import { connect } from 'react-redux';
import MenuTop from '../Components/MenuTop';



const mapState = (state) => ({
  booksInCart: state.cartReducer.booksInCart
});

export default connect( mapState, {  } )(MenuTop);