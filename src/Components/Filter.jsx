import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { filterAC } from '../actions/filterAC';

const Filter = (props) => {


  return (
<Menu secondary>
        <Menu.Item
          name='all'
          active={'all' === props.filterBy}
          onClick={() => props.filterAC('all')}
        />
        <Menu.Item
          name='popular'
          active={'popular' ===  props.filterBy}
          onClick={() => props.filterAC('popular')}
        />
        <Menu.Item
          name='price(high)'
          active={'price_high' ===  props.filterBy}
          onClick={() => props.filterAC('price_high')}
        />
        <Menu.Item
          name='price(low)'
          active={'price_low' ===  props.filterBy}
          onClick={() => props.filterAC('price_low')}
        />
        <Menu.Item
          name='aughtor'
          active={'aughtor' ===  props.filterBy}
          onClick={() => props.filterAC('aughtor')}
        />
        
      </Menu>
  )
};

const mapState = (state) => ({
  filterBy: state.allBooks.filterBy
});

export default connect( mapState, { filterAC } )(Filter);