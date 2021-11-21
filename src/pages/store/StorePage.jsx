
import ProductList from '../../components/container/ProductList/ProductList';
import './StorePage.scss';

//Styles Material-UI
// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export default function Store() {
  
  return (
    <Box  sx={{ width: '100%' }}>
      <Typography variant="h5" component="div" gutterBottom>
        Bienvenido a mi tienda
      </Typography>
      <ProductList ></ProductList>
    </Box>
  );
}