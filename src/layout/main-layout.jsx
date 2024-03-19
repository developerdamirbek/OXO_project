import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <div className='h-screen flex flex-col justify-between'>
            <div>
                <Header />
                <main>
                    <Outlet/>
                </main>
            </div>
            <Footer />
        </div>
    )
}
