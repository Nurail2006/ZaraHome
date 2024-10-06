import React, {useState, useEffect} from 'react';
import Cartdisco from '../components2/cartdisco/Cartdisco';
import apiClient from '../axios/apiClient';

function Discounts() {
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
      <div className='cart1'>
        {tovar.map((item) => (
            <Cartdisco key={item.id} data={item} />
          ))}
      </div>
    </div>
  )
}

export default Discounts;