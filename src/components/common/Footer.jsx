import React, { Fragment } from 'react';


const Footer = () => {
    return (
        <Fragment>
            <div className="row top-footer-bg p-0 m-0">
                <div className="container top-footer">
                    <div className="row w-100 m-0 px-0 py-2 pt-5 ">
                    <div className="col-md-3 m-0 p-0 text-right to-footer-shopping-guide">
                        <div className="d-flex align-items-end text-right top-footer-heading  mb-3">
                        <img src="./img/shopping-guide.png" alt="" className="shopping-guide-img ml-2" />
                       <span >
                          راهنمای خرید
                       </span>
                        </div>
                        <p className="mr-4 pr-3">
                            نحوه ثبت سفارش
                        </p>
                        <p className="mr-4 pr-3">
                            نحوه ارسال کالا
                        </p>
                        <p className="mr-4 pr-3">
                            شرایط  پرداخت
                        </p>

</div>
<div className="col-md-3 m-0 p-0 text-right to-footer-shopping-guide">
                        <div className="d-flex align-items-end text-right top-footer-heading  mb-3">
                        <img src="./img/customer-services.png" alt="" className="customer-services-img ml-2" />
                       <span >
                          خدمات مشتریان
                       </span>
                        </div>
                       
                        
                       
                     
                        <p className="mr-4 pr-3">
                            گزارش باگ
                        </p>
                        <p className="mr-4 pr-3">
                           حریم خصوصی
                        </p>
                        <p className="mr-4 pr-3">
                            شرایط  استفاده
                        </p>
                        <p className="mr-4 pr-3">
                            رویه بازگشت کالا
                        </p>
                        <p className="mr-4 pr-3">
                            پاسخ به پرسش های متداول
                        </p>

</div>
<div className="col-md-3 m-0 p-0 text-right to-footer-shopping-guide">
                        <div className="d-flex align-items-end text-right top-footer-heading  mb-3">
                        <img src="./img/with-us.png" alt="" className="with-us-img ml-2" />
                       <span >
                          با ما
                       </span>
                        </div>
                         <p className="mr-4 pr-3">
                            درباره ما
                        </p>
                        <p className="mr-4 pr-3">
                           تماس با ما
                        </p>
                       
                        <p className="mr-4 pr-3">
                           فرصت های شغلی
                        </p>

</div>
                    </div>

                </div>
            </div>
            <div className="row bottom-footer-bg p-0 m-0">
            <div className='container bottom-footer'>
                <div className="row w-100 m-0 px-0 py-2 pt-5 ">
                   <div className="col-12 m-0 p-0 d-flex footer-item align-items-center">
                       <img src="./img/phone.png" alt="" className="phone-img ml-2" />
                       <span className="text-white">
                           شماره تلفن: 0910 098 7878
                       </span>
                   </div>
                </div>
                <div className="row w-100 m-0 px-0 py-2 ">
                   <div className="col-12 m-0 p-0 d-flex footer-item align-items-center">
                       <img src="./img/email.png" alt="" className="email-img ml-2" />
                       <span className="text-white">
                           ایمیل: example@gmail.com
                       </span>
                   </div>
                </div>
                <div className="row w-100 m-0 px-0 py-2 ">
                   <div className="col-12 m-0 p-0 d-flex footer-item align-items-center">
                      
                       <span className="text-white">
                          سرعت، دقت، بهترین پیشنهادات را با ما تجربه کنید
                       </span>
                   </div>
                </div>
                <div className="row w-100 m-0 px-0 py-2 ">
                   <div className="col-12 m-0 p-0 d-flex footer-item align-items-center ">
                   <img src="./img/sotialmedia.png" alt="" className="sotialmedia-img mt-2" />
                   
                   </div>
                </div>
            </div>
            </div>
           
        </Fragment>
    );
};

export default Footer;