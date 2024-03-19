import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../../components/ui/button/button';
import { saveState } from '../../lib/storage';
import { useNavigate } from 'react-router-dom';
import { EyeSlash } from '../../assets/icons/components/eye-slash';
import { EyeIcon } from '../../assets/icons/components/eye-icon';
import { request } from '../../config/request';
import Cookies from 'js-cookie';

const schema = z.object({
    name: z.string().min(3).max(15),
    surname: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(8),
    
});


export const Register = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });
    const navigate = useNavigate()



    const submit = (data) => {
        request.post("/register", data).then((res) => {
            if (res.data) {
                Cookies.set("cookiesToken", data?.accessToken)
                saveState("user", res.data);
                navigate('/')
            }
        });
        reset();
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className={`flex flex-col mb-4 `}>
                <label className='text-[12px] mb-4 text-gray' htmlFor="name">Ismingiz</label>
                <input
                    type="text"
                    placeholder="Ismingizni kiriting"
                    {...register('name')}
                    id="name"
                    className={`border-2 outline-none rounded-md p-[14px] text-[14px] ${errors.name ? 'border-red-500' : 'border-gray'}`}
                />
                {errors.name && <p className="text-red-500 text-[13px]">Ism kamida 3 ta belgidan iborat bo'lishi kerak</p>}
            </div>
            <div className={`flex flex-col mb-4 `}>
                <label className='text-[12px] mb-4 text-gray' htmlFor="name">Familiyangiz</label>
                <input
                    type="text"
                    placeholder="Familiyangizni kiriting"
                    {...register('surname')}
                    id="surname"
                    className={`border-2 outline-none rounded-md p-[14px] text-[14px] ${errors.surname ? 'border-red-500' : 'border-gray'}`}
                />
                {errors.surname && <p className="text-red-500 text-[13px]">Familiya kamida 3 ta belgidan iborat bo'lishi kerak</p>}
            </div>
            <div className={`flex flex-col mb-4 `}>
                <label className='text-[12px] mb-4 text-gray' htmlFor="email">Elektron pochta</label>
                <input
                    type="text"
                    placeholder="example@mail.com"
                    {...register('email')}
                    id="email"
                    className={`border-2 outline-none rounded-md p-[14px] text-[14px] ${errors.email ? 'border-red-500' : 'border-gray'}`}
                />
                {errors.email && <p className="text-red-500 text-[13px]">Emailni to'g'ri kiriting</p>}
            </div>
            <div className={`flex flex-col mb-4 `}>
                <label className='text-[12px] mb-4 text-gray' htmlFor="password">Parol yarating</label>
                <div className='relative'>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Parol kiriting"
                        {...register('password')}
                        id="password"
                        className={`border-2 w-full outline-none rounded-md p-[14px] text-[14px] ${errors.password ? 'border-red-500' : 'border-gray'}`}
                    />
                    <span className="absolute cursor-pointer right-4 top-[50%] translate-y-[-50%]" onClick={togglePasswordVisibility}>
                        {!showPassword ? <EyeSlash /> : <EyeIcon />}
                    </span>
                </div>
                {errors.password && <p className="text-red-500 text-[13px]">Parol kamida 8 ta belgidan iborat bo'lishi kerak</p>}
            </div>
            
            <Button type='submit' variant='primary' className='w-full py-[14px] text-[16px]'>Ro'yxatdan o'tish</Button>
        </form>
    );
};
