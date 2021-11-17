import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

//Styles
import './CardProductComponent.scss'

const CardProductComponent = ({ products }) => {


    let abrirProducto = (product) => {
        // Nos devuelve un producto con ID entre 1 y 20 (Ambos incluidos).
        return {
            pathname: '/product/' + product.id,
            state: { 
                id: product.id,
                title: product.title,
                description: product.description,
                price: product.price,
                image: product.image
            }
        }  
    }


    return (
        <div className="grid">
            {
                    products.map((product, index) =>
                    (   <Link className="product-link" to={abrirProducto(product)}>
                                <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    title={product.title}
                                    subheader=""
                                />
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        height="350"
                                        image={product.image}
                                        alt=""
                                        />
                                        <CardContent>
                                        {/* <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography> */}
                                        <Typography variant="body2" color="text.secondary">
                                           {product.description}
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button to={abrirProducto(product)} size="small" color="primary">
                                        Mas detalles
                                        </Button>
                                    </CardActions>
                                </Card>
                        </Link>
                    ))
            }
        </div>
    );
};


export default CardProductComponent;