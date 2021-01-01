import React, {useState} from 'react';
import { Menu, Button, Popup, List, Image } from 'semantic-ui-react';


const CartList = ({ title, id, image }) => {
    return <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button>Remove</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
      <List.Content>Lena</List.Content>
    </List.Item>
  </List>
}

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
                    <Popup content={CartList}
                     trigger={<Menu.Item
                        name='help' 
                        active={activeItem === 'help'}
                        onClick={handleItemClick}
                    >
                        Корзина: &nbsp; <b> {props.booksInCart.length} </b>
                    </Menu.Item>}
                    on='click'
                    hideOnScroll />
                    
                </Menu.Menu>
            </Menu>

</dir>
            
    );
};

export default MenuTop;