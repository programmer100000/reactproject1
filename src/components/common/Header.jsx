import React,{ Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [getSideNav, setSideNav] = useState(false);
    const mainNavOnClick = () => {
        setSideNav(!getSideNav);
    };

    const returnMainNavValue = (
        <ul className="m-0 ">
            <li className="px-2 pb-3 py-2">
                <Link to='/' className="text-white" >
                    <img src="./img/category.png" alt="" className="ml-1" />
                    <span>دسته بندی | <img src="./img/auction.png" alt=""/>سالن مزایده</span>
                    </Link>
            </li>
            <li className="px-2 pb-3 py-2">
                <Link to='/' className="text-white" >
                    <img src="./img/store-icon.png" alt=""/>
                    <span>فروشگاه</span>
                </Link>
            </li>
            <li className="px-2 pb-3 py-2">
            <Link to='/' className="text-white" >
                    <img src="./img/special-offer.png" alt=""/>
                    <span>پیشنهاد ویژه </span>
                    </Link>
            </li>
            <li className="px-2 pb-3 py-2">
            <Link to='/' className="text-white" >
                    <img src="./img/discounts.png" alt=""/>
                    <span>تخفیف ها</span>
                    </Link>
            </li>
        </ul>

    );

    return (
        <Fragment>
            <header>
                <div className="row header-bg">
                    
                <div className='container  site-header'>
                    <div className="row w-100 m-0 p-0 pt-1 top-nav align-content-start">
                        <div className="col-12 d-flex align-items-center justify-content-start m-0 p-0 ">
                           <div className="col-9 top-nav-logo text-right p-0">
                               <a className="w-20" href='#' >
                                    <img className="w-20" src='./img/logo192.png' />
                                </a>
                           </div>
                           <div className="col-3   ">
                            
                            <div className="top-nav-login-store d-flex  align-items-center justify-content-end">
                            <NavLink to='/login' className='top-nav-login border border-white px-2 pb-1  d-flex align-items-center'>
                                <button
                                    className='border-0 text-white'>
                                    <img className="" src='./img/user-login1.png' />
                                </button>
                                <span className="top-nav-login-text text-white">
                                    ورود به حساب کاربری
                                </span>
                            </NavLink>
                                <img className="top-nav-store-link mr-2" src='./img/store1.png' />
                            </div>
                           </div>
                        </div>
                    </div>
                    <div className="row w-100 m-0 p-0 main-nav align-content-end " >
                        <div className='col-8 m-0 p-0 main-nav-menu d-flex text-right border-top border-white'>
                            <button
                                className="mob-main-nav-menu-btn d-block d-sm-none p-1 border-0 text-white"
                                onClick={mainNavOnClick}
                                >
                                <i className='fa fa-bars'></i>
                            </button>
                            <div className="d-none d-sm-block">
                                {returnMainNavValue}
                            </div>
                        </div>
                        <div className='col-4 m-0 p-0  d-flex justify-content-end'>
                        <div className="search d-flex border border-white align-items-center p-1  ">
                            <input type="text" className="form-control border-0 text-white" />
                                    <img className="" src='./img/search1.png' />
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