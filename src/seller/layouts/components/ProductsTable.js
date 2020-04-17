//  Modules.
import React from 'react';

// Custom Modules.
import { Pagination } from '../../layouts';

// Images.
import product from '../../../assets/gamer.jpg';

const ProductTable = () => {
  return (
    <section>
      <div className='container-fluid'>
        <div className='row mb-5'>
          <div className='col-xl-10 col-lg-9 col-md-8 ml-auto'>
            <div className='row align-items-center table-wrapper'>
              <div className='col-12 mb-4 mb-xl-0'>
                <h4 className='text-muted text-center mb-3'>Recent Products</h4>
                <table className='table table-striped bg-light text-center table-sm'>
                  <thead>
                    <tr className='text-muted'>
                      <th>#</th>
                      <th> Image</th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Views</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>
                        <img
                          src={product}
                          alt='product 1'
                          style={{ width: '45px', height: '28px' }}
                        />
                      </td>
                      <td>Dangote Cement x3 Strong</td>
                      <td>30</td>
                      <td>₦3000</td>
                      <td>1000</td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>
                        <img
                          src={product}
                          alt='product 1'
                          style={{ width: '45px', height: '28px' }}
                        />
                      </td>
                      <td>Brown Aluminium Zinc...</td>
                      <td>30</td>
                      <td>₦100000</td>

                      <td>500</td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>
                        <img
                          src={product}
                          alt='product 1'
                          style={{ width: '45px', height: '28px' }}
                        />
                      </td>
                      <td>Big Iron Rods</td>
                      <td>30</td>
                      <td>₦6000</td>

                      <td>700</td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>
                        <img
                          src={product}
                          alt='product 1'
                          style={{ width: '45px', height: '28px' }}
                        />
                      </td>
                      <td>Limestone with Gravel</td>
                      <td>30</td>
                      <td>₦23000</td>

                      <td>10000</td>
                    </tr>
                    <tr>
                      <th>5</th>
                      <td>
                        <img
                          src={product}
                          alt='product 1'
                          style={{ width: '45px', height: '28px' }}
                        />
                      </td>
                      <td>Big Generator Elepaq</td>
                      <td>30</td>
                      <td>₦300000</td>

                      <td>2500</td>
                    </tr>
                  </tbody>
                </table>
                <Pagination />
              </div>
              <div className='col-12'>
                <h4 className='text-muted text-center mb-3'>Recent Orders</h4>
                <table className='table table-dark table-hover text-center table-sm'>
                  <thead>
                    <tr className='text-muted'>
                      <th>#</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Ikenna Gabriel</td>
                      <td>09078370055</td>
                      <td>Dangote Cement with Bag...</td>
                      <td>10</td>
                      <td>
                        <span className='badge badge-danger py-1'>Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>Mayowa Alakija</td>
                      <td>08105411987</td>
                      <td>Big Iron Rod</td>
                      <td>100</td>
                      <td>
                        <span className='badge badge-success py-1'>
                          Delivered
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>Tosin Bantos</td>
                      <td>08068116128</td>
                      <td>Aluminium Zinc Brown...</td>
                      <td>4</td>
                      <td>
                        <span className='badge badge-warning py-1 text-light'>
                          Processing
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Pagination />
              </div>

              <div className='col-12'>
                <h4 className='text-muted text-center mb-3'>Recent Payments</h4>
                <table className='table table-striped bg-light text-center table-sm'>
                  <thead>
                    <tr className='text-muted'>
                      <th>#</th>
                      <th>Seller Name</th>
                      <th>Store</th>
                      <th>Amount Paid</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Mayowa Alakija</td>
                      <td>Albert and May</td>
                      <td>₦1000000</td>
                      <td>23/02/2020</td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>Tosin Bantos</td>
                      <td>After School Africa</td>
                      <td>₦1000000</td>
                      <td>25/02/2020</td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>Ikenna Gabriel Ifenna</td>
                      <td>Diggital</td>
                      <td>₦1000000</td>
                      <td>1/1/2020</td>
                    </tr>
                  </tbody>
                </table>
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductTable;
