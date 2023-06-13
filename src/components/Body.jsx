import React from 'react';
import './Body.css';
import File from '../assets/File.png'
import File1 from '../assets/Screenshot (386).png';
import File2 from '../assets/Screenshot (387).png';
import File3 from '../assets/Screenshot (388).png';
import File4 from '../assets/Screenshot (389).png';
import File5 from '../assets/Screenshot (390).png';

function Body() {
  return (
    <div>
      <p className='heading'>Kalite ve Süreç Yönetimi</p>
      <div>
      <p className='subject'><br></br>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
    </div>
    <div >
      <div className="container">
      <img src={File} alt="Example Image" className="image" />
      <p className='first-head'><br></br>Döküman Analizi</p>
      <p className='first-img'><br></br>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
      <img src={File1} alt="Example Image" className="image1" />
      <p className='second-head'><br></br>Kabul ve Değerlendirme</p>
      <p className='second-img'><br></br>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
      <img src={File2} alt="Example Image" className="image2" />
      <p className='third-head'><br></br>İş Kuralları Analizi</p>
      <p className='third-img'><br></br>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.<br></br></p>
      </div>
      <div className='container1'>
      <img src={File3} alt="Example Image" className="image3" />
      <p className='fourth-head'><br></br>Akış Diyagramları</p>
      <p className='fourth-img'><br></br>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.<br></br></p>
      <img src={File4} alt="Example Image" className="image4" />
      <p className='fifth-head'><br></br>Paydaş Analizi</p>
      <p className='fifth-img'><br></br>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.<br></br></p>
      <img src={File5} alt="Example Image" className="image5" />
      <p className='sixth-head'><br></br>Prototipleme</p>
      <p className='sixth-img'><br></br>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.<br></br></p>
      </div>
    </div>
    </div>
  )
}

export default Body
