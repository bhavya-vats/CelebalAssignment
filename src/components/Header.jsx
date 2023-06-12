import React from 'react';
import './Header.css'

function Header() {
  return (
      <header>
      <nav>
        <ul className='head'>
          <li id='main'><a href="/">Çözüm ve Hizmetler</a></li>
          <li id='main'><a href="#">Ürünler</a></li>
          <li id='main'><a href="#">Teknolojiler</a></li>
          <li id='main'><a href="#">İnsan Kaynakları</a></li>
          <li id='main'><a href="#" >Kurumsal</a></li>
          <li className='buttonstyle'><a href="#">İletişim</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
