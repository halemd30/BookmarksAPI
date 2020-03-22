import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <nav className='Nav'>
      {/* <button onClick={() => props.clickPage('list')}> */}
      <Link to='/'>
        Bookmark List
      </Link>
      {/* </button> */}
      {' '}
      <Link to='/add-bookmark'>
        Add Bookmark
      </Link>
    </nav>
  );
}
