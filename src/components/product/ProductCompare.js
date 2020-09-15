import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const ProductCompare = () => {

return (
<Fragment>
    <div className="container">
        <div className="row">
            <div className="col-md-12 py-5">
                <h1 className="mb-3 py-2 heading product-compare-header text-right">مقایسه</h1>
                <div className="row">
                    <div className="col-md-12">
                    <table class="table p-4 compare-imgs-table compare-table">
                                                <tr cellspacing="1">
                                                    <td className="w-25"> </td>
                                                    <td className="w-25"> <img className=" product-compare-img mb-2 h-100 w-100" src='./img/iphon.png' alt="" /></td>
                                                    <td className="w-25"><img className=" product-compare-img mb-2  h-100 w-100" src='./img/iphon.png' alt="" /></td>
                                                    <td className="w-25"> <div
className="h-100  d-flex flex-column align-items-center justify-content-around">
                        <img className=" product-compare-img mb-2 w-100" src='./img/add-product-compare.png' alt="" />

                        <button type="button " class="btn btn-outline-primary compare-product-btn">افزودن
                            دستگاه</button>
                    </div></td>
                                                </tr>
                                                </table>
                    </div>
                    {/* <div
                        className="col-md-3 my-2 mx-3 p-4 product-compare-item d-flex flex-column align-items-center justify-content-around">
                        <img className=" product-compare-img mb-2 h-100 w-100" src='./img/iphon.png' alt="" />
                    </div>
                    <div
                        className="col-md-3 my-2 mx-3 p-4 product-compare-item d-flex flex-column align-items-center justify-content-around">
                        <img className=" product-compare-img mb-2  h-100 w-100" src='./img/iphon.png' alt="" />
                    </div>
                    <div
                        className="col-md-3 my-2 mx-3 p-4 product-compare-item d-flex flex-column align-items-center justify-content-around px-4 py-2">
                        <img className=" product-compare-img mb-2 " src='./img/add-product-compare.png' alt="" />

                        <button type="button " class="btn btn-outline-primary compare-product-btn">افزودن
                            دستگاه</button>
                    </div> */}
                </div>
                <div className="row py-3">
                    <div className="col-lg-12">
                        <div class="tab-pane fade show text-right" id="product-specifications" role="tabpanel"
                            aria-labelledby="list-profile-list">

                            <div className="compare-product-accordion" id="accordion">
                                <div class="card">
                                    <div class="card-header">
                                        <a class="card-link" data-toggle="collapse" href="#collapseOne">
                                            <i class="fa fa-circle-o ml-1"></i>
                                            مشخصات کلی
                                        </a>
                                    </div>
                                    <div id="collapseOne" class="collapse show">
                                        <div class="card-body">
                                            <table class="table compare-table ">
                                                <tr cellspacing="1">
                                                    <th className=" w-25">ابعاد</th>
                                                    <td className="w-25">185</td>
                                                    <td className="w-25">185</td>
                                                    <td className="w-25">185</td>
                                                </tr>
                                                <tr>
                                                    <th>توضیحات</th>
                                                    <td>سایز نانو</td>
                                                    <td>سایز نانو</td>
                                                    <td>سایز نانو</td>
                                                </tr>
                                                <tr>
                                                    <th>وزن</th>
                                                    <td>266 گرم</td>
                                                    <td>266 گرم</td>
                                                    <td>266 گرم</td>
                                                </tr>
                                                <tr>
                                                    <th>ساختار بدنه</th>
                                                    <td>فلز شیشه</td>
                                                    <td>فلز شیشه</td>
                                                    <td>فلز شیشه</td>
                                                </tr>
                                                <tr>
                                                    <th>ویژگی خاص</th>
                                                    <td>مناسب عکاسی</td>
                                                    <td>مناسب عکاسی</td>
                                                    <td>مناسب عکاسی</td>
                                                </tr>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                                            <i class="fa fa-circle-o ml-1"></i>
                                            پردازنده
                                        </a>
                                    </div>
                                    <div id="collapseTwo" class="collapse">
                                        <div class="card-body">
                                            <table class="table compare-table ">
                                            <tr cellspacing="1">
                                                    <th className=" ">ابعاد</th>
                                                    <td className="">185</td>
                                                    <td className="">185</td>
                                                    <td className="">185</td>
                                                </tr>
                                                <tr>
                                                    <th>توضیحات</th>
                                                    <td>سایز نانو</td>
                                                    <td>سایز نانو</td>
                                                    <td>سایز نانو</td>
                                                </tr>
                                                <tr>
                                                    <th>وزن</th>
                                                    <td>266 گرم</td>
                                                    <td>266 گرم</td>
                                                    <td>266 گرم</td>
                                                </tr>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                                            <i class="fa fa-circle-o ml-1"></i>
                                            حافظه
                                        </a>
                                    </div>
                                    <div id="collapseThree" class="collapse">
                                        <div class="card-body">
                                            <table class="table compare-table">
                                            <tr cellspacing="1">
                                                    <th className=" ">ابعاد</th>
                                                    <td className="">185</td>
                                                    <td className="">185</td>
                                                    <td className="">185</td>
                                                </tr>
                                                <tr>
                                                    <th>توضیحات</th>
                                                    <td>سایز نانو</td>
                                                    <td>سایز نانو</td>
                                                    <td>سایز نانو</td>
                                                </tr>
                                                <tr>
                                                    <th>وزن</th>
                                                    <td>266 گرم</td>
                                                    <td>266 گرم</td>
                                                    <td>266 گرم</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a class="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                                            <i class="fa fa-circle-o ml-1"></i>
                                            صفحه نمایش
                                        </a>
                                    </div>
                                    <div id="collapseFour" class="collapse">
                                        <div class="card-body">
                                            <table class="table compare-table ">
                                            <tr cellspacing="1">
                                                    <th className=" ">ابعاد</th>
                                                    <td className="">185</td>
                                                    <td className="">185</td>
                                                    <td className="">185</td>
                                                </tr>
                                                <tr>
                                                    <th>توضیحات</th>
                                                    <td>سایز نانو</td>
                                                    <td>سایز نانو</td>
                                                    <td>سایز نانو</td>
                                                </tr>
                                                <tr>
                                                    <th>وزن</th>
                                                    <td>266 گرم</td>
                                                    <td>266 گرم</td>
                                                    <td>266 گرم</td>
                                                </tr>
                                            </table>
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
};

export default ProductCompare;