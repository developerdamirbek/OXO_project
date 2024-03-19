import React, { Fragment, useState } from 'react';
import { ArrowIcon } from '../../../../assets/icons/components/arrow-icon';
import { PlusImg } from '../../../../assets/icons/components/plus-img';
import { loadState, saveState } from '../../../../lib/storage';
import { location } from '../../../../data/location';
import { Combobox, Transition, Dialog } from '@headlessui/react'
import { Button } from '../../../../components/ui/button/button';
import { EyeSlash } from '../../../../assets/icons/components/eye-slash';
import { EyeIcon } from '../../../../assets/icons/components/eye-icon';
import { FacebookIcon } from '../../../../assets/icons/components/facebook-icon';
import { YoutubeIcon } from '../../../../assets/icons/components/youtube-icon';
import { TiktokIcon } from '../../../../assets/icons/components/tiktok-icon';
import { TelegramIcon } from '../../../../assets/icons/components/telegram-icon';
import { InstagramIcon } from '../../../../assets/icons/components/instagram-icon';
import { useEditUser } from './service/mutation/useEditUser';
import { useForm } from "react-hook-form"
import { Logout } from './components/logout';
import { DeleteAccount } from './components/delete-accout';

export const Settings = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const [isOpen, setIsOpen] = useState(false);

  const { register, handleSubmit, setError, reset } = useForm()


  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };



  const [selected, setSelected] = useState('')

  const [query, setQuery] = useState('')

  const filteredLocation =
    query === ''
      ? location
      : location.filter((item) =>
        item.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )


  const token = loadState("user")

  const { mutate } = useEditUser(token?.user?.id)

  const handleSaveSettings = (data) => {
    const updatedUser = {
      name: token?.user?.name,
      surname: token?.user?.surname,
      email: token?.user?.email,
      id: token?.user?.id,
      ...data,
    };
    console.log(updatedUser);

    mutate(updatedUser, {
      onSuccess: (updatedUser) => {
        saveState("user", { user: updatedUser, accessToken: token?.accessToken })
        window.location.reload();
      }
    })
  };

  const [socialMediaLinks, setSocialMediaLinks] = React.useState({
    facebook: '',
    youtube: '',
    tiktok: '',
    telegram: '',
    instagram: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialMediaLinks(prevLinks => ({
      ...prevLinks,
      [name]: value
    }));
  };

  const submitLinks = (e) => {
    e.preventDefault();
    localStorage.setItem('socialMediaLinks', JSON.stringify(socialMediaLinks));
  };



  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className='w-[750px] mr-auto flex flex-col gap-4 ml-auto'>
          <div className='bg-white  rounded-md shadow-md py-[18px] px-6'>
            <div className='flex ic justify-between cursor-pointer' onClick={() => toggleAccordion(0)}>
              <p>Profilni tahrirlash</p>
              <span className={openAccordion === 0 ? "rotate-90" : ''}>
                <ArrowIcon />
              </span>
            </div>
            {openAccordion === 0 && (
              <form onSubmit={handleSubmit(handleSaveSettings)} className='py-8 px-6'>
                <div className='mb-6'>
                  <button
                    type="button"
                    onClick={openModal}
                    className="rounded-full bg-primary border-2 border-dotted p-[22px] text-sm font-medium     "
                  >
                    <PlusImg />
                  </button>
                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto"
                      onClose={closeModal}
                    >
                      <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                        </Transition.Child>
                        <span
                          className="inline-block h-screen align-middle"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              Rasmga URL kiriting
                            </Dialog.Title>
                            <div className="mt-2">
                              <input
                                {...register("img")}
                                placeholder="https://"
                                className="w-full py-2 pl-3 pr-12 bg-primary border-2 border-gray rounded-lg outline-none"
                                defaultValue={token?.user?.img}
                                type="text"
                              />
                              <p className="text-red-500 text-sm mt-1">
                              </p>
                            </div>
                            <div className="mt-4 flex justify-end">
                              <button
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              >
                                Saqlash
                              </button>
                              <button
                                type="button"
                                className="inline-flex justify-center px-4 py-2 ml-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                              >
                                Bekor qilish
                              </button>
                            </div>
                          </div>
                        </Transition.Child>
                      </div>
                    </Dialog>
                  </Transition>
                </div>
                <div className='w-full flex flex-col mb-6'>
                  <label className=' text-argent text-[12px] mb-4 ' htmlFor="name">Ismingiz</label>
                  <input {...register("name")} className=' text-[14px] py-[14px] px-4 bg-transparent border-2 outline-none rounded-lg border-gray ' defaultValue={token?.user.name} type="text" />
                </div>
                <div className='w-full flex flex-col mb-6'>
                  <label className=' text-argent text-[12px] mb-4 ' htmlFor="surname">Familiyangiz</label>
                  <input {...register("surname")} className=' text-[14px] py-[14px] px-4 bg-transparent border-2 outline-none rounded-lg border-gray ' defaultValue={token?.user.surname} type="text" />
                </div>
                {/* <div className='w-full flex flex-col mb-6'>
                  <label className=' text-argent text-[12px] mb-4 ' htmlFor="name">Joylashuv</label>
                  <select
                    className=' text-[14px] py-[14px] px-4 bg-transparent border-2 outline-none rounded-lg border-gray'
                    name="location" id="location"
                    value={selectedLocation}
                    onChange={handleLocationChange}>
                    <option
                      value="none">
                      Hududni tanlang
                    </option>
                    {location?.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div> */}
                <div className='w-full flex flex-col mb-6'>
                  <label className=' text-argent text-[12px] mb-4 ' htmlFor="email">Email</label>
                  <input {...register("email")} className=' text-[14px] py-[14px] px-4 bg-transparent border-2 outline-none rounded-lg border-gray ' defaultValue={token?.user.email} type="text" />
                </div>
                <div className={`flex flex-col mb-10 `}>
                  <label className='text-[12px] mb-4 text-gray' htmlFor="password">Parolingizni kiriting</label>
                  <div className='relative'>
                    <input
                      {...register("password")}
                      type={showPassword ? "text" : "password"}
                      placeholder="Parol kiriting"
                      id="password"
                      className={`border-2 border-gray w-full outline-none rounded-md p-[14px] text-[14px] `}
                    />
                    <span className="absolute cursor-pointer right-4 top-[50%] translate-y-[-50%]" onClick={togglePasswordVisibility}>
                      {!showPassword ? <EyeSlash /> : <EyeIcon />}
                    </span>
                  </div>
                </div>
                <div className='flex justify-end'>
                  <Button type="submit" className="py-4 px-20" variant="primary">
                    Saqlash
                  </Button>
                </div>
              </form>
            )}
          </div>
          {/* <div className='bg-white rounded-md shadow-md py-[18px] px-6'>
            <div className='flex items-center justify-between cursor-pointer' onClick={() => toggleAccordion(1)}>
              <p>Parolni o’zgartirish</p>
              <span className={openAccordion === 1 ? "rotate-90" : ''}>
                <ArrowIcon />
              </span>
            </div>
            {openAccordion === 1 && (
              <div className='py-8  px-2'>
                <div className={`flex flex-col mb-10 `}>
                  <label className='text-[12px] mb-4 text-gray' htmlFor="password">Yangi parol kiriting</label>
                  <div className='relative'>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Parol kiriting"
                      id="password"
                      className={`border-2 border-gray w-full outline-none rounded-md p-[14px] text-[14px] `}
                    />
                    <span className="absolute cursor-pointer right-4 top-[50%] translate-y-[-50%]" onClick={togglePasswordVisibility}>
                      {!showPassword ? <EyeSlash /> : <EyeIcon />}
                    </span>
                  </div>
                </div>
                <div className='flex justify-end'>
                  <Button type="submit" className="py-4 px-20" variant="primary">
                    Saqlash
                  </Button>
                </div>
              </div>
            )}
          </div> */}
          <div className='bg-white rounded-md shadow-md py-[18px] px-6'>
            <div className='flex ic justify-between cursor-pointer' onClick={() => toggleAccordion(2)}>
              <p>Ijtimoiy tarmoqlar</p>
              <span className={openAccordion === 2 ? "rotate-90" : ''}>
                <ArrowIcon />
              </span>
            </div>
            {openAccordion === 2 && (
              <form onSubmit={submitLinks} className='py-8 px-2'>
                <h2 className='text-[20px] text-black-out font-bold mb-4'>Ijtimoiy tarmoqlarni kiritish</h2>
                <div className='w-[334px] relative mb-2'>
                  <input value={socialMediaLinks.facebook}
                    onChange={handleChange} placeholder='fb.com/damirbekx' className='p-4 pl-[56px] w-full  border border-gray rounded-lg outline-none' type="text" />
                  <span className='absolute left-4 top-4 z-10 '>
                    <FacebookIcon />
                  </span>
                </div>
                <div className='w-[334px] relative mb-2'>
                  <input value={socialMediaLinks.youtube}
                    onChange={handleChange} placeholder='youtube.com/@damirbekx' className='p-4 pl-[56px] w-full  border border-gray rounded-lg outline-none' type="text" />
                  <span className='absolute left-4 top-4 z-10 '>
                    <YoutubeIcon />
                  </span>
                </div>
                <div className='w-[334px] relative mb-2'>
                  <input value={socialMediaLinks.tiktok}
                    onChange={handleChange} placeholder='tiktok.com/damirbekx' className='p-4 pl-[56px] w-full  border border-gray rounded-lg outline-none' type="text" />
                  <span className='absolute left-4 top-4 z-10 '>
                    <TiktokIcon />
                  </span>
                </div>
                <div className='w-[334px] relative mb-2'>
                  <input value={socialMediaLinks.telegram}
                    onChange={handleChange} placeholder='t.me/damirbekx' className='p-4 pl-[56px] w-full  border border-gray rounded-lg outline-none' type="text" />
                  <span className='absolute left-4 top-4 z-10 '>
                    <TelegramIcon />
                  </span>
                </div>
                <div className='w-[334px] relative mb-8'>
                  <input value={socialMediaLinks.instagram}
                    onChange={handleChange} placeholder='instagram.com/damirbekx' className='p-4 pl-[56px] w-full  border border-gray rounded-lg outline-none' type="text" />
                  <span className='absolute left-4 top-4 z-10 '>
                    <InstagramIcon />
                  </span>
                </div>
                <Button type='submit' className='px-9' variant="primary">
                  Saqlash
                </Button>
              </form>
            )}
          </div>
          <div className='bg-white rounded-md shadow-md py-[18px] px-6'>
            <div className='flex ic justify-between cursor-pointer' onClick={() => toggleAccordion(3)}>
              <p>Joylashuv</p>
              <span className={openAccordion === 3 ? "rotate-90" : ''}>
                <ArrowIcon />
              </span>
            </div>
            {openAccordion === 3 && (
              <div className='py-4 px-6'>

              </div>
            )}
          </div>
          <div className='bg-white rounded-md flex items-center gap-5 shadow-md py-[18px] px-6'>
            <div>
              <Logout/>
            </div>
            <div>
              <DeleteAccount/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
