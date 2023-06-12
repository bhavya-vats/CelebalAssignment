import React from 'react'
import './Main.css';
import Header from './Header';

function Main() {
  return (
    
    <div className='row'>
        <Header/>
      <div>
        <p className='main-content'>Bilgi Teknolojilerinde <br/>23 Yıllık Tecrübe</p>
        <p className='subject'><br></br>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
      </div>
    </div>
  )
}

export default Main
