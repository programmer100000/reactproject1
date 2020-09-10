import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../actions/singleproduct';
import { isEmpty } from 'lodash';

// const SingleProduct = ({ match }) => {
//     const dispatch = useDispatch();
//     useEffect(() => {
//             dispatch(getSingleProduct(match.params.id));
//     }, []);
//     const product = useSelector((state) => state.singleproduct);
//     return(
//         <Fragment>
//              {!isEmpty(product) ? (
//        <div className="text-right">
//        <img
//            src={product.imageUrl}
//            alt=""
//            />
//       <span>
//        نام محصول : {product.title}
//       </span>
//        <span>توضیحات : {product.description} </span>
//        <button  className="btn btn-primary">افزودن به سبد خرید</button>
// </div>   
//    ) : (
//        <div>
//                 <p>
//                       product not found!
//                    </p>  
//                </div>
//    )}
//             </Fragment>
//     );
// };

// export default SingleProduct;

const SingleProduct=()=>{
    return(
        <Fragment >
<div className="container-fluid single-product">

            <div className="container ">

           
<div className="row p-4 ">
<div className="col-lg-8 product-attributes">
<h1 className="text-right mb-5">
    iphon 11 pro max
</h1>
<div className="d-flex  py-3 pl-5  mb-4 product-attributes-top ">
    <div className="ml-5">
        <span className="ml-1">برند:</span>
        <span>iphon</span>
    </div>
    <div>
        <span className="ml-1">دسته بندی:</span>
        <span>گوشی موبایل</span>
    </div>
</div>
<div className="text-right d-flex mb-4">
    <span>
        مشخصات:
    </span>
    <ul className="product-attributes-list pr-5" >
        <li>حافظه داخلی: 256 گیگابایت</li>
        <li>شبکه ارتباطی: 2G,3G,4G</li>
        <li>سیستم عامل: ios</li>
    </ul>
</div>

<div className="product-colors py-2 px-4 text-right mb-3" >
    <span >رنگ بندی: </span>
    <span className="mr-4"><i class="fa fa-circle  ml-1"></i>طلائی</span>
    <span className="mr-3"><i class="fa fa-circle ml-1"></i>مشکی</span>
    <span className="mr-3"><i class="fa fa-circle text-black ml-1"></i>نقره ای</span>
</div>
<div className="description text-right d-flex mb-3">
    <span className="ml-2">توضیحات:</span>
    <span>ایفون 11 پرومکس با حافظه 256 بهترین انتخاب برای شماست.</span>
</div>
<div className="product-price  p-3 mb-3">

<div className="main-price d-flex align-items-center mb-2 ">
    <span className="text-right" >قیمت اصلی:</span>
    <span className="py-2 px-5  text-center">44500000 تومان</span>
</div>
<div className="product-final-price d-flex align-items-center">
    <span className="text-right" >تعیین قیمت نهایی:</span>
    <div className="final-price py-2 px-5  text-right">
    <a href="#" className="text-dark"><i class="fa fa-circle text-black ml-1"></i>نوع گارانتی</a>
    <a href="#" className="mr-3 text-dark"><i class="fa fa-circle text-black ml-1"></i>تعیین رنگ</a>
    </div>
   
</div>
</div>
    </div>
    <div className="col-lg-4 py-5">
<div className=" product-img-section p-2">
<span className="text-left border border-white product-rating p-1">
</span>

<div id="multi-item-example"
                        className="carousel slide carousel-multi-item d-flex align-items-center" data-ride="carousel">

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
    <img className="product-link m-1" src='./img/pro-diagram.png' />
    <img className="product-link m-1" src='./img/pro-share.png' />
    <img className="product-link m-1" src='./img/pro-like.png' />
</div>
    </div>

    <div className="col-12 product-options p-3">
<div className="row px-3">
    <div className="col-md-2 product-options-right mx-3 p-0 py-3">
    <div class="list-group  w-100 text-right " id="product-list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action text-dark active mb-2 text-center" id="list-questions-list" data-toggle="list" href="#product-questions" role="tab" aria-controls="profile"><img className="product-options-icon ml-2" src='./img/product-questions.png' />پرسش و پاسخ</a>
                        <a class="list-group-item list-group-item-action  text-dark mb-2 text-center" id="list-home-list" data-toggle="list" href="#product-review" role="tab" aria-controls="home"><img className="product-options-icon ml-2" src='./img/product-review.png' />نقد و بررسی</a>
                    <a class="list-group-item list-group-item-action  text-dark mb-2 text-center"  href="#product-comments" data-toggle="list"><img className="product-options-icon ml-2" src='./img/product-comments.png' />نظر کاربری</a>
                    <a class="list-group-item list-group-item-action  text-dark text-center mb-2"  href="#product-specifications" data-toggle="list"><img className="product-options-icon ml-2" src='./img/product-specifications.png' />مشخصات</a>
                    <a class="list-group-item list-group-item-action  text-dark text-center"  href="#product-tags" data-toggle="list"><img className="product-options-icon pro-tag-icon ml-2" src='./img/product-tag.png' />برچسب ها</a>
                    </div>
    </div>
    <div className="col-md product-options-left mx-3 py-3">
    <div class="tab-content user-panel-tab-content pt-0" id="nav-tabContent">
            <div class="tab-pane fade show active text-right" id="product-questions" role="tabpanel" aria-labelledby="list-questions-list">
              <form action="" className="product-questions-form">
              <div class='row p-3'>

<div class=' form-group col-md-2 col-sm-12 p-0 pt-2 text-center d-flex align-items-start justify-content-center '>
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
            
            <div class="tab-pane fade text-right" id="product-review" role="tabpanel" aria-labelledby="list-profile-list">
              
ih ih ih
            </div>
            <div class="tab-pane fade tect-right" id="product-comments" role="tabpanel" aria-labelledby="list-profile-list">
            <form action="" className="product-questions-form">
              <div class='row p-3'>

<div class=' form-group col-md-2 col-sm-12 p-0 pt-2 text-center d-flex align-items-start justify-content-center '>
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
<img className="product-link m-1 ml-3" src='./img/pro-comment-dislike.png' />
<img className="product-link m-1" src='./img/pro-comment-like.png' />
</span>


</div>
<div className="d-flex p-2 pro-comment justify-content-between ">
<span>
    <span className="ml-3 product-question-name">کاربر مهمان:</span>
<span>چون زیاد باهاش کار میکنی</span>
    </span>

<span className="d-flex">
<img className="product-link m-1 ml-3" src='./img/pro-comment-dislike.png' />
<img className="product-link m-1" src='./img/pro-comment-like.png' />
</span>

</div>
<div className="d-flex p-2  pro-comment justify-content-between">
<span>
    <span className="ml-3 product-question-name">کاربر مهمان:</span>
<span>چرا گوشی هنگ میکنه؟</span>
    </span>

<span className="d-flex">
<img className="product-link m-1 ml-3" src='./img/pro-comment-dislike.png' />
<img className="product-link m-1" src='./img/pro-comment-like.png' />
</span>

</div>
</div>
</div>
              </form>
            </div>
                          <div class="tab-pane fade text-right" id="product-specifications" role="tabpanel" aria-labelledby="list-profile-list">
              
              ih ih ih
                          </div>
                          <div class="tab-pane fade text-right" id="product-tags" role="tabpanel" aria-labelledby="list-profile-list">
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
</div>
        </Fragment>
    );
}
export default SingleProduct;