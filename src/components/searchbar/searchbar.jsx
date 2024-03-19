import React from 'react'
import { Button } from '../ui/button/button'
import {SearchIcon} from '../../assets/icons/components/search-icon'
import {LocationIcon} from '../../assets/icons/components/location-icon'
import useDebounce from '../../hooks/useDebounce'
import { useGetSearch } from './service/query/useGetSearch'
import { useLocationSearch } from './service/query/useLocationSearch'

export const Searchbar = () => {

    const [value, setValue] = React.useState('')
    const [value2, setValue2] = React.useState('')
    const [focus, setFocus] = React.useState(false)

    const search = useDebounce(value)
    const search2 = useDebounce(value2)

    const {data} = useGetSearch(search)
    const {data:location} = useLocationSearch(search2)

    return (
        <div className='bg-primary z-10 fixed top-0 left-0 right-0 mt-[75px] py-8'>
            <div className="container">
                <div className='w-full gap-3 flex items-center'>
                    <div className='flex items-center w-full'>
                        <div className='relative w-full'>
                            <input 
                            placeholder={`${data?.length} natija bo‘yicha `} 
                            className='w-full outline-none border border-gray py-[12px] rounded-l-lg pl-12' 
                            type="text"
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)} />
                            <span className='absolute top-[50%] left-4 translate-y-[-50%]'>
                                <SearchIcon/>
                            </span>
                            <div className='absolute top-[100%] max-h-[300px] overflow-y-auto w-full'>
                                {value.length == 2 ? (
                                    <div className='bg-white flex flex-col gap-2 px-3 py-2 border border-gray rounded-lg w-full'>
                                        {data?.map((item) => (
                                        <div className='bg-primary flex items-center gap-5 rounded-md px-3 py-1'>
                                            <div className='w-14 h-14 overflow-hidden'>
                                                <img className='' src={item.image} alt="" />
                                            </div>
                                            <div>
                                                <h2>
                                                    {item.title}
                                                </h2>
                                            </div>
                                        </div>
                                    ))}
                                    </div>
                                ) : (
                                    null
                                )}
                            </div>
                        </div>
                        <div className='relative w-full'>
                            <input onChange={(e) => setValue2(e.target.value)}
                            placeholder='Butun O‘zbekiston' className='w-full outline-none border border-gray py-[12px] rounded-r-lg pl-12' type="text" />
                            <span className='absolute top-[50%] left-4 translate-y-[-50%]'>
                                <LocationIcon/>
                            </span>
                            <div className='absolute top-[100%] max-h-[300px] overflow-y-auto w-full'>
                                {value2.length == 2 ? (
                                    <div className='bg-white flex flex-col gap-2 px-3 py-2 border border-gray rounded-lg w-full'>
                                        {location?.map((item) => (
                                        <div className='bg-primary flex items-center gap-5 rounded-md px-3 py-1'>
                                            <div className='w-14 h-14 overflow-hidden'>
                                                <img className='' src={item.image} alt="" />
                                            </div>
                                            <div>
                                                <h2>
                                                    {item.title}
                                                </h2>
                                            </div>
                                        </div>
                                    ))}
                                    </div>
                                ) : (
                                    null
                                )}
                            </div>
                        </div>
                    </div>
                    <Button type='submit' className="py-3 px-12" variant="primary">
                        Izlash
                    </Button>
                </div>
            </div>
        </div>
    )
}
