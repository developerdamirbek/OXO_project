import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import bgImg from '../../assets/images/login-bg.svg'


export const Auth = () => {

    

  return (
    <div className=' bg-no-repeat pt-[120px] pb-[90px] bg-left-bottom m-0' style={{backgroundImage: `url(${bgImg})`}}>
        <div className='container '>
        <div className='w-[407px] shadow-login  mr-auto ml-auto rounded-md p-8'>
                <div className=' gap-[93px] mb-6 pb-2 border-b-[4px] border-b-gray   '>
                    <NavLink to='/auth/login' className="text-magnesium pb-[9.5px] px-10 text-[16px] font-bold ">
                        Kirish
                    </NavLink>
                    <NavLink to='/auth/register' className=" text-magnesium pb-[9.5px] px-[45.5px] text-[16px] font-bold ">
                        Ro’yxatdan o’tish
                    </NavLink>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
    </div>
    </div>
  )
}
