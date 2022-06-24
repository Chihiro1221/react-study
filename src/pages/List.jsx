import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function List() {
  const location = useLocation();
  const { id } = useParams();
  return <div>list -- {id};</div>;
}
