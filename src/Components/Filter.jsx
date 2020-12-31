import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Menu, Input } from 'semantic-ui-react';
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
          name='author'
          active={'author' ===  props.filterBy}
          onClick={() => props.filterAC('author')}
        />
        <Menu.Item>
          <Input  placeholder='set the book...' icon='search'/>
        </Menu.Item>
        
      </Menu>
  )
};

const mapState = (state) => ({
  filterBy: state.filterReducer.filterBy
});

export default connect( mapState, { filterAC } )(Filter);