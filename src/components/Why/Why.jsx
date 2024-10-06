import React from 'react';
import './Why.scss';
import why from '../../assets/img/why.png';

function Why() {
  return (
    <div>
        <div className="q1">
            {/* <h2>Почему выбирают нас?</h2>
            <p>Наши преимущества</p> */}
            <img src={why} alt="" />
        </div>
    </div>
  )
}

export default Why