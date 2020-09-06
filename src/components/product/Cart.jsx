import React, { Fragment } from 'react';

const Cart = () => {

    var arr = [];
    if (localStorage.productscard) {
        let productscard = JSON.parse(localStorage.productscard);
        arr = productscard;
    }
    return (
        <Fragment>
            <div className="container">

                {arr.map((row) => (
                    <div className="text-right "
                        key={row[0]}
                    >
                        <img
                            src={row[3]}
                            alt=""
                        />
                        <span className="m-4">نام محصول : {row[1]} </span>
                        <span className="m-4">توضیحات : {row[2]} </span>
                        <span className="m-4">تعداد : {row[4]} </span>
                        {/* <button onClick={() => { handleAdd(row) }} className="btn btn-primary" >حذف</button> */}
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default Cart;