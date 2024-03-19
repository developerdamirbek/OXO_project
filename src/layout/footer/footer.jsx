import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/footer-logo.svg'
import { Appstore } from '../../assets/icons/components/appstore'
import { GooglePlay } from '../../assets/icons/components/google-play'

export const Footer = () => {
  return (
    <footer className='bg-dark pt-[34px] pb-8'>
      <div className="container flex items-start gap-[130px]">
        <div>
          <Link to='/'>
            <img src={logo} alt="OXO logo" />
          </Link>
        </div>
        <div>
          <div className='flex text-[14px] gap-2 text-white font-medium flex-col justify-start'>
            <Link className='hover:text-vivaldi-red'>Mobil ilovalar</Link>
            <Link className='hover:text-vivaldi-red'>Yordam</Link>
            <Link className='hover:text-vivaldi-red'>Pullik xizmatlar</Link>
            <Link className='hover:text-vivaldi-red'>OXO da biznes</Link>
            <Link className='hover:text-vivaldi-red'>Saytda reklama</Link>
            <Link className='hover:text-vivaldi-red'>Foydalanish shartlari</Link>
            <Link className='hover:text-vivaldi-red'>Maxfiylik siyosati</Link>
            <Link className='hover:text-vivaldi-red'>Foydalanish shartlari</Link>
          </div>
        </div>
        <div>
          <div className='flex text-[14px] gap-2 text-white font-medium flex-col justify-start'>
            <Link className='hover:text-vivaldi-red'>Qanday qilib sotish va sotib olish kerak?</Link>
            <Link className='hover:text-vivaldi-red'>Xavfsizlik qoidalari</Link>
            <Link className='hover:text-vivaldi-red'>Sayt xaritasi</Link>
            <Link className='hover:text-vivaldi-red'>Mintaqalar xaritasi</Link>
            <Link className='hover:text-vivaldi-red'>OXO da karyera</Link>
            <Link className='hover:text-vivaldi-red'>Qayta aloqa</Link>
          </div>
        </div>
        <div>
          <Link to=''>
            <Appstore/>
          </Link>
          <Link to='https://play.google.com/store/apps/details?id=com.torg.torg&hl=en_US&gl=US'>
            <GooglePlay/>
          </Link>
        </div>
      </div>
    </footer>
  )
}
