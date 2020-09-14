import React, { Fragment } from 'react';

const Card = () => {

return (
<Fragment>
    <div className="container">
        <div className="row">
            <div className="col-md-12 py-5">
                <h1 className="mb-3 py-2 heading text-right">سبد خرید</h1>
                <div className="row w-100 m-2 p-2 card-content ">
                    <div className="col-md-7 d-flex align-items-center">
                    <img className="card-img w-25 h-75" src="./img/card-tree.svg" alt=""/>
                    <div className="w-75 text-right h-75 d-flex flex-column justify-content-end">
                        <span>سبد خرید شما خالی است.</span>
                        <div>
                        <span className="ml-3">تخفیف ها</span>
                        <span>پیشنهاد ویژه</span>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col-md-5 d-flex align-items-center">
                       <img className="card-img" src="./img/card-boy.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Fragment>
);
};

export default Card;