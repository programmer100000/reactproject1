import React, { Fragment } from 'react';
import { Map, GoogleApiWrapper, Marker,LoadingContainer } from 'google-maps-react';

export class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store: { lat: 47.49855629475769, lng: -122.14184416996333 }
           
        };
    }

    render() {
        const LoadingContainer = (props) => (
            <div>Fancy loading container!</div>
          )
        return (
            <Fragment>
<div className="container-fluid single-product">
        <div className="container">
            <div className="row w-100  justify-content-center ">
                <div className="col-8 py-4 px-2 mb-4 payment  text-right">
                    <h2>آدرس جدید</h2>
                    <p className="m-0">لطفا موقیت مکانی را بر روی نقشه وارد کنید</p>
                    <div className="search-form w-50 sidebar-search-form m-0 d-flex  align-items-center p-1 mb-3 mt-2 ">
                                    <input type="text" className="form-control  border-0 "
                                        placeholder="" />
                                    <img className="" src='./img/search.png' />
                    </div>
                    <div className="row payment-location justify-content-center">
                        <div className="col-md-10 payment-location w-100">
                        <Map
                            google={this.props.google}
                            zoom={10}
                            initialCenter={{ lat: 47.444, lng: -122.176 }}
                            
                        >
                        
                    </Map>
                        </div>
                  
                    </div>
                  
                </div>
            </div>
        </div>
</div>

               
        </Fragment>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBcdvjVTWIRRVt7AykQRGkp_7y1X2AB-20'),
    LoadingContainer: LoadingContainer
})(Location);

