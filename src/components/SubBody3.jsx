import React from 'react'
import './SubBody3.css';
import AkBank from '../assets/Akbank.png'
import Bilgi from '../assets/Bilgi.png'
import Aktas from '../assets/aktas.png'

function SubBody3() {
  return (
    <div className='contain'>
      <div>
        <p className='head2'>Referanslarımız</p>
        <p className='sub'>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</p>
        <img src={AkBank} className='akbank'/>
        <img src={Bilgi} className='bilgi'/>
        <img src={Aktas} className='aktas'/>
        
      </div>
    </div>
  )
}

export default SubBody3
