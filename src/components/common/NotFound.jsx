import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
return (
<Fragment>
    <div className="container-fluid single-product">
        <div className="container ">
            <div className="row notfound-content w-100 m-0 py-5">
                <div className="col-md-8 notfound-txt   d-flex justify-content-center align-items-center  ">
              
               <span>404</span>
               <span>ERROR</span>
               
                </div>
               <div className="col-md-4 p-4 d-flex align-items-center">
               <img className="h-75 w-100   " src='./img/404error.svg' alt="" />
               </div>

            </div>
        </div>
    </div>
</Fragment>
);
};

export default NotFound;