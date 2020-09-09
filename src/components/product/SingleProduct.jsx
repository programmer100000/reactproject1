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
<div className="product-colors text-right mb-3" >
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
                                <div className="row">
                                <div className="col-md-10 text-center">
                                        <img className="product-img" src='./img/iphon.png' />
                                    </div>
                                </div>


                            </div>



                            <div className="carousel-item">

                                <div className="row">
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
<div className="d-flex justify-content-end">
    <img className="product-link m-1" src='./img/pro-diagram.png' />
    <img className="product-link m-1" src='./img/pro-share.png' />
    <img className="product-link m-1" src='./img/pro-like.png' />
</div>
    </div>

    <div className="col-12 product-options">
<div className="row">
    <div className="col-md-3">
    <div class="list-group  w-100 text-right " id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action text-white active" id="list-profile-list" data-toggle="list" href="#user-fav" role="tab" aria-controls="profile">علاقه مندی ها</a>
                        <a class="list-group-item list-group-item-action  text-white" id="list-home-list" data-toggle="list" href="#user-info" role="tab" aria-controls="home">اطلاعات</a>
                    <a class="list-group-item list-group-item-action  text-white"  href="{{ route('logout') }}">خروج</a>
                    </div>
    </div>
    <div className="col-md-9">
   
                      
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