import React from 'react'
import './SubBody5.css'
import Twitter from '../assets/twitter.jpeg';
import Linkedin from '../assets/linkedin.jpeg'
import Facebook from '../assets/facebook.jpeg';
import Instagram from '../assets/instagram.jpeg'

function SubBody5() {
  return (
    <>
    <div className='bgcolor'>
        <div>
        <p className='text1'>Çözüm ve Hizmetler</p>
      <p className='text2'>Yazılım Geliştirme</p>
      <p className='text3'>Outsourcing</p>
      <p className='text4'>Kalite ve Süreç Yönetimi</p>
      <p className='text5'>Danışmanlık</p>
      <p className='text6'>IoT Destekli Çözümler</p>
      <p className='text7'>© Copyright 2010-2021 - Can Çevik</p>
      <p className='text8'>Ürünler</p>
      <p className='text9'>Eğitim Yönetim Sistemi</p>
      <p className='text10'>İnsan Sermayesi Yönetim Sistemi</p>
      <p className='text11'>Müşteri İlişkileri Yönetim Sistemi</p>
      <p className='text12'>İçerik Yönetim Sistemi</p>
      <p className='text13'>Kurumsal</p>
      <p className='text14'>Hakkımızda</p>
      <p className='text15'>Belge ve Yetkinlikler</p>
      <p className='text16'>İş Ortakları</p>
      <img src={Linkedin} className='linkedin'/>
      <img src={Twitter} className='twitter'/>
      <img src={Instagram} className='instagram'/>
      <img src={Facebook} className='facebook'/>
        </div>
    </div>
    
    </>
  )
}

export default SubBody5
