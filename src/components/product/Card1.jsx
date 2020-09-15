import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Card = () => {

return (
<Fragment>
    <div className="container">
        <div className="row">
            <div className="col-md-12 py-5 ">
                <div className="d-flex py-2  mb-5 heading text-right">
                <img className="card-icon ml-2" src="./img/card-icon.png" alt=""/>
                <h1 className="  text-right ">سبد خرید</h1>
                </div>
           
                <div className="row w-100 m-2 p-2 card-content ">
                    <div className="col-md-7 justify-content-center d-flex align-items-center">
                        <div className="row w-100 h-100 align-items-center">
                            <div className="col-3 d-flex align-items-end h-75">
                            <img className="card-img-tree " src="./img/card-tree.svg" alt=""/>
                            </div>
                            <div className="col-9 h-75 p-0 text-right card-text-group1 d-flex flex-column justify-content-end align-items-center">
                           <div className="row w-100">
                               <div className="col-12 p-0">
                               <span className="card-text">سبد خرید شما خالی است.</span>
                               </div>
                           </div>
                           <div className="row w-100 card-text-group d-flex justify-content-start py-2">
                               <div className="col-5 col-sm-4 p-0">
                               <NavLink to="/" className="ml-3 card-text2">تخفیف ها</NavLink>
                        
                               </div>
                               <div className="col-5 col-sm-4 p-0">
                               <NavLink to="/" className="card-text2">پیشنهاد ویژه</NavLink>
                               </div>
                     
                           </div>
                    
                        </div>
                   
                        
                    </div>
                    </div>
                    <div className="col-md-5 justify-content-center d-flex align-items-center">
                       <img className="card-img-boy" src="./img/card-boy.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Fragment>
);
};

export default Card;