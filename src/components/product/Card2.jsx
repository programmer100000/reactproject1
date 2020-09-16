import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Card2 = () => {

    
    const [getCount, setCount] = useState();
    
    var products = useSelector((state) => state.product);
    console.log(products);
    let card = [];
    var arr = [];

    const handleAdd = (product) => {
        
        setCount(1);
        let product1 = [product.id, product.title, product.description, product.imageUrl, 1];
        let flag = false;
        let pros = '';
        if (localStorage.productscard) {
            pros = JSON.parse(localStorage.productscard);

            for (let index = 0; index < pros.length; index++) {
                let element = pros[index];

                if (element[0] == product1[0]) {

                    element[4] += 1;
                    flag = true;
                    setCount(element[4]);
                }

            }
        }
        if (flag) {
            card = pros;
            localStorage.setItem('productscard', JSON.stringify(pros));
        } else {
            card.push(product1);
            localStorage.setItem('productscard', JSON.stringify(card));
        }



    };


   const change=(e,product,i )=>{

       if(e.target.value < 1) {
            e.target.value ='';
            // setCount(""); 
             document.getElementsByClassName("price2")[i].innerHTML=product.price;
        }
        else{
    
            e.value=e.target.value;
                // setCount(e.target.value); 
                var price3 =product.price * e.target.value;
                document.getElementsByClassName("price2")[i].innerHTML=price3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
    }

    const uperCount = (e,product,i ) => {
       
        let input_counter = e.target.parentNode.parentNode.getElementsByClassName('input-counter')[0];
        if(input_counter.value <= 1) input_counter.value = 1;
        input_counter.value = parseInt(input_counter.value) + 1;
        var x = document.getElementsByClassName("price2")[i].innerText;
       var y=product.price;
        var price3 =parseInt(y) * (input_counter.value);
        
        document.getElementsByClassName("price2")[i].innerHTML=price3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       
    };

    const downerCount = (e,product,i) => {
        let input_counter = e.target.parentNode.parentNode.getElementsByClassName('input-counter')[0];
        if(input_counter.value <= 1) input_counter.value = 1;
        else input_counter.value = parseInt(input_counter.value) - 1;
        var x = document.getElementsByClassName("price2")[i].innerText;
        var y=product.price;
         var price3 =parseInt(y) * (input_counter.value);
       
         document.getElementsByClassName("price2")[i].innerHTML=price3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };


const slideUp=(e ,i)=> {
    var mdiv = document.getElementsByClassName('card-products-item')[i];
    mdiv.style.transition = "all .5s ease-in-out";
    mdiv.style.height = "0px";
    
    mdiv.style.borderBottom = "none";
    document.getElementsByClassName('card-products-item')[0].lastElementChild.style.borderBottom = "none";
}

    return (
        <Fragment>

            <div className="container-fluid single-product">
                <div className="container ">

                    <div className="row ">
                        <div className="col-md-12 py-5  ">
                            <div className="d-flex py-2  mb-5 heading text-right">
                                <img className="card-icon ml-2" src="./img/card-icon.png" alt="" />
                                <h1 className="  text-right ">سبد خرید</h1>
                            </div>
                            <div className="row card-products w-100 p-0 m-0 mb-5">

                                {products.map((product,i) => (



                                    <div className="col-md-12 card-products-item p-0" key={i}>
                                        <div className="row w-100 p-4 m-0">
                                            <div className="col-md-3 p-0">
                                                <img className="card-item-img" src="./img/iphon.png" alt="" />
                                            </div>
                                            <div className="col-md-9 p-0 d-flex flex-column justify-content-between">
                                                <div className="align-left">
                                                <button className="card-product-trash"  onClick={(e) => { slideUp(e,i)}} >
                                                    <img className="card-item-icon-trash1 " src="./img/red-trash.png" alt="" />
                                                    <img className="card-item-icon-trash2 " src="./img/white-trash.png" alt="" />
                                                </button> 
                                                </div>
                                               



                                                <h2 className="text-right mb-3">
                                                    گوشی iphon 11pro max
</h2>
                                                <div className="text-right mb-2">
                                                    دو سیم کارنه با حافظه 568 گیگابایت
</div>
                                                <div className="text-right mb-1">
                                                    <i class="fa fa-circle ml-1"></i>
                                                    <span>
                                                        مشکی
</span>
                                                </div>
                                                <div className="text-right  mb-1">
                                                    <img className="card-item-icon ml-1" src="./img/card-guarantee.png" alt="" />
                                                    <span>گارانتی 6 ماهه</span>
                                                </div>
                                                <div className="text-right  mb-1">
                                                    <img className="card-item-icon ml-1" src="./img/card-available.png" alt="" />
                                                    <span>موجود در انبار</span>
                                                </div>
                                                <div className="d-flex product-count my-3">
                                                    <button className="count-btn" onClick={(e) => { uperCount(e,product,i )}} >
                                                        <i class="fa fa-plus ml-1"></i>
                                                    </button>
                                                    <input type="number" placeholder="1"  className="form-control border-0 input-counter"
                                                       
                                                        onChange={(e) => {
                                                            change(e,product,i )
                                                            // if(e.target.value > 1) {
                                                            //     setCount(e.target.value); 
                                                            //     var price3 =product.price * e.target.value;
                                                            //     document.getElementsByClassName("price2")[i].innerHTML=price3;
                                                            // }
                                                            // else {
                                                            //     setCount(""); 
                                                            // }

                                                        }}
                                                    />

                                                    <button className="count-btn" onClick={(e) => {downerCount(e,product,i)}}>
                                                        <i class="fa fa-minus ml-1"></i>
                                                    </button>
                                                </div>
                                                <div className="price-group d-flex justify-content-end">
                                                    <span className="ml-1 price2 ">{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                                    <span>تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                ))}
                                {/* <div className="col-md-12 card-products-item p-0">
                    <div className="row w-100 p-4 m-0">
                        <div className="col-md-3 p-0">
                        <img className="card-item-img" src="./img/iphon.png" alt=""/>
                        </div>
                        <div className="col-md-9 p-0 d-flex flex-column justify-content-between">
<div>
<img className="card-item-icon-trash " src="./img/card-trash.png" alt=""/>
    <span>حذف</span>
</div>
<h2 className="text-right mb-3">
    گوشی iphon 11pro max
</h2>
<div className="text-right mb-2">
   دو سیم کارنه با حافظه 568 گیگابایت
</div>
<div className="text-right mb-1">
<i class="fa fa-circle ml-1"></i>
<span>
    مشکی
</span>
</div>
<div className="text-right  mb-1">
<img className="card-item-icon ml-1" src="./img/card-guarantee.png" alt=""/>
    <span>گارانتی 6 ماهه</span>
</div>
<div className="text-right  mb-1">
<img className="card-item-icon ml-1" src="./img/card-available.png" alt=""/>
    <span>موجود در انبار</span>
</div>
<div className="d-flex product-count my-3">
    <button className="count-btn">
    <i class="fa fa-plus ml-1"></i>
    </button>
    <input type="text" className="form-control border-0 " 
                                        placeholder="1" />

    <button className="count-btn">
    <i class="fa fa-minus ml-1"></i>
    </button>
</div>
<div className="price-group d-flex justify-content-end">
                                    <span className="ml-1  "> 465000</span>
                                    <span>تومان</span>
                                    </div>
                        </div>
                    </div>
                </div> */}

                            </div>
                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 col-md-6">
                                    <table class="table card-table">
                                        <tr >
                                            <th className=" w-25 text-center">جمع قیمت</th>
                                            <td className="w-25 text-center">132000</td>

                                        </tr>
                                        <tr>
                                            <th className=" w-25 text-center">تخفیف</th>
                                            <td className=" w-25 text-center">20000</td>

                                        </tr>
                                        <tr>
                                            <th className=" w-25 text-center">قیمت قابل پرداخت</th>
                                            <td className=" w-25 text-center">112000</td>

                                        </tr>
                                        <tr>

                                            <td className=" text-center" colSpan="2">
                                                <a type="button" className="btn btn-danger text-white">فرایند پرداخت</a>
                                            </td>
                                        </tr>


                                    </table>
                                </div>
                                <div className="col-lg-5 col-md-6 justify-content-center d-flex align-items-center">
                                    <img className="card-img-boy" src="./img/card-boy2.svg" alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Card2;