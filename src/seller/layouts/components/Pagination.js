// Modules.
import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
    <nav>
      <ul className='pagination justify-content-center'>
        <li className='page-item'>
          <Link className='page-link py-2 px-3'>
            <span>&laquo;</span>
          </Link>
        </li>
        <li className='page-item active'>
          <Link className='page-link py-2 px-3'>
            <span>1</span>
          </Link>
        </li>
        <li className='page-item'>
          <Link className='page-link py-2 px-3'>
            <span>2</span>
          </Link>
        </li>
        <li className='page-item'>
          <Link className='page-link py-2 px-3'>
            <span>3</span>
          </Link>
        </li>
        <li className='page-item'>
          <Link className='page-link py-2 px-3'>
            <span>&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
