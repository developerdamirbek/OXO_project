import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { add, removeliked } from '../../redux/reducers/likeReducer'

export const ProductCard = (props) => {
    const dispatch = useDispatch()
    const {likedItems} = useSelector((state) => state.like);
    const like = likedItems?.find((item) => item.id == props.id)

    const addLiked = () => {
        dispatch(add(props))
    }

    const remove = () => {
        dispatch(removeliked(props))
    }

    return (
        <div className='w-[210px] border-[0.5px] pb-[14px] border-gray rounded-md p-1'>
            <Link to={`/products/${props.datakey}/${props.id}`}>
                <div className='w-[202px] h-[146px] mb-3 flex items-center justify-center p-3 rounded-t-lg overflow-hidden'>
                    <img className='object-cover object-center h-auto w-full' src={props.image} alt="product image" />
                </div>
            </Link>
            <div className='w-[182px] ml-auto mr-auto'>
                <div className='h-[40px] ml-auto mr-auto w-[182px]'>
                    <h3 className='text-[14px] text-dark-void mb-3'>{props.title?.slice(0, 40)}</h3>
                </div>
                {props.price ? <p className='text-[20px] text-vivaldi-red font-bold mb-2'>${props.price}</p> : <p className='text-[20px] text-vivaldi-red font-bold mb-2'>Tekin</p>}
                <strong className='text-[14px] font-normal inline-block text-argent mb-2'>{props.location}</strong>
                <div className='flex items-center justify-between'>
                    <strong className='text-[14px] font-normal text-argent'>{props.date}</strong>

                    {!like ? (
                        <button onClick={() => addLiked()}>
                            <svg width={24} height={24} className='max-sm:w-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_53395_442)">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="black" strokeWidth="2" />
                                </g>
                            </svg>
                        </button>
                    ) : (
                        <button onClick={() => remove()}>

                            <svg width={24} height={24} className='max-sm:w-4' viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_53395_442)">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="red" />
                                </g>
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
