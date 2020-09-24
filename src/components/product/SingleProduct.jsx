import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../actions/singleproduct';
import { isEmpty } from 'lodash';
import Select from 'react-select';
import { Link, NavLink } from 'react-router-dom';
import Rating  from 'react-rating';


// const SingleProduct = ({ match }) => {
// const dispatch = useDispatch();
// useEffect(() => {
// dispatch(getSingleProduct(match.params.id));
// }, []);
// const product = useSelector((state) => state.singleproduct);
// return(
// <Fragment>
    // {!isEmpty(product) ? (
    // <div className="text-right">
        // <img // src={product.imageUrl} // alt="" // />
        // <span>
            // نام محصول : {product.title}
            // </span>
        // <span>توضیحات : {product.description} </span>
        // <button className="btn btn-primary">افزودن به سبد خرید</button>
        // </div>
    // ) : (
    // <div>
        // <p>
            // product not found!
            // </p>
        // </div>
    // )}
    // </Fragment>
// );
// };

// export default SingleProduct;

const SingleProduct=()=>{
   
const [getMore, setMore] = useState(true);
const [getClose, setClose] = useState(false);
const handleOnclickMore = () => {
setMore(!getMore);
setClose(!getClose);
};

const [guaranteeitems] = React.useState([
{
label: "گارانتی1",
value: "گارانتی1"
},
{ label: "گارانتی2", value: "گارانتی2" }
]);
const default1={value:"نوع گارانتی"};
const [coloritems] = React.useState([
{
label: "رنگ 1",
value: "رنگ 1"
},
{ label: "رنگ 2", value: "رنگ 2" }
]);
const default2={value:"تعیین رنگ"};
const handleChange = selectedOption => {
console.log(`Option selected:`, selectedOption);
};
const formatOptionLabel = ({ label,value }) => (
<div style={{ display: "flex",borderRadius:"30px"}}>

    <div style={{ textAlign:"right", marginRight: "10px",borderRadius:"30px" }}>
        {value}
    </div>
</div>
);

return(
<Fragment>
    <div className="container-fluid single-product">
        <div className="container ">
            <div className="row p-4 ">
                <div className="col-lg-8 product-attributes">
                    <h1 className="text-right mb-4 ">
                        iphon 11 pro max
                    </h1>
                    <div className="d-flex  py-2   mb-4 product-attributes-top ">
                        <div className="ml-4">
                            <span className="ml-1">برند:</span>
                            <span className="product-brand">iphon</span>
                        </div>
                        <div className="d-flex text-right">
                            <span className="ml-1">دسته بندی:</span>
                            <span className="product-category">گوشی موبایل</span>
                        </div>
                    </div>
                    <div className="text-right d-flex mb-4">
                        <span>
                            مشخصات:
                        </span>
                        <ul className="product-attributes-list ">
                            <li className="mr-5">حافظه داخلی: 256 گیگابایت</li>
                            <li className="mr-5">شبکه ارتباطی: 2G,3G,4G</li>
                            <li className="mr-5">سیستم عامل: ios</li>
                            <div id="accordion" className="mr-4 product-more-accordeion">
                                <div class="card">
                                    <div id="collapseOne" class="collapse ">
                                        <div class="card-body py-0">
                                            <li className="">حافظه داخلی: 256 گیگابایت</li>
                                            <li className="">شبکه ارتباطی: 2G,3G,4G</li>
                                            <li className="">سیستم عامل: ios</li>
                                        </div>
                                    </div>
                                    <div class="card-header p-0">
                                        <a class="card-link" data-toggle="collapse" href="#collapseOne"
                                            onClick={handleOnclickMore}>
                                            <span className={` more ${ getMore ? 'show-more' : 'hide-more' } `}>
                                                <i className="fa fa-plus ml-1"></i>
                                                موارد بیشتر
                                            </span>
                                            <span className={`less ${ getClose ? 'show-close' : 'hide-close' } `}>
                                                <i className="fa fa-minus  ml-1"></i>
                                                بستن
                                            </span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="product-colors d-md-flex py-2 px-4 text-right mb-3">
                        <div>رنگ بندی: </div>
                        <span className="mr-lg-3"><i class="fa fa-circle  ml-1"></i>طلائی</span>
                        <span className="mr-3"><i class="fa fa-circle ml-1"></i>مشکی</span>
                        <span className="mr-3"><i class="fa fa-circle text-black ml-1"></i>نقره ای</span>
                    </div>
                    <div className="description text-right d-flex mb-3">
                        <span className="ml-2">توضیحات:</span>
                        <span>ایفون 11 پرومکس با حافظه 256 بهترین انتخاب برای شماست.</span>
                    </div>
                    <div className="row product-price  p-3 mb-3 align-content-center">
                        <div className="col-lg-6 d-flex flex-column justify-content-center ">
                            {/* <div class="form-group text-right ">
                                <label for="sel1">نوع گارانتی</label>
                                <select class="form-control guarantee-select" id="sel1">
                                    <option>گارانتی1</option>
                                    <option>گارانتی2</option>
                                </select>
                            </div>
                            <div class="form-group text-right ">
                                <label for="sel1">تعیین رنگ</label>
                                <select class="form-control color-select" id="sel1">
                                    <option>رنگ 1</option>
                                    <option>رنگ 2</option>
                                </select>
                            </div> */}
                            <Select defaultValue={default1} value={guaranteeitems.value} onChange={handleChange}
                                options={guaranteeitems} formatOptionLabel={formatOptionLabel} />
                            <Select defaultValue={default2} value={coloritems.value} onChange={handleChange}
                                options={coloritems} formatOptionLabel={formatOptionLabel} />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-end">
                            <div className="d-flex align-items-center justify-content-around mb-3 w-100">
                                <span className="text-right">قیمت :</span>
                                <span className="pro-price py-2 px-5  text-center w-75">44500000 تومان</span>
                            </div>
                            <a href="#" className="btn btn-primary product-payment-btn ml-2 text-white "> افزودن به سبد
                                خرید</a>

                        </div>


                    </div>
                </div>
                <div className="col-lg-4 py-5">
                    <div className=" product-img-section p-2">
                        <span className="text-left  product-rating p-1">
                        <Rating
  emptySymbol="fa fa-star-o fa-2x"
  fullSymbol="fa fa-star fa-2x"
  fractions={2}
/>
                        </span>

                        <div id="multi-item-example"
                            className="carousel slide carousel-multi-item d-flex align-items-center"
                            data-ride="carousel">

                            <a className="btn-floating" href="#multi-item-example" data-slide="next"><i
                                    className="fa fa-chevron-right text-dark"></i></a>

                            <div className="carousel-inner" role="listbox">

                                <div className="carousel-item active">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 text-center">
                                            <img className="product-img" src='./img/iphon.png' />
                                        </div>
                                    </div>


                                </div>



                                <div className="carousel-item">

                                    <div className="row justify-content-center">
                                        <div className="col-md-10 text-center">
                                            <img className="product-img" src='./img/iphon.png' />
                                        </div>


                                    </div>

                                </div>


                            </div>
                            <a className="btn-floating " href="#multi-item-example" data-slide="prev"><i
                                    className="fa fa-chevron-left text-dark"></i></a>

                        </div>
                        <div>

                        </div>

                    </div>
                    <div className="d-flex justify-content-end p-1">
                        <NavLink to="/compare"><img className="product-link m-1" src='./img/product-comparison-icon.png' /></NavLink> 
                        <NavLink to="/pricediagram"> <img className="product-link m-1" src='./img/pro-diagram.png' /></NavLink>
                        <img className="product-link m-1" src='./img/pro-share.png' />
                        <img className="product-link m-1" src='./img/pro-like.png' />

                    </div>
                </div>

                <div className="col-12 product-options p-3">
                    <div className="row px-3">
                        <div className="col-md-2 product-options-right mx-3 p-0 py-3">
                            <div class="list-group  w-100 text-right " id="product-list-tab" role="tablist">
                                <a class="list-group-item list-group-item-action text-dark active mb-2 text-center"
                                    id="list-questions-list" data-toggle="list" href="#product-questions" role="tab"
                                    aria-controls="profile"><img className="product-options-icon ml-2"
                                        src='./img/product-questions.png' />پرسش و پاسخ</a>
                                <a class="list-group-item list-group-item-action  text-dark mb-2 text-center"
                                    id="list-home-list" data-toggle="list" href="#product-review" role="tab"
                                    aria-controls="home"><img className="product-options-icon ml-2"
                                        src='./img/product-review.png' />نقد و بررسی</a>
                                <a class="list-group-item list-group-item-action  text-dark mb-2 text-center"
                                    href="#product-comments" data-toggle="list"><img
                                        className="product-options-icon ml-2" src='./img/product-comments.png' />نظر
                                    کاربری</a>
                                <a class="list-group-item list-group-item-action  text-dark text-center mb-2"
                                    href="#product-specifications" data-toggle="list"><img
                                        className="product-options-icon ml-2"
                                        src='./img/product-specifications.png' />مشخصات</a>
                                <a class="list-group-item list-group-item-action  text-dark text-center"
                                    href="#product-tags" data-toggle="list"><img
                                        className="product-options-icon pro-tag-icon ml-2"
                                        src='./img/product-tag.png' />برچسب ها</a>
                            </div>
                        </div>
                        <div className="col-md product-options-left mx-3 py-3">
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
                                    <span>مشخصات:</span>
                                    <div id="accordion">
                                        <div class="card">
                                            <div class="card-header">
                                                <a class="card-link" data-toggle="collapse" href="#collapseOne">
                                                    <i class="fa fa-circle-o ml-1"></i>
                                                    مشخصات کلی
                                                </a>
                                            </div>
                                            <div id="collapseOne" class="collapse show">
                                                <div class="card-body">
                                                    <table class="table ">
                                                        <tr cellspacing="1">
                                                            <th className=" w-25">ابعاد</th>
                                                            <td className="w-75">185</td>
                                                        </tr>
                                                        <tr>
                                                            <th>توضیحات</th>
                                                            <td>سایز نانو</td>
                                                        </tr>
                                                        <tr>
                                                            <th>وزن</th>
                                                            <td>266 گرم</td>
                                                        </tr>
                                                        <tr>
                                                            <th>ساختار بدنه</th>
                                                            <td>فلز شیشه</td>
                                                        </tr>
                                                        <tr>
                                                            <th>ویژگی خاص</th>
                                                            <td>مناسب عکاسی</td>
                                                        </tr>

                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header">
                                                <a class="collapsed card-link" data-toggle="collapse"
                                                    href="#collapseTwo">
                                                    <i class="fa fa-circle-o ml-1"></i>
                                                    پردازنده
                                                </a>
                                            </div>
                                            <div id="collapseTwo" class="collapse">
                                                <div class="card-body">
                                                    لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
                                                    بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header">
                                                <a class="collapsed card-link" data-toggle="collapse"
                                                    href="#collapseThree">
                                                    <i class="fa fa-circle-o ml-1"></i>
                                                    حافظه
                                                </a>
                                            </div>
                                            <div id="collapseThree" class="collapse">
                                                <div class="card-body">
                                                    لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
                                                    بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header">
                                                <a class="collapsed card-link" data-toggle="collapse"
                                                    href="#collapseFour">
                                                    <i class="fa fa-circle-o ml-1"></i>
                                                    صفحه نمایش
                                                </a>
                                            </div>
                                            <div id="collapseFour" class="collapse">
                                                <div class="card-body">
                                                    لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
                                                    بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                                                </div>
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

                <div className=' row w-100 p-0 my-4  align-items-center m-0 p-0'>
                    <div className="d-flex align-items-center main-heading mb-2">
                        <img className=" new-heading ml-2" src='./img/new-heading.png' />
                        <h2 className="text-right m-0">محصولات مشابه</h2>
                    </div>
                    <div className="col-12 similar-products-section d-flex justify-content-center align-items-center p-4">
                        <div id="multi-item-example"
                            className="carousel slide carousel-multi-item d-flex align-items-center"
                            data-ride="carousel">

                            <a className="btn-floating similar-products-btn " href="#multi-item-example" data-slide="next"><i
                                    className="fa fa-chevron-right "></i></a>

<div className="carousel-inner d-none d-sm-block " role="listbox">
                            <div className="carousel-item active ">
                                <div className="row justify-content-around">
                                    <div className="col-md-3 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/glax.png' />
                                    </div>

                                    <div className="col-md-3 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/iphon.png' />
                                    </div>

                                    <div className="col-md-3 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/airpod.png' />
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="row justify-content-around">
                                        <div className="col-md-3 d-flex align-items-center text-center border border-white p-2">
                                            <img className="discounts-img w-100" src='./img/glax.png' />
                                        </div>

                                        <div className="col-md-3 d-flex align-items-center text-center border border-white p-2">
                                            <img className="discounts-img w-100" src='./img/iphon.png' />
                                        </div>

                                        <div className="col-md-3 d-flex align-items-center text-center border border-white p-2">
                                            <img className="discounts-img w-100" src='./img/airpod.png' />
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                        <div className="carousel-inner d-block d-sm-none " role="listbox">
                            <div className="carousel-item active ">
                            <div className="row justify-content-center">
                                    <div className="col-5 d-flex align-items-center text-center border border-white p-2 m-1">
                                        <img className="discounts-img w-100" src='./img/glax.png' />
                                    </div>

                                    <div className="col-5 d-flex align-items-center text-center border border-white p-2 m-1">
                                        <img className="discounts-img w-100" src='./img/iphon.png' />
                                    </div>

                                    
                                </div>
                            </div>

                            <div className="carousel-item ">
                            <div className="row justify-content-center">
                                    <div className="col-5 d-flex align-items-center text-center border border-white p-2 m-1">
                                        <img className="discounts-img w-100" src='./img/glax.png' />
                                    </div>
                                    <div className="col-5 d-flex align-items-center text-center border border-white p-2 m-1">
                                        <img className="discounts-img w-100" src='./img/iphon.png' />
                                    </div>  
                                </div>
                            </div>  
                        </div>
                            <a className="btn-floating similar-products-btn " href="#multi-item-example" data-slide="prev"><i
                                    className="fa fa-chevron-left"></i></a>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</Fragment>
);
}
export default SingleProduct;