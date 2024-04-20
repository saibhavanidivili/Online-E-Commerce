import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [data, setdata] = useState([]);
    const [filter, setfilter] = useState([]);
    const [loading, setloading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setloading(true);
            const responce = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setdata(await responce.clone().json());
                setfilter(await responce.json());
                setloading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading.....
            </>
        )

    }
    const filterProduct=(cat)=>{
        const updatedList=data.filter((x)=>x.category===cat);
        setfilter(updatedList)

    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center">
                    <button className="btn btn-outline-dark me-2" onClick={()=>setfilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("jewelery")}>jewelery</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("electronics")}>Electronics</button>
                   
                </div>
               
                {filter.map((product) => {
                    return (
                        <>
                        <br></br>
                            <div className="col-md-3 mb-4">
                                <br></br>
                                <div class="card h-100 text-center p-5" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="150px"/>
                                        <div class="card-body">
                                            <h5 class="card-title">{product.title}</h5>
                                            <p class="card-text fw-bold">${product.price}</p>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                </div>
                            </div>
                        </>

                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-5 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>

        </div>
    )
}
export default Products;