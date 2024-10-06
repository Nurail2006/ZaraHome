import React, {useState, useEffect} from 'react';
import "../pages/styles/AllProducts.scss";
import ProductCatalog from '../components/product-catalog/ProductCatalog';
import Why from '../components/Why/Why';
import Questions from '../components/questions/Questions';
import Found from '../components/found/Found';
import Tovar from '../components/tovar/Tovar';
import apiClient from '../axios/apiClient';
import Fon1 from '../components/fon1/Fon1'


function AllProducts() {
  const [tovar, setTovar] = useState([]);

  async function getTovar() {
    try {
     const res = await apiClient.get("/products"); 

     console.log(res);
     setTovar(res.data);
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getTovar()
}, [])

  return (
   <div>
    <Fon1 />
    <div className='cart1'>
      {tovar.map((item) => (
          <Tovar key={item.id} data={item} />
        ))
      }
    </div>
    <ProductCatalog />
    <Why />
    <Questions />
    <Found />
   </div>
  )
}

export default AllProducts;