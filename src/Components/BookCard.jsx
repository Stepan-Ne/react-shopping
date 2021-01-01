import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import styled from 'styled-components';


const StyledButton = styled(Button)({
  ['background-color']: '#4CAF50 !important',
  color: '#FFFFFF !important',
  transition: 'ease-in-out all 0.1s',
  transform: 'scale(1)',
  ['&:active']: {
    transform: 'scale(1.2)',
  },
  ['&:hover']: {
      background: '#3e8e41 !important'
  }
    
});

const BookCard = (props) => {

    

    const {book, ...restProps} = props;
    const {title, author, image, price} = book;

    const addBookToCart = (e) => {
        restProps.addBook(book)
    }
    return (

            <Card>
                <Image src={image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{author}</span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='rub' />
                        {price}
                    </a>
                </Card.Content>
                <StyledButton onClick={addBookToCart}>Add to the cart</StyledButton>
            </Card>

    );
};

export default BookCard;