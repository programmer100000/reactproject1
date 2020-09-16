import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Registerinfo = () => {

    return (
        <Fragment>
            <div className="container">
                <div className="row w-100 py-5 m-0 justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-8 col-10 ">
                        <div className="row justify-content-center  p-md-5 p-3 forms-content">
                      
                           
                        <div className="col-10 p-0 d-flex flex-column justify-content-center align-items-center">

                        
                        <form action="" className="login-form w-100  text-right">
                        <div class="form-group mb-3">
                                    <label for="username">نام کاربری</label>
                                    <input class="form-control" name="username" type="text" id="username" required=""
                                        placeholder=""/>
                        </div>
                        <div class="form-group mb-3">
                                    <label for="password">رمز عبور</label>
                                    <input class="form-control" name="username" type="password" id="password" required=""
                                        placeholder=""/>
                        </div>
                        <div class="form-group mb-3">
                                    <label for="password">تکرار رمز عبور</label>
                                    <input class="form-control" name="username" type="password" id="password1" required=""
                                        placeholder=""/>
                        </div>
                      
                        <div className="d-flex justify-content-center mt-4">
                        <NavLink to="/" type="button" className="btn btn-danger text-white w-75 login-btn py-2" >
                           تایید               
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

export default Registerinfo;