import { connect } from 'react-redux';
import { filterAC } from '../actions/filterAC';
import Filter from '../Components/Filter';



const mapState = (state) => ({
  filterBy: state.allBooks.filterBy
});

export default connect( mapState, { filterAC } )(Filter);