import React from 'react';
import UseFetchedData from '../api/useFetchedData'; // assuming UseFetchedData is a custom hook

import Store from './Store';

function Product() {

  const data = UseFetchedData(); 
  return (
   <Store data={data}/>
  );
}

export default Product;
