import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

//Styles
import './CardProductComponent.scss'

const CardProductComponent = ({ products }) => {
    const [spacing, setSpacing] = React.useState(1);

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
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing}>
                {
                    products.map((product, index) =>
                    (   <Link className="product-link" to={abrirProducto(product)}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="500"
                                            image={product.image}
                                            alt=""
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.title}
                                        </Typography>
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
                ))}
                </Grid>
            </Grid>
        </Grid>
    );
};


export default CardProductComponent;