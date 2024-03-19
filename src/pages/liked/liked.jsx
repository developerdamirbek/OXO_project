import React from 'react'
import { useSelector } from 'react-redux'
import { ProductCard } from '../../components/card/product-card'
import img from '../../assets/images/notfound.svg'

export const Liked = () => {

  const { likedItems } = useSelector((state) => state.like)
  console.log(likedItems);

  return (
    <div className='pt-[110px] pb-10 '>
      <div className='container'>
        {!likedItems.length ? (
          <div className='flex items-center gap-2 flex-col justify-center'>
            <img src={img} alt="" />
            <h2 className='text-[16px] font-bold'>Hali saqlangan e'lonlar yo'q!</h2>
            <p className='text-[14px]'>Barcha saqlangan e'lonlaringiz shu yerda saqlanadi.</p>
          </div>
        ) : (
          <div className='grid grid-cols-5 gap-6'>
            {likedItems?.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
