import React, { Fragment } from 'react';

const Search = () => {

return (
<Fragment>
    <div className="container-fluid search">
        <div className="container">
            <div className="row justify-content-around ">
                <div className="col-md-2 p-2 m-1">
                    <div className="row sidebar-item  mb-5">
                        <div className="col-12 p-0 m-0">
                            <div className="d-flex border-bottom border-dark p-2">
                                <span className="">فیلتر:</span>
                                <span>گوشی موبایل آیفون</span>
                            </div>
                            <div className="p-2 text-center">
                                <div className="search-form sidebar-search-form m-0 d-flex  align-items-center p-1  ">
                                    <input type="text" className="form-control border-0 text-white"
                                        placeholder="جستجو در نتایج" />
                                    <img className="" src='./img/search.png' />
                                </div>
                            </div>
                            <div className="text-right border-bottom border-dark p-2">
                                <span className=" sidebar-caregory-heading text-right py-1">دسته بندی</span>
                                <div>

                                    <ul className="nav sidebar-category flex-column flex-nowrap overflow-hidden text-right">

                                        <li className="nav-item">
                                        <div className="d-flex">
                                                    <img className="search-sidebar-icon nav-link collapsed text-truncate p-1" href="#submenu1"
                                                data-toggle="collapse" data-target="#submenu1"
                                                    src='./img/bottom-icon.png'
                                                    alt="" /> 
                                                    <a className="shearch-cat-link d-none d-sm-inline" href="#">موبایل</a>
                                            </div>
                                            <div className="collapse" id="submenu1" aria-expanded="false">
                                                <ul className="flex-column pr-2 nav">

                                                    <li className="nav-item">
                                                    <div className="d-flex">
                                                        
                                                                <img
                                                            className=" search-sidebar-icon ml-1 nav-link collapsed p-1" href="#submenu1sub1"
                                                            data-toggle="collapse" data-target="#submenu1sub1"
                                                                
                                                                src='./img/right-icon.png'
                                                                alt="" />
                                                                <a className="shearch-cat-link" href="#">گوشی موبایل</a>
                                                               </div>
                                                        <div className="collapse" id="submenu1sub1" aria-expanded="false">
                                                            <ul className="flex-column nav pr-4">
                                                                <li className="nav-item">
                                                                    <a className="nav-link p-1 px-2" href="#">
                                                                        <span>تست1</span>
                                                                    </a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link p-1 px-2" href="#">
                                                                        <span>تست1</span></a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link p-1 px-2" href="#">
                                                                        <span>تست1</span> </a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item"><a className="nav-link text-truncate py-0 px-4" href="#"> <span
                                                   >لپتاپ</span></a></li>
                                        <li className="nav-item"><a className="nav-link text-truncate py-0 px-4" href="#"> <span
                                                   >تبلت</span></a></li>

                                    </ul>

                                </div>
                            </div>
                            <div className="text-right  p-2">
                                
                                <div className="d-flex ">
                                <span className="ml-2">برندها</span>
                                <div className="search-form   sidebar-search-form d-flex  align-items-center p-1  ">
                                    <input type="text" className="form-control border-0 text-white" placeholder="" />
                                    <img className="" src='./img/search.png' />
                                </div>
                            </div>
                                <div>

                                    <ul className="nav sidebar-category flex-column flex-nowrap overflow-hidden text-right">

                                        <li className="nav-item">
                                            <div className="d-flex">
                                                    <img className="search-sidebar-icon nav-link collapsed text-truncate p-1" href="#submenu2"
                                                data-toggle="collapse" data-target="#submenu2"
                                                    src='./img/bottom-icon.png'
                                                    alt="" /> 
                                                    <a className="d-none d-sm-inline shearch-cat-link" href="#">آیفون</a>
                                            </div>
                                            <div className="collapse" id="submenu2" aria-expanded="false">
                                                <ul className="flex-column pr-2 nav">

                                                    <li className="nav-item">
                                                    <div className="d-flex">
                                                        
                                                                <img
                                                            className=" search-sidebar-icon ml-1 nav-link collapsed p-1" href="#submenu2sub2"
                                                            data-toggle="collapse" data-target="#submenu2sub2"
                                                                
                                                                src='./img/right-icon.png'
                                                                alt="" />
                                                                <a className="shearch-cat-link" href="#">سامسونگ</a>
                                                               </div>
                                                        <div className="collapse" id="submenu2sub2" aria-expanded="false">
                                                            <ul className="flex-column nav pr-4">
                                                                <li className="nav-item">
                                                                    <a className="nav-link p-1 px-2" href="#">
                                                                        <span>تست1</span>
                                                                    </a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link p-1 px-2" href="#">
                                                                        <span>تست1</span></a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link p-1 px-2" href="#">
                                                                        <span>تست1</span> </a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>


                                    </ul>
                                </div>
                            </div>
                           

                        </div>


                    </div>
                    <div className="row sidebar-item  p-2  mb-5 ">
                        <div className="col-12 p-0 m-0">
                            <div className="form-check text-right p-0">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="optradio" />فقط ارسال فوری
                                </label>
                            </div>
                            <div className="form-check text-right p-0">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="optradio" />فقط کالای موجود
                                </label>
                            </div>
                            <div className="form-check text-right p-0">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="optradio" />فقط کالاهای اصل
                                </label>
                            </div>
                            <div className="form-check text-right ">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="optradio" />فقط کالای موجود
                                    در انبار
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="row sidebar-item    mb-5">
                        <div className="col-12 p-0 m-0">
                            <div className="tab-pane fade show text-right" id="product-specifications" role="tabpanel"
                                aria-labelledby="list-profile-list">

                                <div className="search-accordion" id="accordion">
                                    <div className="card">
                                        <div className="card-header p-0">
                                            <a className="card-link d-flex align-items-center p-3" data-toggle="collapse"
                                                href="#collapseOne">
                                                <img className=" product-compare-img ml-2 " src='./img/bottom-icon.png'
                                                    alt="" />
                                                <span>شبکه ارتباطی</span>

                                            </a>
                                        </div>
                                        <div id="collapseOne" className="collapse show">
                                            <div className="card-body  p-2">
                                                <div className="form-check text-right p-0">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input"
                                                            name="optradio" />2G
                                                    </label>
                                                </div>
                                                <div className="form-check text-right p-0">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input"
                                                            name="optradio" />3G
                                                    </label>
                                                </div>
                                                <div className="form-check text-right p-0">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input"
                                                            name="optradio" />4G
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row sidebar-item    mb-5">
                        <div className="col-12 p-0 m-0">
                            <div className="tab-pane fade show text-right" id="product-specifications" role="tabpanel"
                                aria-labelledby="list-profile-list">

                                <div className="search-accordion" id="accordion">
                                    <div className="card">
                                        <div className="card-header p-0">
                                            <a className="card-link d-flex align-items-center p-3" data-toggle="collapse"
                                                href="#collapse2">
                                                <img className=" product-compare-img ml-2 " src='./img/bottom-icon.png'
                                                    alt="" />
                                                <span>رزولوشن</span>

                                            </a>
                                        </div>
                                        <div id="collapse2" className="collapse show">
                                            <div className="card-body  p-2">
                                                <div className="form-check text-right p-0">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input"
                                                            name="optradio" />12 پیکسل
                                                    </label>
                                                </div>
                                                <div className="form-check text-right p-0">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input"
                                                            name="optradio" />14 پیکسل
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row sidebar-item    mb-5">
                        <div className="col-12 p-0 m-0">
                            <div className="tab-pane fade show text-right" id="product-specifications" role="tabpanel"
                                aria-labelledby="list-profile-list">

                                <div className="search-accordion" id="accordion">
                                    <div className="card">
                                        <div className="card-header p-0">
                                            <a className="card-link d-flex align-items-center p-3" data-toggle="collapse"
                                                href="#collapse3">
                                                <img className=" product-compare-img ml-2 " src='./img/bottom-icon.png'
                                                    alt="" />
                                                <span>مقدار RAM</span>

                                            </a>
                                        </div>
                                        <div id="collapse3" className="collapse show">
                                            <div className="card-body  p-2">
                                                <div className="form-check text-right p-0">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input"
                                                            name="optradio" />2 گیگا بایت
                                                    </label>
                                                </div>
                                                <div className="form-check text-right p-0">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input"
                                                            name="optradio" />4 گیگا بایت
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row sidebar-item    mb-5">
                        <div className="col-12 p-0 m-0">
                            <div className="tab-pane fade show text-right" id="product-specifications" role="tabpanel"
                                aria-labelledby="list-profile-list">

                                <div className="search-accordion" id="accordion">
                                    <div className="card">
                                        <div className="card-header p-0">
                                            <a className="card-link d-flex align-items-center p-3" data-toggle="collapse"
                                                href="#collapse4">
                                                <img className=" product-compare-img ml-2 " src='./img/bottom-icon.png'
                                                    alt="" />
                                                <span>نسخه سیستم عامل</span>

                                            </a>
                                        </div>
                                        <div id="collapse4" className="collapse show">
                                            <div className="card-body p-2">
                                                <div className="form-check text-right p-0">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input"
                                                            name="optradio" />9
                                                    </label>
                                                </div>
                                                <div className="form-check text-right p-0">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input"
                                                            name="optradio" />10
                                                    </label>
                                                </div>
                                                <div className="form-check text-right p-0">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input"
                                                            name="optradio" />11
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-md-9 m-1 my-3 py-2 px-0 search-content">
                    <div className="row ordering w-100 p-0 py-2 m-0">
                        <span className="py-1 px-2 mx-1">مرتب سازی:</span>
                        <span className="ordering-item py-1 px-2  mx-1">پرفروش ترین</span>
                        <span className="ordering-item py-1 px-2  mx-1">مرتبط ترین</span>
                        <span className="ordering-item py-1 px-2  mx-1">پربازدید ترین</span>
                        <span className="ordering-item py-1 px-2  mx-1">جدید ترین</span>
                        <span className="ordering-item py-1 px-2  mx-1">گران ترین</span>
                        <span className="ordering-item py-1 px-2  mx-1">سریع ترین</span>
                    </div>
                    <div className="row w-100 p-0 m-0 p-0">
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className=" product-search-item p-1">
                                <div className="d-flex justify-content-end">
                                    <span>4.5</span>
                                    <img className=" product-search-img mr-1 " src='./img/emtiaz.png' alt="" />
                                </div>
                                <img className="w-100" src="./img/iphon.png " alt="" />
                                <div>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                </div>
                                <p className="my-1 text-right">
                                    گوشی سامسونگ
                                </p>

                                <div className="d-flex text-right my-2">
                                    <span className="ml-1 "> 465000</span>
                                    <span>تومان</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className=" product-search-item p-1">
                                <div className="d-flex justify-content-end">
                                    <span>4.5</span>
                                    <img className=" product-search-img mr-1 " src='./img/emtiaz.png' alt="" />
                                </div>
                                <img className="w-100" src="./img/iphon.png " alt="" />
                                <div>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                </div>
                                <p className="my-1 text-right">
                                    گوشی سامسونگ
                                </p>

                                <div className="d-flex text-right my-2">
                                    <span className="ml-1 "> 465000</span>
                                    <span>تومان</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className=" product-search-item p-1">
                                <div className="d-flex justify-content-end">
                                    <span>4.5</span>
                                    <img className=" product-search-img mr-1 " src='./img/emtiaz.png' alt="" />
                                </div>
                                <img className="w-100" src="./img/iphon.png " alt="" />
                                <div>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                </div>
                                <p className="my-1 text-right">
                                    گوشی سامسونگ
                                </p>

                                <div className="d-flex text-right my-2">
                                    <span className="ml-1 "> 465000</span>
                                    <span>تومان</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className=" product-search-item p-1">
                                <div className="d-flex justify-content-end">
                                    <span>4.5</span>
                                    <img className=" product-search-img mr-1 " src='./img/emtiaz.png' alt="" />
                                </div>
                                <img className="w-100" src="./img/iphon.png " alt="" />
                                <div>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                </div>
                                <p className="my-1 text-right">
                                    گوشی سامسونگ
                                </p>

                                <div className="d-flex text-right my-2">
                                    <span className="ml-1 "> 465000</span>
                                    <span>تومان</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row w-100 p-0 m-0 p-0">
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className=" product-search-item p-1">
                                <div className="d-flex justify-content-end">
                                    <span>4.5</span>
                                    <img className=" product-search-img mr-1 " src='./img/emtiaz.png' alt="" />
                                </div>
                                <img className="w-100" src="./img/iphon.png " alt="" />
                                <div>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                </div>
                                <p className="my-1 text-right">
                                    گوشی سامسونگ
                                </p>

                                <div className="d-flex text-right my-2">
                                    <span className="ml-1 "> 465000</span>
                                    <span>تومان</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className=" product-search-item p-1">
                                <div className="d-flex justify-content-end">
                                    <span>4.5</span>
                                    <img className=" product-search-img mr-1 " src='./img/emtiaz.png' alt="" />
                                </div>
                                <img className="w-100" src="./img/iphon.png " alt="" />
                                <div>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                </div>
                                <p className="my-1 text-right">
                                    گوشی سامسونگ
                                </p>

                                <div className="d-flex text-right my-2">
                                    <span className="ml-1 "> 465000</span>
                                    <span>تومان</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className=" product-search-item p-1">
                                <div className="d-flex justify-content-end">
                                    <span>4.5</span>
                                    <img className=" product-search-img mr-1 " src='./img/emtiaz.png' alt="" />
                                </div>
                                <img className="w-100" src="./img/iphon.png " alt="" />
                                <div>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                </div>
                                <p className="my-1 text-right">
                                    گوشی سامسونگ
                                </p>

                                <div className="d-flex text-right my-2">
                                    <span className="ml-1 "> 465000</span>
                                    <span>تومان</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className=" product-search-item p-1">
                                <div className="d-flex justify-content-end">
                                    <span>4.5</span>
                                    <img className=" product-search-img mr-1 " src='./img/emtiaz.png' alt="" />
                                </div>
                                <img className="w-100" src="./img/iphon.png " alt="" />
                                <div>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                </div>
                                <p className="my-1 text-right">
                                    گوشی سامسونگ
                                </p>

                                <div className="d-flex text-right my-2">
                                    <span className="ml-1 "> 465000</span>
                                    <span>تومان</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row w-100 p-0 m-0 p-0">
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className=" product-search-item p-1">
                                <div className="d-flex justify-content-end">
                                    <span>4.5</span>
                                    <img className=" product-search-img mr-1 " src='./img/emtiaz.png' alt="" />
                                </div>
                                <img className="w-100" src="./img/iphon.png " alt="" />
                                <div>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                </div>
                                <p className="my-1 text-right">
                                    گوشی سامسونگ
                                </p>

                                <div className="d-flex text-right my-2">
                                    <span className="ml-1 "> 465000</span>
                                    <span>تومان</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className=" product-search-item p-1">
                                <div className="d-flex justify-content-end">
                                    <span>4.5</span>
                                    <img className=" product-search-img mr-1 " src='./img/emtiaz.png' alt="" />
                                </div>
                                <img className="w-100" src="./img/iphon.png " alt="" />
                                <div>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                </div>
                                <p className="my-1 text-right">
                                    گوشی سامسونگ
                                </p>

                                <div className="d-flex text-right my-2">
                                    <span className="ml-1 "> 465000</span>
                                    <span>تومان</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className=" product-search-item p-1">
                                <div className="d-flex justify-content-end">
                                    <span>4.5</span>
                                    <img className=" product-search-img mr-1 " src='./img/emtiaz.png' alt="" />
                                </div>
                                <img className="w-100" src="./img/iphon.png " alt="" />
                                <div>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                </div>
                                <p className="my-1 text-right">
                                    گوشی سامسونگ
                                </p>

                                <div className="d-flex text-right my-2">
                                    <span className="ml-1 "> 465000</span>
                                    <span>تومان</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className=" product-search-item p-1">
                                <div className="d-flex justify-content-end">
                                    <span>4.5</span>
                                    <img className=" product-search-img mr-1 " src='./img/emtiaz.png' alt="" />
                                </div>
                                <img className="w-100" src="./img/iphon.png " alt="" />
                                <div>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                    <i className="fa fa-circle ml-1"></i>
                                </div>
                                <p className="my-1 text-right">
                                    گوشی سامسونگ
                                </p>

                                <div className="d-flex text-right my-2">
                                    <span className="ml-1 "> 465000</span>
                                    <span>تومان</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row p-2 justify-content-center">
                        <ul className="pagination m-0">
                            <li className="page-item disabled"><a className="page-link" href="#">قبلی</a></li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">بعدی</a></li>
                        </ul>
                    </div>
                   
                </div>
            </div>

        </div>
    </div>
</Fragment>
);
};

export default Search;