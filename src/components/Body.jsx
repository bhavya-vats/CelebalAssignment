import React from 'react';
import './Body.css';
import File from '../assets/File.png'

function Body() {
  return (
    <div>
      <p className='heading'>Kalite ve Süreç Yönetimi</p>
      <p className='subject'><br></br>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
      <div className='image-container'>
      <img src={File} alt="Image 1"  className='overlay-image'/>
    </div>
    </div>
  )
}

export default Body
