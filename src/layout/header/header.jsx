import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { Envelope } from '../../assets/icons/components/envelope'
import { Button } from '../../components/ui/button/button'
import { HeartIcon } from '../../assets/icons/components/heart-icon'
import { UserIcon } from '../../assets/icons/components/user-icon'
import { loadState } from '../../lib/storage'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Header = () => {


    const navigate = useNavigate()

    const user = loadState('user')

    if(!user && window.location.pathname === '/profile' || !user && window.location.pathname === '/announce' ){
        navigate("/auth/login")
        window.location.replace('/')
    }

    const {likeItemCount} = useSelector((state) => state.like)

    return (
        <header className='py-4 fixed z-10 top-0 left-0 right-0 bg-white shadow-header'>
            <div className="container">
                <div className='flex items-center justify-between'>
                    <div>
                        <Link to='/'>
                            <img src={logo} alt="OXO logo" />
                        </Link>
                    </div>
                    <div className='flex items-center gap-9 '>
                        <div className='flex items-center gap-6'>
                            <Link to='/messages'>
                                <div className='flex gap-2 items-center text-dark text-[14px] font-medium'>
                                    <Envelope />
                                    Xabarlar
                                </div>
                            </Link>
                            <Link to='/liked'>
                                <div className='flex relative gap-2 items-center text-dark text-[14px] font-medium'>
                                    <HeartIcon />
                                    Yoqtirganlar
                                    <span className='absolute h-4 w-4 flex text-[12px] rounded-full -top-1 -left-1  items-center justify-center text-white bg-vivaldi-red'>
                                        {likeItemCount}
                                    </span>
                                </div>
                            </Link>
                            {user ? (
                                <Link to='/profile'>
                                <div className='flex gap-2 items-center text-dark text-[14px] font-medium'>
                                    <UserIcon />
                                    Akkaunt
                                </div>
                            </Link>
                            ): (
                                <Link to='/auth/login'>
                                <div className='flex gap-2 items-center text-dark text-[14px] font-medium'>
                                    <UserIcon />
                                    Kirish
                                </div>
                            </Link>
                            )}
                            <select className='cursor-pointer text-[14px] text-dark font-medium outline-none' name="lang" id="lang">
                                <option value="uz">Uz</option>
                                <option value="en">En</option>
                                <option value="ru">Ru</option>
                            </select>
                        </div>
                        <div>
                            <Link to='/announce'>
                                <Button variant="primary">
                                    E'lonlarni joylashtirish
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
