import React from 'react';
import imagen404 from '../assets/images/404.jpg';

function Error404(){
    return(
        <div className="text-center">
            <h1>404 Not Found</h1>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={imagen404} />
        </div>
        
    )
}


export default Error404;