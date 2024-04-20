import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";

import { NavLink, useParams } from "react-router-dom";
import { addCart } from "../redux/action";

const Product =()=>{

    const {id}=useParams();
    const [product,setProduct]=useState([]);
    const [loading,setloading]=useState(false);

    const dispatch =useDispatch();
    const addProduct=(product)=>{
        dispatch(addCart(product))
    }

    useEffect(()=>{
        const getProduct =async()=>{
            setloading(true);
            const responce=await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await responce.json());
            setloading(false);
        }
        getProduct();
    },[]);

const Loading=()=>{
     return(
        <>
        Loading.....
        </>
     )
}
const ShowProduct=()=>{
    return(
        <>
        <div className="col-md-6">
            <img src={product.image} alt={product.title} height="400px" width="400px"/>
        </div>
        <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">
                {product.category}
                </h4>
                <h1 className="display-5">{product.title}</h1>
                <h3 className=" display-6 fw-bold my-4">
                    ${product.price}

                </h3>
                <p>{product.description}</p>
                <button className="btn btn-outline-dark ms-2" onClick={()=>addProduct(product
                    )}>
                    Add to Cart
                </button>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                    Go To Cart
                </NavLink>

        </div>
        </>
    )

}

    return(
        <>
             <div className="container">
                <div className="row">
                    {loading? <Loading/>:<ShowProduct/>}

                </div>
             </div>

        </>
    )
}
export default Product;