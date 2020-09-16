import React, { Fragment, useEffect, useState } from 'react';


const Userinfo=()=>{

return(
<Fragment>
    <div className="container-fluid single-product">
        <div className="container ">
            <div className="row w-100 m-0 py-5">
                <div className="col-md-3 ">
                    <div className="py-2 px-3 d-flex align-items-center username mb-4">
                        <img className="userinfo-icon ml-3" src='./img/userinfo-boy.svg' />
                        <div className="text-right">
                            <p className="m-0">jamali</p>
                            <p className="m-0">09108986655</p>
                        </div>
                    </div>
                    <div className="userinfo-right mb-4">
                            <div class="list-group  w-100 text-right  " id="userinfo-list-tab" role="tablist">
                                <a class="list-group-item list-group-item-action text-dark active  text-right"
                                    id="list-questions-list" data-toggle="list" href="#product-questions" role="tab"
                                    aria-controls="profile">
                                        <img className="userinfo-icon ml-2"
                                        src='./img/orders.svg' />سفارشات</a>
                                <a class="list-group-item list-group-item-action  text-dark text-right"
                                    id="list-home-list" data-toggle="list" href="#product-review" role="tab"
                                    aria-controls="home"><img className="userinfo-icon ml-2"
                                        src='./img/list.svg' />لیست ها</a>
                                <a class="list-group-item list-group-item-action  text-dark text-right"
                                    href="#product-comments" data-toggle="list"><img
                                        className="userinfo-icon ml-2" src='./img/comment.svg' />پیغام ها</a>
                                <a class="list-group-item list-group-item-action  text-dark text-right"
                                    href="#product-specifications" data-toggle="list"><img
                                        className="userinfo-icon ml-2"
                                        src='./img/userinfo-boy.svg' />اطلاعات حساب</a>
                            
                            </div>
                    </div>
                    <div className="py-2 px-3 d-flex align-items-center username ">
                        <img className="userinfo-icon ml-3" src='./img/exit.svg' />
                      
                            <span className="text-right ">خروج</span>
                       
                    </div>
                </div>
                <div className="col-md-9">
                <div className="userinfo-left username mx-3 py-3">
                            <div class="tab-content user-panel-tab-content pt-0" id="nav-tabContent">
                                <div class="tab-pane fade show active text-right" id="product-questions" role="tabpanel"
                                    aria-labelledby="list-questions-list">
                                    <form action="" className="product-questions-form">
                                        <div class='row p-3'>

                                            <div
                                                class=' form-group col-md-2 col-sm-12 p-0 pt-2 text-center d-flex align-items-start justify-content-center '>
                                                <label className="m-0 ">ثبت پرسش:</label>

                                            </div>
                                            <div class=' form-group col-md col-sm-12 product-question-input p-0 ml-3'>
                                                <input type='text' class='form-control' placeholder='' />
                                                <div className="d-flex p-2 mt-3 ">
                                                    <span className="ml-3 product-question-name">کاربر مهمان:</span>
                                                    <span>چرا گوشی هنگ میکنه؟</span>
                                                </div>
                                                <div className="d-flex p-2 mr-4 ">
                                                    <span className="ml-3 product-question-name">کاربر مهمان:</span>
                                                    <span>چون زیاد باهاش کار میکنی</span>
                                                </div>
                                                <div className="d-flex p-2 mt-3 pro-ques ">
                                                    <span className="ml-3 product-question-name">کاربر مهمان:</span>
                                                    <span>چرا گوشی هنگ میکنه؟</span>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div class="tab-pane fade text-right" id="product-review" role="tabpanel"
                                    aria-labelledby="list-profile-list">
                                    <span>نقد و بررسی:</span>
                                    <div id="accordion">
                                        <div class="card">
                                            <div class="card-header">
                                                <a class="card-link" data-toggle="collapse" href="#collapseOne">
                                                    <img className="product-link m-1"
                                                        src='./img/product-reviewicon.png' />
                                                    بازده گوشی
                                                </a>
                                            </div>
                                            <div id="collapseOne" class="collapse show">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header">
                                                <a class="collapsed card-link" data-toggle="collapse"
                                                    href="#collapseTwo">
                                                    <img className="product-link m-1"
                                                        src='./img/product-reviewicon.png' />
                                                    کیفیت دوربین
                                                </a>
                                            </div>
                                            <div id="collapseTwo" class="collapse">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header">
                                                <a class="collapsed card-link" data-toggle="collapse"
                                                    href="#collapseThree">
                                                    <img className="product-link m-1"
                                                        src='./img/product-reviewicon.png' />
                                                    رضایت مشتری
                                                </a>
                                            </div>
                                            <div id="collapseThree" class="collapse">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header">
                                                <a class="collapsed card-link" data-toggle="collapse"
                                                    href="#collapseThree">
                                                    <img className="product-link m-1"
                                                        src='./img/product-reviewicon.png' />
                                                    میزان نگهداری باطری
                                                </a>
                                            </div>
                                            <div id="collapseThree" class="collapse">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="tab-pane fade tect-right" id="product-comments" role="tabpanel"
                                    aria-labelledby="list-profile-list">
                                    <form action="" className="product-questions-form">
                                        <div class='row p-3'>

                                            <div
                                                class=' form-group col-md-2 col-sm-12 p-0 pt-2 text-center d-flex align-items-start justify-content-center '>
                                                <label className="m-0 ">ثبت نظر:</label>

                                            </div>
                                            <div class=' form-group col-md col-sm-12 product-question-input p-0 ml-4'>
                                                <input type='text' class='form-control' placeholder='' />
                                                <div className="d-flex p-2 mt-3 pro-comment justify-content-between ">
                                                    <span>
                                                        <span className="ml-3 product-question-name">کاربر مهمان:</span>
                                                        <span>چرا گوشی هنگ میکنه؟</span>
                                                    </span>

                                                    <span className="d-flex">
                                                        <img className="product-link m-1 ml-3"
                                                            src='./img/pro-comment-dislike.png' />
                                                        <img className="product-link m-1"
                                                            src='./img/pro-comment-like.png' />
                                                    </span>


                                                </div>
                                                <div className="d-flex p-2 pro-comment justify-content-between ">
                                                    <span>
                                                        <span className="ml-3 product-question-name">کاربر مهمان:</span>
                                                        <span>چون زیاد باهاش کار میکنی</span>
                                                    </span>

                                                    <span className="d-flex">
                                                        <img className="product-link m-1 ml-3"
                                                            src='./img/pro-comment-dislike.png' />
                                                        <img className="product-link m-1"
                                                            src='./img/pro-comment-like.png' />
                                                    </span>

                                                </div>
                                                <div className="d-flex p-2  pro-comment justify-content-between">
                                                    <span>
                                                        <span className="ml-3 product-question-name">کاربر مهمان:</span>
                                                        <span>چرا گوشی هنگ میکنه؟</span>
                                                    </span>

                                                    <span className="d-flex">
                                                        <img className="product-link m-1 ml-3"
                                                            src='./img/pro-comment-dislike.png' />
                                                        <img className="product-link m-1"
                                                            src='./img/pro-comment-like.png' />
                                                    </span>

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="tab-pane fade text-right" id="product-specifications" role="tabpanel"
                                    aria-labelledby="list-profile-list">
                                    <h3 className="p-3 info-heading">اطلاعات شخصی</h3>
                                    
                                    <div className="row w-100 p-0 m-0 personal-info">
                                        <div className="col-md-6">
                                        <div class="form-group mb-3">
                                            <label for="username">نام و نام خانوادگی:</label>
                                            <input class="form-control" name="fullname" type="text" id="fullname" required=""
                                            placeholder=""/>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div class="form-group mb-3">
                                            <label for="username">نام کاربری:</label>
                                            <input class="form-control" name="username" type="text" id="username" required=""
                                            placeholder=""/>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div class="form-group mb-3">
                                            <label for="username">شماره تلفن:</label>
                                            <input class="form-control" name="fullname" type="text" id="fullname" required=""
                                            placeholder=""/>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div class="form-group mb-3">
                                            <label for="username">پست الکترونیک:</label>
                                            <input class="form-control" name="username" type="text" id="username" required=""
                                            placeholder=""/>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div class="form-group mb-3">
                                            <label for="username">کد ملی:</label>
                                            <input class="form-control" name="fullname" type="text" id="fullname" required=""
                                            placeholder=""/>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div class="form-group mb-3">
                                            <label for="username">دریافت پیامک خبر ها:</label>
                                            <input class="form-control" name="username" type="text" id="username" required=""
                                            placeholder=""/>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade text-right" id="product-tags" role="tabpanel"
                                    aria-labelledby="list-profile-list">
                                    <div className="d-flex">
                                        <div className=" item m-0 mr-3 px-2 py-1">
                                            <span># موبایل </span>

                                        </div>
                                        <div className="item mr-3 p-0 px-2 py-1">
                                            <span># فینتر </span>

                                        </div>
                                        <div className="item mr-3 p-0 px-2 py-1">
                                            <span># آیفون </span>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                </div>
            </div>
        </div>
    </div>
</Fragment>
);
}
export default Userinfo;