// Modules.
import React from 'react';

const Cards = () => {
  return (
    <section>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-10 col-lg-9 col-md-8 ml-auto'>
            <div className='row pt-md-5 mt-md-3 mb-5'>
              <div className='col-xl-3 col-sm-6 p-2'>
                <div className='card card-common'>
                  <div className='card-body'>
                    <div className='d-flex justify-content-between'>
                      <i className='fas fa-chart-bar fa-3x text-success'></i>
                      <div className='text-secondary text-right'>
                        <h5>Total Sales</h5>
                        <h3>₦1,200000</h3>
                      </div>
                    </div>
                  </div>
                  <div className='card-footer text-secondary'>
                    <i className='fas fa-sync mr-3'></i>
                    <span>View all</span>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-sm-6 p-2'>
                <div className='card card-common'>
                  <div className='card-body'>
                    <div className='d-flex justify-content-between'>
                      <i className='fas fa-shopping-cart fa-3x text-warning'></i>
                      <div className='text-secondary text-right'>
                        <h5>Total Orders</h5>
                        <h3>200</h3>
                      </div>
                    </div>
                  </div>
                  <div className='card-footer text-secondary'>
                    <i className='fas fa-sync mr-3'></i>
                    <span>View all</span>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-sm-6 p-2'>
                <div className='card card-common'>
                  <div className='card-body'>
                    <div className='d-flex justify-content-between'>
                      <i className='fas fa-list-alt fa-3x text-info'></i>
                      <div className='text-secondary text-right'>
                        <h5>Total Products</h5>
                        <h3>120</h3>
                      </div>
                    </div>
                  </div>
                  <div className='card-footer text-secondary'>
                    <i className='fas fa-sync mr-3'></i>
                    <span>View all</span>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-sm-6 p-2'>
                <div className='card card-common'>
                  <div className='card-body'>
                    <div className='d-flex justify-content-between'>
                      <i className='fas fa-chart-line fa-3x text-danger'></i>
                      <div className='text-secondary text-right'>
                        <h5>Daily Visitors</h5>
                        <h3>500</h3>
                      </div>
                    </div>
                  </div>
                  <div className='card-footer text-secondary'>
                    <i className='fas fa-sync mr-3'></i>
                    <span>Visit Shop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cards;
