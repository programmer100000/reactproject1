import React, { Fragment, useState, useEffect } from 'react';
import {getsliderimgs} from '../../services/sliderimgService';
import { useSelector, useDispatch } from 'react-redux';
import Flickity from 'react-flickity-component';

const Home = () => {
const dispatch = useDispatch();
const sliderimgs = useSelector((state) => state.slider);

const flickityOptions = {
   
}
return (
<Fragment>
    <div className='container p-0 my-4'>
        <div className="row p-0 m-0">
            <div className="col-12">
                <h2 className="text-right mb-4">پیشنهاد ویژه</h2>

                <Flickity
      className={'main-carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static
      wrapAround={true} // default false
    >
      {sliderimgs.map((img) => (
                   <div class="carousel-cell"> 
                        <img className="" src={img.imageUrl} />
                        </div>
                    ))}
    </Flickity>


                {/* <div className="main-carousel py-4"
                    data-flickity='{ "cellAlign": "center", "contain": true,"wrapAround": true,"imagesLoaded": true }'>
                    {sliderimgs.map((img) => (
                    <div className=" carousel-cell " key={img.id}>
                        <img className="" src={img.imageUrl} />
                    </div>
                    ))}

                </div> */}
            </div>
        </div>


        <div className=' row w-100 p-0 my-4 discounts-section align-items-center m-0 p-0'>
            <div className='col-md-3 '>
                <div className='discounts-header text-center'>
                    تخفیف ها
                </div>
            </div>
            <div className='col-md-9'>
                {' '}
                <div className='row w-100 align-items-center m-0'>
                    <div className='col-md-2 discounts-item p-2'>
                        <div className='inner-discounts-item p-1'>
                            {' '}
                            <p className='m-0 text-right'>
                                به متنی آزمایشی و بی‌معنی در صنعت چاپ،
                                صفحه‌آرایی و طراحی گرافیک گفته می‌شود
                            </p>
                        </div>
                    </div>
                    <div className='col-md-2 discounts-item p-2'>
                        <div className='inner-discounts-item p-1'>
                            {' '}
                            <p className='m-0'>
                                به متنی آزمایشی و بی‌معنی در صنعت چاپ،
                                صفحه‌آرایی و طراحی گرافیک گفته می‌شود
                            </p>
                        </div>
                    </div>
                    <div className='col-md-2 discounts-item p-2'>
                        <div className='inner-discounts-item p-1'>
                            {' '}
                            <p className='m-0 text-right'>
                                به متنی آزمایشی و بی‌معنی در صنعت چاپ،
                                صفحه‌آرایی و طراحی گرافیک گفته می‌شود
                            </p>
                        </div>
                    </div>
                    <div className='col-md-2 discounts-item p-2'>
                        <div className='inner-discounts-item p-1'>
                            {' '}
                            <p className='m-0 text-right'>
                                به متنی آزمایشی و بی‌معنی در صنعت چاپ،
                                صفحه‌آرایی و طراحی گرافیک گفته می‌شود
                            </p>
                        </div>
                    </div>
                    <div className='col-md-2 discounts-item p-2'>
                        <div className='inner-discounts-item p-1'>
                            {' '}
                            <p className='m-0 text-right'>
                                به متنی آزمایشی و بی‌معنی در صنعت چاپ،
                                صفحه‌آرایی و طراحی گرافیک گفته می‌شود
                            </p>
                        </div>
                    </div>
                    <div className='col-md-2 discounts-item p-2'>
                        <div className='inner-discounts-item p-1'>
                            {' '}
                            <p className='m-0 text-right'>
                                به متنی آزمایشی و بی‌معنی در صنعت چاپ،
                                صفحه‌آرایی و طراحی گرافیک گفته می‌شود
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='categories-section my-4'>
            <div className="row p-0 m-0 categories py-3 my-4">
                <div className="col-md-2  d-flex align-items-center text-center">
                    <span className=' mx-0 my-auto  '>دسته بندی ها</span>
                </div>
                <div className="col-md-10">

                    <div id="multi-item-example"
                        className="carousel slide carousel-multi-item d-flex align-items-center" data-ride="carousel">

                        <a className="btn-floating" href="#multi-item-example" data-slide="next"><i
                                className="fa fa-chevron-right"></i></a>

                        <div className="carousel-inner" role="listbox">

                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-2 text-center">
                                        <img className="category-img" src='./img/hrdphon.png' />
                                    </div>

                                    <div className="col-md-2 text-center">
                                        <img className="category-img" src='./img/hedphon.png' />
                                    </div>

                                    <div className="col-md-2 text-center">
                                        <img className="category-img" src='./img/goshi.png' />
                                    </div>
                                    <div className="col-md-2 text-center">
                                        <img className="category-img" src='./img/labtab.png' />
                                    </div>
                                    <div className="col-md-2 text-center">
                                        <img className="category-img" src='./img/xbox.png' />
                                    </div>
                                    <div className="col-md-2 text-center">
                                        <img className="category-img" src='./img/tv.png' />
                                    </div>
                                </div>


                            </div>



                            <div className="carousel-item">

                                <div className="row">
                                    <div className="col-md-2 text-center">
                                        <img className="category-img" src='./img/camera.png' />
                                    </div>

                                    <div className="col-md-2 text-center">
                                        <img className="category-img" src='./img/camera.png' />
                                    </div>

                                    <div className="col-md-2 text-center">
                                        <img className="category-img" src='./img/camera.png' />
                                    </div>
                                    <div className="col-md-2 text-center">
                                        <img className="category-img" src='./img/camera.png' />
                                    </div>
                                    <div className="col-md-2 text-center">
                                        <img className="category-img" src='./img/camera.png' />
                                    </div>
                                    <div className="col-md-2 text-center">
                                        <img className="category-img" src='./img/camera.png' />
                                    </div>
                                </div>

                            </div>


                        </div>
                        <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i
                                className="fa fa-chevron-left"></i></a>

                    </div>


                </div>
            </div>

            <div className='inner-categories-section'>
                <div className='row w-100 p-0 m-0 '>
                    <div className='col-md-6 categories-item p-2'>
                        <div className='row w-100 p-0 m-0 align-items-center'>
                            <div className='col-2 text-center'>
                                موبایل
                            </div>
                            <div className='col-10'>
                                <div className='inner-categories-item'>
                                    <p className='m-0 p-1 text-right'>
                                        به متنی آزمایشی و بی‌معنی در
                                        صنعت چاپ، صفحه‌آرایی و طراحی
                                        گرافیک گفته می‌شود. طراح گرافیک
                                        از این متن به عنوان عنصری از
                                        ترکیب بندی برای پر کردن صفحه و
                                        ارایه اولیه شکل ظاهری و کلی طرح
                                        سفارش گرفته شده استفاده می نماید
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 categories-item p-2'>
                        <div className='row w-100 p-0 m-0 align-items-center'>
                            <div className='col-2 text-center'>
                                کتاب
                            </div>
                            <div className='col-10'>
                                <div className='inner-categories-item'>
                                    <p className='m-0 p-1 text-right'>
                                        به متنی آزمایشی و بی‌معنی در
                                        صنعت چاپ، صفحه‌آرایی و طراحی
                                        گرافیک گفته می‌شود. طراح گرافیک
                                        از این متن به عنوان عنصری از
                                        ترکیب بندی برای پر کردن صفحه و
                                        ارایه اولیه شکل ظاهری و کلی طرح
                                        سفارش گرفته شده استفاده می نماید
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row w-100 p-0 m-0 '>
                    <div className='col-md-6 categories-item p-2'>
                        <div className='row w-100 p-0 m-0 align-items-center'>
                            <div className='col-2 text-center'>
                                لبتاب
                            </div>
                            <div className='col-10'>
                                <div className='inner-categories-item'>
                                    <p className='m-0 p-1 text-right'>
                                        به متنی آزمایشی و بی‌معنی در
                                        صنعت چاپ، صفحه‌آرایی و طراحی
                                        گرافیک گفته می‌شود. طراح گرافیک
                                        از این متن به عنوان عنصری از
                                        ترکیب بندی برای پر کردن صفحه و
                                        ارایه اولیه شکل ظاهری و کلی طرح
                                        سفارش گرفته شده استفاده می نماید
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 categories-item p-2'>
                        <div className='row w-100 p-0 m-0 align-items-center'>
                            <div className='col-2 text-center'>
                                ساعت
                            </div>
                            <div className='col-10'>
                                <div className='inner-categories-item'>
                                    <p className='m-0 p-1 text-right'>
                                        به متنی آزمایشی و بی‌معنی در
                                        صنعت چاپ، صفحه‌آرایی و طراحی
                                        گرافیک گفته می‌شود. طراح گرافیک
                                        از این متن به عنوان عنصری از
                                        ترکیب بندی برای پر کردن صفحه و
                                        ارایه اولیه شکل ظاهری و کلی طرح
                                        سفارش گرفته شده استفاده می نماید
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row w-100 p-0 m-0 '>
                    <div className='col-md-6 categories-item p-2'>
                        <div className='row w-100 p-0 m-0 align-items-center'>
                            <div className='col-2 text-center'>
                                هدفون
                            </div>
                            <div className='col-10'>
                                <div className='inner-categories-item'>
                                    <p className='m-0 p-1 text-right'>
                                        به متنی آزمایشی و بی‌معنی در
                                        صنعت چاپ، صفحه‌آرایی و طراحی
                                        گرافیک گفته می‌شود. طراح گرافیک
                                        از این متن به عنوان عنصری از
                                        ترکیب بندی برای پر کردن صفحه و
                                        ارایه اولیه شکل ظاهری و کلی طرح
                                        سفارش گرفته شده استفاده می نماید
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 categories-item p-2'>
                        <div className='row w-100 p-0 m-0 align-items-center'>
                            <div className='col-2 text-center'>
                                لباس
                            </div>
                            <div className='col-10'>
                                <div className='inner-categories-item'>
                                    <p className='m-0 p-1 text-right'>
                                        به متنی آزمایشی و بی‌معنی در
                                        صنعت چاپ، صفحه‌آرایی و طراحی
                                        گرافیک گفته می‌شود. طراح گرافیک
                                        از این متن به عنوان عنصری از
                                        ترکیب بندی برای پر کردن صفحه و
                                        ارایه اولیه شکل ظاهری و کلی طرح
                                        سفارش گرفته شده استفاده می نماید
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row w-100 p-0 m-0 '>
                    <div className='col-md-6 categories-item p-2'>
                        <div className='row w-100 p-0 m-0 align-items-center'>
                            <div className='col-2 text-center'>
                                بازی
                            </div>
                            <div className='col-10'>
                                <div className='inner-categories-item'>
                                    <p className='m-0 p-1 text-right'>
                                        به متنی آزمایشی و بی‌معنی در
                                        صنعت چاپ، صفحه‌آرایی و طراحی
                                        گرافیک گفته می‌شود. طراح گرافیک
                                        از این متن به عنوان عنصری از
                                        ترکیب بندی برای پر کردن صفحه و
                                        ارایه اولیه شکل ظاهری و کلی طرح
                                        سفارش گرفته شده استفاده می نماید
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 categories-item p-2'>
                        <div className='row w-100 p-0 m-0 align-items-center'>
                            <div className='col-2 text-center'>
                                آرایشی بهداشتی
                            </div>
                            <div className='col-10'>
                                <div className='inner-categories-item'>
                                    <p className=' m-0 p-1 text-right'>
                                        به متنی آزمایشی و بی‌معنی در
                                        صنعت چاپ، صفحه‌آرایی و طراحی
                                        گرافیک گفته می‌شود. طراح گرافیک
                                        از این متن به عنوان عنصری از
                                        ترکیب بندی برای پر کردن صفحه و
                                        ارایه اولیه شکل ظاهری و کلی طرح
                                        سفارش گرفته شده استفاده می نماید
                                    </p>
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

export default Home;