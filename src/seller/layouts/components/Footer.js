// Modules.
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-xl-10 col-lg-9 col-md-8 ml-auto'>
            <div class='row border-top pt-3'>
              <div class='col-lg-6 text-center'>
                <ul class='list-inline'>
                  <li class='list-inline-item mr-2'>
                    <Link class='text-dark'>eCommerce Dashboard</Link>
                  </li>
                  <li class='list-inline-item mr-2'>
                    <Link class='text-dark'>About</Link>
                  </li>
                  <li class='list-inline-item mr-2'>
                    <Link class='text-dark'>Support</Link>
                  </li>
                  <li class='list-inline-item mr-2'>
                    <Link class='text-dark'>Blog</Link>
                  </li>
                </ul>
              </div>
              <div class='col-lg-6 text-center'>
                <p>
                  &copy; 2020 Copyright. Product of{' '}
                  <span class='text-success'>Albert and May</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
