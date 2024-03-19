import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { usePostAnnounce } from './service/mutation/usePostAnnounce';
import { useGetCategories } from '../home/service/query/useGetCategories';
import { loadState } from '../../lib/storage';
import { location } from '../../data/location';
import { Button } from '../../components/ui/button/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Announce = () => {
    const { register, reset, handleSubmit } = useForm();
    const [params, setParams] = useState('');
    const [locationName, setLocationName] = useState('');
    const { data: category } = useGetCategories();
    const user = loadState("user");

    const navigate = useNavigate()

    const handleSelectCategory = (e) => {
        setParams(e.target.value);
    };

    const handleSelectLocation = (e) => {
        setLocationName(e.target.value);
    };

    const { mutate } = usePostAnnounce(params, locationName);



    const onSubmit = (data) => {
        const currentDate = new Date();
        const options = { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
        const formattedDate = currentDate.toLocaleString('en-US', options);
        data.date = formattedDate;
        reset()
        mutate(data, {
            onSuccess: (data) => {
                reset();
                navigate("/announce")
                alert("E'lon muvaffaqiyatli joylandi!")
            }
        });
        
    };
    
    


    return (
        <div className='bg-primary pt-[100px] pb-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container">
                    <h2 className='text-[24px] text-black-out font-bold mb-6'>E’lon berish</h2>
                    <div className='bg-white p-8 mb-6 rounded-lg'>
                        <h2 className='text-[20px] text-black font-medium mb-7'>Bizga e’loningiz haqida gapirib bering</h2>
                        <div className='flex flex-col mb-6 max-w-[794px]'>
                            <label className='text-[12px] text-gray mb-2' htmlFor="title">Sarlavha kiriting</label>
                            <input {...register("title", {required: true})} className='px-4 py-[14px] bg-primary border border-gray rounded-md outline-none' placeholder='Masalan iphone 13 Pro Max' type="text" id="title" />
                        </div>
                        <div className='flex flex-col max-w-[794px]'>
                            <label className='text-[12px] text-gray mb-2' htmlFor="category">Rukn</label>
                            <select
                                {...register("datakey", {required: true})}
                                className='px-4 py-[14px] bg-primary border border-gray w-full rounded-md outline-none'
                                onChange={handleSelectCategory}
                            >
                                <option
                                    selected
                                    disabled>
                                    Bo'limni tanlang
                                </option>
                                {category?.map((item) => (
                                    <option key={item.id} value={item.datakey}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>
                    <div className='bg-white p-8 mb-6 rounded-lg'>
                        <h2 className='text-[20px] text-black font-medium mb-3'>Bizga e’loningiz haqida gapirib bering</h2>
                        <p className='text-[14px] text-gray mb-4'>
                            Birinchi surat e’loningiz asosiy rasmi bo’ladi. Suratlar tartibini ularning ustiga bosib va olib o’tish bilan o’zgartirishingiz mumkin.
                        </p>
                        <div className='w-full'>
                            <input {...register("image")} className='px-4 py-[14px] bg-primary border border-gray w-full rounded-md outline-none' placeholder='Rasmga URL kiriting' type="text" id="image" />
                        </div>
                    </div>
                    <div className='bg-white p-8 mb-6 rounded-lg'>
                        <div className='flex flex-col'>
                            <label className='text-[12px] mb-2' htmlFor="description">Tavsif</label>
                            <textarea
                                {...register("description", {required: true})}
                                className=' bg-primary outline-none border border-gray rounded-md py-[14px] resize-none px-[16px] '
                                placeholder='E’lon haqida batafsil'
                                name="description"
                                id="description"
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>
                    </div>
                    <div className='bg-white p-8 mb-6 rounded-lg'>
                        <div className='w-full'>
                            <h2 className='text-[20px] text-black font-medium mb-3'>Narx belgilang</h2>
                            <label className='text-[12px] text-gray mb-3' htmlFor="price">Narx</label>
                            <input {...register("price")} className='px-4 py-[14px] bg-primary border border-gray w-full rounded-md outline-none' placeholder='Narx kiriting' type="number" id="price" />
                        </div>
                    </div>
                    <div className='bg-white p-8 mb-6 rounded-lg'>
                        <h2 className='text-[20px] text-black font-medium mb-7'>Siz bilan bog’lanish uchun</h2>
                        <div className='flex flex-col mb-6 max-w-[794px]'>
                            <label className='text-[12px] text-gray mb-2' htmlFor="name">Joylashuv</label>
                            <select
                                {...register("location", {required: true})}
                                className='px-4 py-[14px] bg-primary border border-gray w-full rounded-md outline-none'
                                name="location"
                                onChange={handleSelectLocation}
                                id="location"
                            >
                                <option selected disabled value="">
                                    Hududni tanlang
                                </option>
                                {location?.map((item) => (
                                    <option key={item.id} value={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='flex flex-col mb-6 max-w-[794px]'>
                            <label className='text-[12px] text-gray mb-2' htmlFor="name">Ism</label>
                            <input {...register("name")} className='px-4 py-[14px] bg-primary border border-gray rounded-md outline-none' placeholder='Ism kiriting' type="text" id="name" defaultValue={user?.user?.name} />
                        </div>
                        <div className='flex flex-col mb-6 max-w-[794px]'>
                            <label className='text-[12px] text-gray mb-2' htmlFor="email">Email-manzil</label>
                            <input {...register("email")} className='px-4 py-[14px] bg-primary border border-gray rounded-md outline-none' placeholder='Email-manzil kiriting' type="text" id="email" defaultValue={user?.user?.email} />
                        </div>
                        <div className='flex flex-col mb-6 max-w-[794px]'>
                            <label className='text-[12px] text-gray mb-2' htmlFor="phone">Telefon raqami</label>
                            <input {...register("phone", {required: true})} className='px-4 py-[14px] bg-primary border border-gray rounded-md outline-none' placeholder='+998 33 200 06 07' type="text" id="phone" />
                        </div>
                    
                    </div>

                    <div className='flex justify-end'>
                        <Button type='submit' className="px-16" variant='primary'>
                            E’lon joylash
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};
