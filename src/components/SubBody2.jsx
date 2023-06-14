import React from 'react'
import './SubBody2.css';
import Illustration from '../assets/Illustration.jpg';
import Picture from '../assets/picture.jpg';

function SubBody2() {
  return (
    <div>
      <div>
      <p className='bodyhead1'>Kalite ve Süreç Yönetimi</p>
      <p className='bodysub'>Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.</p>
      <button type='text' className='btn5'>Keşfet</button>
      <img src={Illustration} alt='img' className='img1'/>
      <img src={Picture} alt='img' className='img2'/>
      <p className='bodyhead2'>Test Yönetimi ve Analizi</p>
      <p className='bodysub2'>Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını önlemek amacıyla gerçekleştirdiğimiz testleri her proje aşamasında manuel ya da test otomasyonu ile dikkatle uygulamaktayız. Deneyimli test ekibimiz, kurumlara yüksek kalitede yazılım testleri hizmeti ile baştan sona güvenli, kaliteli ve tatmin edici bir müşteri deneyimi sunmaktadır.</p>
      <button className='btn6'>Keşfet</button>
      </div>
    </div>
  )
}

export default SubBody2
