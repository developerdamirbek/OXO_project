import React from 'react'
import img from '../../../../assets/images/notfound.svg'

export const UserPayment = () => {
  return (
    <div className='container'>
      <div className='flex items-center gap-2 flex-col justify-center'>
        <img src={img} alt="" />
        <h2 className='text-[16px] font-bold'>Sizda to'lovlar mavjud emas!</h2>
        <p className='text-[14px]'>Barcha amalga oshirilgan to'lovlar shu yerda saqlanadi.</p>
      </div>
    </div>
  )
}
