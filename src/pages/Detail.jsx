import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Detail() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('id'));
  console.log(searchParams);

  return <div>detail...</div>;
}
