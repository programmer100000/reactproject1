import React, { Fragment } from 'react';

const Search = () => {

return (
<Fragment>
    <div className="container-fluid search">
        <div className="container">
            <div className="row  ">
                <div className="col-md-2 p-2">
                    <div className="row border border-dark mb-5">
                        <div className="col-12 p-0 m-0">
                            <div className="d-flex border-bottom border-dark p-2">
                                <span className="">فیلتر:</span>
                                <span>گوشی موبایل آیفون</span>
                            </div>
                            <div className="p-2 text-center">
                                <div
                                    className="search-form sidebar-search-form m-0 d-flex border border-dark align-items-center p-1  ">
                                    <input type="text" className="form-control border-0 text-white" placeholder="جستجو در نتایج" />
                                    <img className="" src='./img/search.png' />
                                </div>
                            </div>
                            <div className="d-flex border-bottom border-dark p-2">
                                <span className="">دسته بندی:</span>
                                <div>
                                    <div className="btn-group-vertical">
                                        <button type="button" className="btn btn-primary">Apple</button>
                                        <button type="button" className="btn btn-primary">Samsung</button>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-primary dropdown-toggle"
                                                data-toggle="dropdown">
                                                Sony
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Tablet</a>
                                                <a className="dropdown-item" href="#">Smartphone</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex  p-2">
                                <span className="">برندها:</span>
                                <div>
                                    <div className="btn-group-vertical">
                                        <button type="button" className="btn btn-primary">Apple</button>
                                        <button type="button" className="btn btn-primary">Samsung</button>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-primary dropdown-toggle"
                                                data-toggle="dropdown">
                                                Sony
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Tablet</a>
                                                <a className="dropdown-item" href="#">Smartphone</a>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="d-flex p-2">
                            <div
                                    className="search-form   sidebar-search-form d-flex border border-dark align-items-center p-1  ">
                                    <input type="text" className="form-control border-0 text-white" placeholder="" />
                                    <img className="" src='./img/search.png' />
                                </div>
                            </div>
                            
                        </div>


                    </div>
                    <div className="row border border-dark p-2 ">
                        <div className="col-12 p-0 m-0">
                        <div className="form-check text-right p-0">
  <label className="form-check-label">
    <input type="radio" className="form-check-input" name="optradio"/>فقط ارسال فوری
  </label>
</div>
<div className="form-check text-right p-0">
  <label className="form-check-label">
    <input type="radio" className="form-check-input" name="optradio"/>فقط کالای موجود
  </label>
</div>
<div className="form-check text-right p-0">
  <label className="form-check-label">
    <input type="radio" className="form-check-input" name="optradio"/>فقط کالاهای اصل
  </label>
</div>
<div className="form-check text-right v">
  <label className="form-check-label">
    <input type="radio" className="form-check-input" name="optradio"/>فقط کالای موجود در انبار
  </label>
</div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-10">

                </div>
            </div>

        </div>
    </div>
</Fragment>
);
};

export default Search;