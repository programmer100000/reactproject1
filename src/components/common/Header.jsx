import React,{ Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [getSideNav, setSideNav] = useState(false);
    const mainNavOnClick = () => {
        setSideNav(!getSideNav);
    };

    const returnMainNavValue = (
        <ul className="m-0 ">
           <li className="px-md-1 px-lg-2 pb-3 py-2">
                <Link to='/' className="text-white d-flex" >
                <span>
                       <img src="./img/category.png" alt="" className="ml-1" />
                   دسته بندی 
                
                   </span>
                         <span className="d-none d-sm-block mr-1">|</span>
                
                </Link>
            </li>
            <li className="px-md-1 px-lg-2 pb-3 py-2">
                <Link to='/' className="text-white" > 
                
                   <span>
                     <img src="./img/auction2.svg" alt=""/>سالن مزایده</span>
                    </Link>
            </li>
            <li className="px-md-1 px-lg-2 pb-3 py-2">
                <Link to='/' className="text-white" >
                    <img src="./img/store.svg" alt=""/>
                    <span>فروشگاه</span>
                </Link>
            </li>
            <li className="px-md-1 px-lg-2 pb-3 py-2">
            <Link to='/' className="text-white" >
                    <img src="./img/special-offer.svg" alt=""/>
                    <span>پیشنهاد ویژه </span>
                    </Link>
            </li>
            <li className="px-md-1 px-lg-2 pb-3 py-2">
            <Link to='/discounts' className="text-white" >
                    <img src="./img/discounts2.svg" alt=""/>
                    <span>تخفیف ها</span>
                    </Link>
            </li>
        </ul>

    );

    return (
        <Fragment>
            <header>
                <div className="row header-bg">
                    
                <div className='container  site-header p-0'>
                    <div className="row w-100 m-0 p-0  top-nav align-content-center">
                        <div className="col-12 d-flex  justify-content-start m-0 p-0 ">
                           <div className="col-4 p-0 col-md-9 top-nav-logo text-right p-0">
                               <a className="w-20" href='#' >
                                    <img className="w-20" src='./img/logo192.png' />
                                </a>
                           </div>
                           <div className="col-8 p-0 col-md-3 p-md-0 d-flex align-items-center justify-content-end  ">
                            
                            <div className="top-nav-login-store d-flex  align-items-center justify-content-end">
                            <NavLink to='/login' className='top-nav-login  px-2 pb-1  d-flex align-items-center'>
                                <button
                                    className='border-0 text-white'>
                                    <img className="" src='./img/user-login1.png' />
                                </button>
                                <span className="top-nav-login-text text-white">
                                    ورود به حساب کاربری
                                </span>
                            </NavLink>
                            <NavLink to="/card2">
                                <img className="top-nav-store-link mr-2" src='./img/store2.svg' />             
                            </NavLink>
                           
                            </div>
                           </div>
                        </div>
                    </div>
                    <div className="row w-100 m-0 p-0 main-nav align-content-end " >
                        <div className='col-4  col-md-9 m-0 p-0 main-nav-menu d-flex text-right '>
                            <button
                                className="mob-main-nav-menu-btn d-block d-sm-none p-1 border-0 text-white"
                                onClick={mainNavOnClick}
                                >
                                <i className='fa fa-bars'></i>
                            </button>
                            <div className="d-none d-sm-block border-top border-white pl-lg-3">
                                {returnMainNavValue}
                            </div>
                        </div>
                        <div className='col-8 col-md-3 m-0 p-0  d-flex justify-content-end '>
                        <div className="search-form d-flex align-items-center p-1  ">
                            <input type="text" className="form-control border-0 text-white" />
                          
                            <img type="button" className="" src='./img/search1.png' />
                                
                        </div>
                        </div>
                        <div id='main-nav-sidenav' className={getSideNav ? 'showSideNav' : null}>
                            <div id='main-nav-sidenav-header'>
                                <a href='#'>
                                    <img src='./img/logo192.png' />
                                </a>
                            </div>
                            <div id='main-nav-sidenav-body'>
                                {returnMainNavValue}
                            </div>
                        </div>
                        <div
                            id='main-nav-overlay'
                            className={getSideNav ? 'showSideNav' : null}
                            onClick={mainNavOnClick}
                            ></div>
                    </div>
                </div>
                            </div>
            </header>
        </Fragment >
    );
};

export default Header;