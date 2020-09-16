import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {

    return (
        <Fragment>
            <div className="container">
                <div className="row w-100 py-5 m-0 justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-8 col-10 ">
                        <div className="row justify-content-center  p-md-5 p-3 forms-content register-content">
                           <div className="d-flex w-100 justify-content-start mb-4 forms-heading">
                              <span className="ml-2 ">
ثبت نام
                              </span>
                              <NavLink to='/login' className="p-0 ">
   /  ورود 
                              </NavLink>
                           </div>

                        <div className="col-md-10 col-11 p-0 d-flex flex-column justify-content-center align-items-center">

                        
                        <form action="" className="register-form w-100  text-right">
                       
                        <div class="form-group mb-1">
                                    
                                    <input class="form-control" name="mobile" type="text" id="mobile" required=""
                                        placeholder="شماره موبایل خود را وارد کنید"/>
                        </div>
                      
                        <div className="d-flex justify-content-center mt-4">
                        <NavLink to="/confirm" type="button" className="btn btn-danger text-white w-75 register-btn py-2" >
                            ادامه                
                        </NavLink>
                        </div>
                     
                        </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Register;