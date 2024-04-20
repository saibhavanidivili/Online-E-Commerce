import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className='hero'>
            
            <div className="card text-bg-dark">
                <img src="\images\bgmart.jpg" className="card-img" alt="Background" height="500px" />
                <div className="card-img-overlay " >
                    <div className="container">
                    
                    <h5 className="card-title display-3 fw-bolder">New Seanson Arrivals</h5>
                    <p className="card-text fs-2">Check Out All The Treands</p>
                    </div>
                    
                </div>
            </div>
           
            <Products/>
        </div>
    )
}
export default Home;