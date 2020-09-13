import React, { Fragment, useState, useEffect } from 'react';
import {getsliderimgs} from '../../services/sliderimgService';
import { useSelector, useDispatch } from 'react-redux';
import Flickity from 'react-flickity-component';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Countdown from 'react-countdown';

const Home = () => {
const dispatch = useDispatch();
const sliderimgs = useSelector((state) => state.slider);

const flickityOptions = {
  
    wrapAround:true
}
var settings = {
    className: "slider variable-width",
    arrows: true,
    dots: true,
    infinite: false,
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true

  };



const Completionist = () => <span className="text-white time">زمان مزایده به پایان رسید!</span>;
 

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
  
    return <Completionist />;
  } else {
    
    return <span className="text-white time text-center"> ثانیه{seconds} :دقیقه{minutes} :ساعت{hours} :روز{days}
        
        </span>;
  }
};
return (
<Fragment>
    <div className='container p-0 my-4'>
        <div className="row p-0 m-0 special-offer-section">
            <div className="col-12 ">
                <div className="d-flex align-items-center main-heading special-offer-heading mb-2">
                <img className="ml-2" src='./img/special-offer-header.png' />
                <h2 className="text-right m-0">پیشنهاد ویژه</h2>
                </div>
               

                <Flickity
                    className={'main-carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate={true} // default false
                    static
                    percentPosition= {true}
                >
                    {sliderimgs.map((img) => (
                                <div class="carousel-cell d-flex align-items-center justify-content-center"> 
                                        <img className="" src={img.imageUrl} />
                                        </div>
                                    ))}
                </Flickity>

      {/* <Slider {...settings}>
      {sliderimgs.map((img) => (
                 <div >
  <img className="slider-img" src={img.imageUrl} />
                       
                 </div>
                      
                    ))}
      </Slider> */}

            </div>
        </div>

        <div className=' row w-100 p-0 my-4  align-items-center m-0 p-0'>
        <div className="d-flex align-items-center main-heading mb-2">
                <img className="ml-2" src='./img/auction-heading.png' />
                <h2 className="text-right m-0">برترین مزایده</h2>
                </div>
               

            <div className="col-12 top-auction">
         
        <div className="row">
        <div className='col-md-4 m-0 p-3'>
                <div className='auction-img text-center'>
                <img className="" src='./img/mosayedeh-sample.png' />
                </div>
            </div>
            <div className='col-md-7 m-0 p-0 d-flex flex-column justify-content-center'>
                {' '}
                <div className='row w-100 h-100 align-items-center m-0'>
                    <div className='col-12   p-2'>
                        <div className=' p-1 text-center'>
                        <Countdown
    date={Date.now() + 7000}
    renderer={renderer}
  />
                        </div>
                    </div>
                    <div className='col-6  p-2'>
                        <div className=' p-1'>
                          <p className="text-white text-right">قیمت عضویت: 10000</p>
                          <p className="text-white text-right">قیمت هر چکش: 23000</p>
                          <p className="text-white text-right">قیمت شروع مزایده: 5000 </p>
                        </div>
                    </div>
                
                   
                 </div>
                </div>
        </div>
    
            </div>
        </div>

        <div className=' row w-100 p-0 my-4  align-items-center m-0 p-0'>
            <div className="d-flex align-items-center main-heading mb-2">
                <img className="ml-2" src='./img/discounts-heading.png' />
                <h2 className="text-right m-0">تخفیف ها</h2>
            </div>
            <div className="col-12 discounts-section d-flex align-items-center p-4">
            <div id="multi-item-example"
                        className="carousel slide carousel-multi-item d-flex align-items-center" data-ride="carousel">

                        <a className="btn-floating" href="#multi-item-example" data-slide="next"><i
                                className="fa fa-chevron-right text-white"></i></a>

                        <div className="carousel-inner" role="listbox">

                            <div className="carousel-item active">
                                <div className="row justify-content-around">
                                    <div className="col-md-2 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/glax.png' />
                                    </div>

                                    <div className="col-md-2 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/iphon.png' />
                                    </div>

                                    <div className="col-md-2 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/airpod.png' />
                                    </div>
                                    <div className="col-md-2 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/glax.png' />
                                    </div>
                                </div>


                            </div>



                            <div className="carousel-item">
                            <div className="row justify-content-around">
                                    <div className="col-md-2 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/glax.png' />
                                    </div>

                                    <div className="col-md-2 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/iphon.png' />
                                    </div>

                                    <div className="col-md-2 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/airpod.png' />
                                    </div>
                                    <div className="col-md-2 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/glax.png' />
                                    </div>
                                </div>
                            </div>
                            


                        </div>
                        <a className="btn-floating text-white" href="#multi-item-example" data-slide="prev"><i
                                className="fa fa-chevron-left"></i></a>

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
                                className="fa fa-chevron-right text-dark"></i></a>

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
                                className="fa fa-chevron-left text-dark"></i></a>

                    </div>


                </div>
            </div>

           
        </div>
        <div className=' row w-100 p-0 my-4  align-items-center m-0 p-0'>
            <div className="d-flex align-items-center main-heading mb-2">
                <img className=" new-heading ml-2" src='./img/new-heading.png' />
                <h2 className="text-right m-0">جدیدترین ها</h2>
            </div>
            <div className="col-12 discounts-section d-flex align-items-center p-4">
            <div id="multi-item-example"
                        className="carousel slide carousel-multi-item d-flex align-items-center" data-ride="carousel">

                        <a className="btn-floating" href="#multi-item-example" data-slide="next"><i
                                className="fa fa-chevron-right text-white"></i></a>

                        <div className="carousel-inner" role="listbox">

                            <div className="carousel-item active">
                            <div className="row justify-content-around">
                                    <div className="col-md-2 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/glax.png' />
                                    </div>

                                    <div className="col-md-2 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/iphon.png' />
                                    </div>

                                    <div className="col-md-2 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/airpod.png' />
                                    </div>
                                    <div className="col-md-2 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/glax.png' />
                                    </div>
                                </div>
                            </div>



                            <div className="carousel-item">
                            <div className="row justify-content-around">
                                    <div className="col-md-2 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/glax.png' />
                                    </div>

                                    <div className="col-md-2 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/iphon.png' />
                                    </div>

                                    <div className="col-md-2 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/airpod.png' />
                                    </div>
                                    <div className="col-md-2 d-flex align-items-center text-center border border-white p-2">
                                        <img className="discounts-img w-100" src='./img/glax.png' />
                                    </div>
                                </div>


                            </div>


                        </div>
                        <a className="btn-floating text-white" href="#multi-item-example" data-slide="prev"><i
                                className="fa fa-chevron-left"></i></a>

                    </div>

            </div>
        </div>


    </div>
</Fragment>
);
};

export default Home;