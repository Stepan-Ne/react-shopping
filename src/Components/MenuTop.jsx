import React, {useState} from 'react';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledMenu = styled(Menu)({
    ['margin-bottom']: '3rem'
  });

const MenuTop = (props) => {

    const [activeItem, setActiveItem] = useState('')
    const  handleItemClick = (e, { name }) => setActiveItem({ activeItem: name })
    return (
<dir>
<Menu className="ui top fixed menu">
                <Menu.Item
                    name='browse'
                    active={activeItem === 'browse'}
                    onClick={handleItemClick}
                >
                    Магазин книг
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='signup'
                        active={activeItem === 'signup'}
                        onClick={handleItemClick}
                    >
                        Итого: &nbsp; {
                            props.booksInCart.length > 0
                            ? <b>{
                                props.booksInCart.reduce((acc, current) => {
                                    return acc + current.price
                                }, 0)
                                }</b>
                            : <b>0</b>
                        } руб.
                    </Menu.Item>

                    <Menu.Item
                        name='help' 
                        active={activeItem === 'help'}
                        onClick={handleItemClick}
                    >
                        Корзина: &nbsp; <b> {props.booksInCart.length} </b>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>

</dir>
            
    );
};

export default MenuTop;