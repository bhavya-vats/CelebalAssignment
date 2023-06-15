import React from 'react'
import './SubBody4.css';
import Person from '../assets/personimg.png';

function SubBody4() {
  return (
    <div>
      <img src={Person} className='person'/>
      <p className='bize'>Bize Ulaşın</p>
      <p className='cozum'>Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.</p>
      <button type='button' className='btn-submit'>Bize Ulaşın</button>
    </div>
  )
}

export default SubBody4
