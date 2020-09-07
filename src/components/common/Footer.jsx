import React, { Fragment } from 'react';


const Footer = () => {
    return (
        <Fragment>
            <div className="row footer-bg p-0 m-0">
            <div className='container total-footer'>
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