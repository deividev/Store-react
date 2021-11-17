import React, { useEffect, useState} from 'react';
import CardProductComponent from '../../pure/CardProductComponent/CardProductComponent';
import { useDispatch, useSelector } from 'react-redux';
import { createProductList, readProductList } from '../../../redux/actions/product';

//Services
import axios from '../../../utils/config/axios.config';


//Store
import store from '../../../redux/index'


const ProductList = (s) => {

    const productsLink = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const [storeState, setStoreState] = useState([]);
    const productsStore = useSelector(state => state.products);

    useEffect( () =>{
        getProductList();
    });
    
    const getProductList = () => {
        if (productsStore.length === 0 ) {
            axios.get(productsLink).subscribe(
                res => {
                    dispatch(createProductList(res.data));
                    setProducts(res.data);
                },
                error => console.log(error),
                () => console.log('success')
            )
        }
        else{
            setProducts(productsStore[0])
        }
    }
    
    return (
        <div>
            {/* TODO Aplicar un map para renderizar la lista de tareas */}
            <CardProductComponent products={products}></CardProductComponent>
        </div>
    );
};

export default ProductList;