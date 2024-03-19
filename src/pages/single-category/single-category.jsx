import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleCategory } from './service/query/useGetSingleCategory';
import { Searchbar } from '../../components/searchbar/searchbar';
import { ProductCard } from '../../components/card/product-card';
import img from '../../assets/images/notfound.svg';
import { location } from '../../data/location';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export const SingleCategory = () => {
    const { datakey } = useParams();
    const { data } = useGetSingleCategory(datakey);

    const [selectedLocations, setSelectedLocations] = useState([]);

    const toggleLocation = (locationName) => {
        if (selectedLocations.includes(locationName)) {
            setSelectedLocations(selectedLocations.filter(loc => loc !== locationName));
        } else {
            setSelectedLocations([...selectedLocations, locationName]);
        }
    };

    const filteredData = selectedLocations.length
        ? data?.filter(item => selectedLocations.includes(item.location))
        : data;

    return (
        <>
            <section className=''>
                <Searchbar />
                <div className="container relative">
                <div className="w-full  flex justify-end -top-14 right-0 absolute ">
                    <div className=" w-[300px]  rounded-2xl bg-white">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-md border border-gray  px-4 py-3 text-left text-sm font-medium ">
                                        <span className='text-[18px]'>Hudud bo'yicha filter</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-360 transform' : 'rotate-180'
                                                } h-5 w-5`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pb-2 max-h-[300px] overflow-y-auto pt-4 text-sm text-gray-500">
                                        {location.map(loc => (
                                            <label key={loc.id} className="flex py-2 items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    className=''
                                                    value={loc.name}
                                                    checked={selectedLocations.includes(loc.name)}
                                                    onChange={() => toggleLocation(loc.name)}
                                                />
                                                <span className='text-[16px] font-medium text-dark'>{loc.name}</span>
                                            </label>
                                        ))}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>

                    </div>
                </div>
                </div>
            </section>
            <section className='mt-[260px] pt-8 pb-8 bg-primary'>
                
                <div className=''>
                    <div className="container">
                        {data && <div>
                            <h2 className='text-black-out text-[24px] font-bold mb-8'>E'lonlar</h2>
                        </div>}

                        {!filteredData?.length ? (
                            <div className='w-full flex flex-col items-center justify-center'>
                                <img src={img} alt="" />
                                <h3>E'lonlar topilmadi!</h3>
                            </div>
                        ) : (
                            <div className='grid grid-cols-5'>
                                {filteredData?.map((item) => (
                                    <ProductCard key={item.id} {...item} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};
