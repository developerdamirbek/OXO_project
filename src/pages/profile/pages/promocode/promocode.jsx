import React from 'react'
import { Button } from '../../../../components/ui/button/button'

export const Promocode = () => {
  return (
    <div className='container'>
      <div className='w-[710px] flex items-center gap-3'>
        <input className='w-full outline-none border border-gray rounded-lg py-3 px-4' placeholder='To’lovlar qidiruvi' type="text" />
        <Button type="submit" variant="primary" className='py-3 px-8'>
          Qidiruv
        </Button>
      </div>
    </div>
  )
}
