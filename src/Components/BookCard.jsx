import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

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
                <Button onClick={addBookToCart}>Add to the cart</Button>
            </Card>

    );
};

export default BookCard;