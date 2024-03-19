  import React from 'react'
  import coverImg from '../../assets/images/profile-cover.png'
  import userImg from '../../assets/images/user.png'
  import { loadState } from '../../lib/storage'
  import { Link, Outlet, useLocation } from 'react-router-dom'
  import { FacebookIcon } from '../../assets/icons/components/facebook-icon'
  import { YoutubeIcon } from '../../assets/icons/components/youtube-icon'
  import { TiktokIcon } from '../../assets/icons/components/tiktok-icon'
  import { TelegramIcon } from '../../assets/icons/components/telegram-icon'
  import { InstagramIcon } from '../../assets/icons/components/instagram-icon'
  import { VerifyIcon } from '../../assets/icons/components/verify-icon'
  import { InfoIcon } from '../../assets/icons/components/info-icon'
  import { Button } from '../../components/ui/button/button'
import { Avatar } from './components/avatar'

  export const Profile = () => {

    const user = loadState("user")

    const storedLinks = JSON.parse(localStorage.getItem('socialMediaLinks'));

    const location = useLocation()

    return (
      <div className='mt-[75px]'>
        <div className=' bg-no-repeat h-[228px] bg-cover' style={{ backgroundImage: `url(${coverImg})` }}>

        </div>
        <div className="container">
          <div className='w-full mt-[-80px] mb-9 flex gap-4 items-center'>
            <div className='w-[160px] h-[160px] bg-white  flex items-center justify-center overflow-hidden rounded-full'>
              <Avatar img1={user?.user?.img ? user?.user?.img : userImg} img2={user?.user?.img ? user?.user?.img : userImg}/>
            </div>
            <div className='flex flex-col gap-8'>
              <div className='flex items-center gap-3'>
                <h1 className='text-[24px] text-white font-bold'>{user.user.name} {user.user.surname} </h1>
                <span>
                  <VerifyIcon />
                </span>
              </div>

              <div className='flex items-center gap-6'>
                <a target='blank' href={storedLinks}>
                  <FacebookIcon />
                </a>
                <a target='blank' href={storedLinks}>
                  <YoutubeIcon />
                </a>
                <a target='blank' href={storedLinks}>
                  <TiktokIcon />
                </a>
                <a target='blank' href={storedLinks}>
                  <TelegramIcon />
                </a>
                <a target='blank' href={storedLinks}>
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
          <div className='flex items-center  justify-between mb-8'>
            <div></div>
            <div className='flex gap-4 items-center'>
              <div className='flex items-center gap-4'>
                <div className='flex flex-col gap-2'>
                  <p className='text-coarse-wool text-[14px]'>Sizning hisobingiz:   0  so’m</p>
                  <p className='text-coarse-wool text-[14px]'>Mavjud bonuslar:   0 so’m</p>
                </div>
                <InfoIcon />
              </div>
              <Button variant='secondary'>
                Hamyonni to’ldirish
              </Button>
              <Button variant='primary'>
                Paket sotib olish
              </Button>
            </div>
          </div>
          <div className='flex ic justify-between mb-[18px] text-gray text-[16px]'>
          <Link to='/profile' className={location.pathname === '/profile' ? 'text-dark font-medium' : ''}>
            E’lonlar
          </Link>
          <Link to='/profile/messages' className={location.pathname === '/profile/messages' ? 'text-dark font-medium' : ''}>
            Xabarlar
          </Link>
          <Link to='/profile/payment' className={location.pathname === '/profile/payment' ? 'text-dark font-medium' : ''}>
            To’lovlar tarixi
          </Link>
          <Link to='/profile/settings' className={location.pathname === '/profile/settings' ? 'text-dark font-medium' : ''}>
            Sozlamalar
          </Link>
          <Link to='/profile/promocode' className={location.pathname === '/profile/promocode' ? 'text-dark font-medium' : ''}>
            Promokod
          </Link>
          </div>
        </div>
        <div className='bg-primary py-8'>
          <Outlet/>
        </div>
      </div>
    )
  }
