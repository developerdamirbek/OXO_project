import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../../components/ui/button/button';
import { EyeSlash } from '../../assets/icons/components/eye-slash';
import { EyeIcon } from '../../assets/icons/components/eye-icon';
import { useNavigate } from 'react-router-dom';
import { useLoginUsers } from './service/mutation/useLoginUsers'
import { saveState } from '../../lib/storage';
import { request } from '../../config/request';
import Cookies from 'js-cookie';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });

    const navigate = useNavigate()


    const onSubmit = (data) => {
        request.post("/login", data).then((res) => {
            if (res.data) {
                saveState("user", res.data);
                Cookies.set("cookiesToken", res.date)
                navigate("/");
                console.log(res.data);
            }
        });
        const cookie = Cookies.set("cookiesToken", res.date)
        console.log(cookie);
    };


    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`flex flex-col mb-4 `}>
                <label className='text-[12px] mb-4 text-gray ' htmlFor="phone">Elektron pochta</label>
                <input
                    type="text"
                    placeholder="example@mail.com"
                    {...register('email', { required: true })}
                    id="email"
                    className={`border-2 outline-none border-gray rounded-md p-[14px] text-[14px] ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500">Xatolik yuz berdi!</p>}
            </div>
            <div className={`flex flex-col mb-[63px] ${errors.password ? 'has-error' : ''}`}>
                <label className='text-[12px] mb-4 text-gray ' htmlFor="password">Parol</label>
                <div className="password-input relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Parolni kiriting"
                        {...register('password')}
                        id="password"
                        className={`border-2 w-full border-gray outline-none rounded-md p-[14px] text-[14px] ${errors.password ? 'border-red-500' : ''}`}
                    />
                    <span className="absolute cursor-pointer right-4 top-[50%] translate-y-[-50%]" onClick={togglePasswordVisibility}>
                        {!showPassword ? <EyeSlash /> : <EyeIcon />}
                    </span>
                </div>
                {errors.password && <p className="text-red-500">Parol kamida 8 ta belgidan iborat bo'lishi kerak!</p>}
            </div>
            <Button type='submit' variant='primary' className='w-full py-[14px] text-[16px]'>Kirish</Button>
        </form>
    );
};
