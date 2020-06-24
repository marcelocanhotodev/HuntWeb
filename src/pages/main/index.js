import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';

const Main = () => {

    const [products,setProducts] =  useState();
    const [productsInfo,setProductsInfo] =  useState();
    const [currentPage,setcurrentPage] =  useState(1);

    const loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        const {docs, ...rest} = response.data;
        setProducts(docs);
        setProductsInfo(rest);
        setcurrentPage(page);
    };

    const prevPage = () => {
        if(currentPage === 1) return;

        const pageNumber = currentPage - 1;

        loadProducts(pageNumber);
    }

    const nextPage = () => {
        if(currentPage === (productsInfo.pages)) return;
        const pageNumber = currentPage + 1;
        loadProducts(pageNumber);
    }

    useEffect(() => {   
       loadProducts();
    },[]);

    if (!products) return (
        <>
        </>
    )

return (<div className="product-list">
            {products.map(product =>
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    <Link to={`products/${product._id}`}>Acessar</Link>
                </article>
            )}
            <div className="actions">
                <button onClick={prevPage}>Anterior</button>
                <button onClick={nextPage}>Proxima</button>
            </div>
        </div>)
}
export default Main;