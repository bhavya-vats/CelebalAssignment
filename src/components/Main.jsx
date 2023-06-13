import React from 'react'
import './Main.css';
import Header from './Header';

function Main() {
  return (
    
    <div className='row'>
        <Header/>
      <div className='row1'>
        <p className='main-content'>Bilgi Teknolojilerinde <br/>23 Yıllık Tecrübe</p>
        <p className='subject1'><br></br>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
        <p><br></br></p>
        <div className='inputrow'>
            <input type="text" placeholder="Mail bültenimize kayıt ol" className='textinput'/>
            <button className='btn'><a className='link' href='#'>Kayıt Ol</a></button>
      </div>
    </div>
    </div>
  )
}

export default Main
