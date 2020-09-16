import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Confirm = () => {

    return (
        <Fragment>
            <div className="container">
                <div className="row w-100 py-5 m-0 justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-8 col-10 ">
                        <div className="row justify-content-center p-md-5 p-3 forms-content">
                        <div className="d-flex w-100 justify-content-start mb-4 confirm-heading">
                              <span className="ml-2 ">
کد تایید را وارد کنید:
                              </span>
                       </div>
                            <form className="w-100 d-flex flex-column ">
                          
                        <div class="form-group mb-3 w-75 align-self-center">
                                   
                                    <input class="form-control" name="confirmcode" type="text" id="confirmcode" required=""
                                        placeholder=""/>
                        </div>
                        <p className="text-right mb-1">
                            حساب کاربری با شماره 09129875544 وجود ندارد.
                        </p>
                        <p className="text-right">
                           ارسال مجدد کد تا 2:40 دیگر
                        </p>
                        <div className="d-flex justify-content-center mt-4">
                        <NavLink to= '/registerinfo' type="button" className="btn btn-danger text-white w-50 login-btn py-2" >
                            تایید                
                        </NavLink>
                        </div>
                     
                        </form>
                        </div>
                        </div>
                    </div>
                </div>
           
        </Fragment>
    );
};

export default Confirm;