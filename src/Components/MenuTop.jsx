import React, {useState} from 'react';
import { Menu } from 'semantic-ui-react';

const MenuTop = () => {

    const [activeItem, setActiveItem] = useState('')
    const  handleItemClick = (e, { name }) => setActiveItem({ activeItem: name })
    return (
        <div>
            <Menu>
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
                        Итого: &nbsp; <b>0</b> руб.
                    </Menu.Item>

                    <Menu.Item
                        name='help'
                        active={activeItem === 'help'}
                        onClick={handleItemClick}
                    >
                        Корзина
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    );
};

export default MenuTop;