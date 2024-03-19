import React from 'react'
import img from '../../../../assets/images/notfound.svg'

export const UserMessages = () => {
  return (
    <div className='container'>
      <div className='flex items-center gap-2 flex-col justify-center'>
        <img src={img} alt="" />
        <h2 className='text-[16px] font-bold'>Hali hech qanday xabar yo'q</h2>
        <p className='text-[14px]'>
          Barcha yuborilgan va qabul qilingan xabarlar shu yerda saqlanadi.
        </p>
      </div>
    </div>
  )
}
