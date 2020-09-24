import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Chart } from 'react-charts';

const Diagram = () => {
    const data = React.useMemo(
        () => [
          {
            label: 'Series 1',
            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
          }
        ],
        []
      )
     
      const axes = React.useMemo(
        () => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
      )
return (
<Fragment>
    <div className="container-fluid single-product">
        <div className="container">
            <div className="row py-5 justify-content-center">
                <div className="col-10">

 


    <div
      style={{
      
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>

                </div>
            </div>
        </div>
    </div>
</Fragment>
);
};

export default Diagram;