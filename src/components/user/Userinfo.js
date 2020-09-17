import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const Userinfo=()=>{

var products = useSelector((state) => state.product);
const slideUp=(e ,i)=> {
    var mdiv = document.getElementsByClassName('card-product-item')[i];
    mdiv.style.transition = "all .5s ease-in-out";
    mdiv.style.height = "0px";
    
    mdiv.style.borderBottom = "none";
    document.getElementsByClassName('card-product-item')[0].lastElementChild.style.borderBottom = "none";
}
const SlideUp=(e ,j)=> {
    var mdiv = document.getElementsByClassName('card-products-item')[j];
    mdiv.style.transition = "all .5s ease-in-out";
    mdiv.style.height = "0px";
    
    mdiv.style.borderBottom = "none";
    document.getElementsByClassName('card-products-item')[0].lastElementChild.style.borderBottom = "none";
}

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
                                <a class="list-group-item list-group-item-action text-dark active  text-right user-order d-flex align-items-center"
                                    id="list-questions-list" data-toggle="list" href="#product-questions" role="tab"
                                    aria-controls="profile">
                                        <img className="userinfo-icon order-icon1 ml-2"
                                        src='./img/orders.svg' />
                                         <img className="userinfo-icon order-icon2 ml-2"
                                        src='./img/order-hover.svg' />سفارشات
                                        </a>
                                <a class="list-group-item list-group-item-action  text-dark text-right user-list  d-flex align-items-center"
                                    id="list-home-list" data-toggle="list" href="#product-review" role="tab"
                                    aria-controls="home"><img className="userinfo-icon list-icon1 ml-2"
                                        src='./img/favorites.png' />
                                        <img className="userinfo-icon list-icon2 ml-2"
                                        src='./img/favorites-hover.png' />علاقه مندی ها</a>
                                <a class="list-group-item list-group-item-action  text-dark text-right user-message  d-flex align-items-center"
                                    href="#product-comments" data-toggle="list"><img
                                        className="userinfo-icon comment-icon1 ml-2" src='./img/comment.svg' />
                                        <img
                                        className="userinfo-icon comment-icon2 ml-2 " src='./img/comment-hover.svg' />پیغام ها</a>
                                <a class="list-group-item list-group-item-action  text-dark text-right user-infoo  d-flex align-items-center"
                                    href="#product-specifications" data-toggle="list"><img
                                        className="userinfo-icon info-icon1 ml-2"
                                        src='./img/userinfo-boy.svg' />
                                        <img
                                        className="userinfo-icon info-icon2 ml-2"
                                        src='./img/userinfo-boy-hover.svg' />اطلاعات حساب</a>
                            
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
                                         <h3 className="p-3 info-heading">سفارشات</h3>
                                         <div>

                                         {products.map((product,j) => (
                                             <div className="col-md-12 card-products-item p-0" key={j} >
                                        <div className="row w-100 p-4 m-0">
                                            <div className="col-md-3 p-0">
                                                <img className="card-item-img" src="./img/iphon.png" alt="" />
                                            </div>
                                            <div className="col-md-9 p-0 d-flex flex-column justify-content-between">
                                                <div className="align-self-end mb-2">
                                                <button className="card-product-trash"  onClick={(e) => { SlideUp(e,j)}} >
                                                    <img className="card-item-icon-trash1 " src="./img/red-trash.png" alt="" />
                                                    <img className="card-item-icon-trash2 " src="./img/white-trash.png" alt="" />
                                                </button> 
                                                </div>
                                               



                                                <h2 className="text-right mb-3">
                                                    گوشی iphon 11pro max
                                                </h2>
  
                                 
                                                <div className="text-right  mb-1">
                                                    <img className="card-item-icon ml-1" src="./img/user-payment.png" alt="" />
                                                    <span>پرداخت شد</span>
                                                </div>
                                                <div className="text-right  mb-1">
                                                    <img className="card-item-icon ml-1" src="./img/user-delivery.png" alt="" />
                                                    <span>دو روز تا زمان ارسال</span>
                                                </div>
                                                <div className="d-flex product-count my-3">
                                                    <button className="count-btn" onClick={(e) => { }} >
                                                        <i class="fa fa-plus ml-1"></i>
                                                    </button>
                                                    <input type="number" placeholder="1"  className="form-control border-0 input-counter"
                                                       
                                                       onChange={(e) => {
                                                          
                                                           
                                                           
                                                        }}
                                                        />

                                                    <button className="count-btn" onClick={(e) => {}}>
                                                        <i class="fa fa-minus ml-1"></i>
                                                    </button>
                                                </div>
                                                <div className="price-group d-flex justify-content-end">
                                                    <span className="ml-1 price2 ">450000</span>
                                                    <span>تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                      ))}
                                      </div>
                                      <div className="d-none">
                                        <div className="p-5 d-flex align-items-center justify-content-center user-empty-item">
                                            <i class="fa fa-circle ml-1"></i>
                                            <span className="user-empty-text ml-5"> سفارشی ثبت نشده است </span>
                                            <img className="user-empty-img w-25" src="./img/user-order-empty.png" alt="" />
                                        </div>
                                      </div>
                                </div>

                                <div class="tab-pane fade text-right" id="product-review" role="tabpanel"
                                    aria-labelledby="list-profile-list">
                                         <h3 className="p-3 info-heading">علاقه مندی ها</h3>
                                         <div>

                                         {products.map((product,i) => (
                                             <div className="col-md-12 card-product-item p-0" key={i} >
                                        <div className="row w-100 p-4 m-0">
                                            <div className="col-md-3 p-0">
                                                <img className="card-item-img" src="./img/iphon.png" alt="" />
                                            </div>
                                            <div className="col-md-9 p-0 d-flex flex-column justify-content-between">
                                               <div className="d-flex flex-column">
                                                    <div className="align-self-end mb-2">
                                                    <button className="card-product-trash"  onClick={(e) => { slideUp(e,i)}} >
                                                        <img className="card-item-icon-trash1 " src="./img/red-trash.png" alt="" />
                                                        <img className="card-item-icon-trash2 " src="./img/white-trash.png" alt="" />
                                                    </button> 
                                                    </div>
                                                    <h2 className="text-right mb-3">
                                                        گوشی iphon 11pro max
                                                    </h2>
                                                </div> 
                                                <div className="price-group d-flex justify-content-end">
                                                    <span className="ml-1 price2 ">450000</span>
                                                    <span>تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
  ))}
                                </div>
                                <div className="d-none">
                                <div className="p-5 d-flex align-items-center justify-content-center user-empty-item">
                                            <i class="fa fa-circle ml-1"></i>
                                            <span className="user-empty-text ml-5"> هیچ گزینه ای انتخاب نشده است</span>
                                            <img className="user-empty-img w-25" src="./img/user-favorite-empty.png" alt="" />
                                        </div>
                                        </div>
                                </div>
                                <div class="tab-pane fade tect-right" id="product-comments" role="tabpanel"
                                    aria-labelledby="list-profile-list">
                                         <h3 className="p-3 info-heading text-right">پیام ها</h3>
                                         <div>

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
                                <div className="d-none">
                                <div className="p-5 d-flex align-items-center justify-content-center user-empty-item ">
                                            <i class="fa fa-circle ml-1"></i>
                                            <span className="user-empty-text ml-5"> هیچ پیامی دریافت نشده است</span>
                                            <img className="user-empty-img w-25" src="./img/user-message-empty.png" alt="" />
                                        </div>
                                        </div>
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