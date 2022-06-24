import React from 'react';
import notFoundImage from '../assets/404.jpeg';
import './notFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <img src={notFoundImage} alt="" />
    </div>
  );
}
