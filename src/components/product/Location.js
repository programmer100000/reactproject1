import React, { Fragment } from 'react';
import { Map, GoogleApiWrapper, Marker,LoadingContainer, InfoWindow } from 'google-maps-react';

export class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store: {lat: 35.69439, lng: 51.42151  }
           
        };
    }

    render() {
     
        return (
            <Fragment>
<div className="container-fluid single-product">
        <div className="container">
            <div className="row w-100  justify-content-center ">
                <div className="col-8 py-4 px-2 mb-4 payment  text-right">
                    <h2>آدرس جدید</h2>
                    <p className="">لطفا موقیت مکانی را بر روی نقشه وارد کنید</p>
            
                    <div className="row payment-location justify-content-center">
                        <div className="col-md-10 payment-location w-100">
                        <Map
                            google={this.props.google}
                            zoom={10}
                            initialCenter={{ lat: 35.69439, lng: 51.42151 }}
                            
                        >
                         <Marker onClick={() => console.log('You clicked me!')}
               />
 
       
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

