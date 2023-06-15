import React from 'react'
import './SubBody3.css';
import AkBank from '../assets/Akbank.png'
import Bilgi from '../assets/Bilgi.png'
import Aktas from '../assets/aktas.png'
import Akcan from '../assets/akcan.png';
import Borusan from '../assets/borusan.png'
import BookMyShow from '../assets/BookMyShow Logo.png'
import Tumunu from '../assets/tumunu.png';
import Ola from '../assets/ola.png'
import Amazon from '../assets/amazon.png'

function SubBody3() {
  return (
    <div className='contain'>
      <div>
        <p className='head2'>Referanslarımız</p>
        <p className='sub'>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</p>
        <img src={AkBank} className='akbank'/>
        <img src={Bilgi} className='bilgi'/>
        <img src={Aktas} className='aktas'/>
        <img src={Akcan} className='akcan'/>
        <img src={Borusan} className='borusan'/>
        <img src={BookMyShow} className='book'/>
        <img src={Tumunu} className='tumunu'/>
        <img src={Ola} className='ola'/>
        <img src={Amazon} className='amazon' />
      </div>
    </div>
  )
}

export default SubBody3
