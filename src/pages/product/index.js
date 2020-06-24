import React, {useEffect, useState} from 'react';
import './styles.css'
import api from '../../services/api';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const [product,setProduct] = useState();

    useEffect(() => {
        loadProduct();     
    },[]);

    const  loadProduct = async () => {
      const { id } = props.match.params;  
  
      const response = await api.get(`/products/${id}`)
      setProduct(response.data)
    };

    if(!product){
        return(<>
           <div>Loading...</div>
        </>
        )
    }

    return(<>
        <article className="product-article">
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <Link className="link-back" to="/">Voltar</Link>
        </article>   
        
    </>);
}

export default Product;