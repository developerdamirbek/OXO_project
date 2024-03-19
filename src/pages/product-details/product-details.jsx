import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingle } from './service/query/useGetSingle'
import { Searchbar } from '../../components/searchbar/searchbar'
import userImg from '../../assets/images/user.png'
import { Button } from '../../components/ui/button/button'
import { ArrowIcon } from '../../assets/icons/components/arrow-icon'
import { UserLocation } from '../../assets/icons/components/user-location'
import ImageZoom from './components/image-zoom'
import { EyeIcon } from '../../assets/icons/components/eye-icon'
import { Complaint } from './components/complaint'
import adsImg from '../../assets/images/ads.png'
import { PhoneIcon } from '../../assets/icons/components/phone-icon'
import { ShowContact } from './components/show-contact'
import { AttachIcon } from '../../assets/icons/components/attach-icon'

export const ProductDetails = () => {

    const { id } = useParams()

    const { data: single } = useGetSingle(id)



    return (
        <>
            <section>
                <Searchbar />
            </section>
            <section className='bg-primary pt-[220px] pb-[64px]'>
                <div className="container">
                    <div className='flex items-center mb-6 h-full justify-between gap-5  '>
                        <div className='max-w-[711px] w-full h-[460px] flex items-center justify-center overflow-hidden' >

                            <ImageZoom
                                smallImageSrc={single?.image}
                                largeImageSrc={single?.image}
                            />
                        </div>
                        <div className='flex flex-col gap-[17px] w-[375px]'>
                            <div className='bg-white rounded-lg py-6 px-4'>
                                <h3 className='text-[20px] font-medium mb-7'>Foydalanuvchi</h3>
                                <div className='flex gap-[25px]'>
                                    <div className='w-10 h-10 mt-1 overflow-hidden'>
                                        <img className='object-cover object-center' src={userImg} alt="" />
                                    </div>
                                    <div>
                                        <h3 className='text-[16px] font-semibold mb-[6px] text-dark'>{single?.name}</h3>
                                        <p className='text-[14px] text-dark mb-2'>{single?.date}</p>
                                        <span className='inline-block text-argent text-[14px] mb-2'>Online</span>
                                        <Link>
                                            <Button className='flex items-center text-dark text-[14px] font-semibold gap-2'>
                                                Barcha e'lonlar <ArrowIcon />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-lg py-6 px-4'>
                                <div className='flex items-center mb-4 gap-6 '>
                                    <div>
                                        <UserLocation />
                                    </div>
                                    <div>
                                        <h3 className='text-[16px] font-semibold mb-[6px] text-dark'>{single?.location}</h3>
                                    </div>
                                </div>
                                <div className='w-full rounded-lg overflow-hidden'>
                                    {single?.location == "Andijon viloyati" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193357.87458247703!2d72.02428259206802!3d40.77924788744824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc901d6b13d4ef%3A0xfc45bcaa7973dfac!2sAndijan%2C%20Andijan%20region%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1710740438188!5m2!1sen!2sus" width={'100%'} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    }
                                    {single?.location == "Qoraqalpog‘iston Respublikasi" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5958658.711867191!2d53.895840671231944!3d43.17799073877798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41e9b68886e89265%3A0xc7f1caf0e51ae55a!2sRepublic%20of%20Karakalpakstan%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1710740863196!5m2!1sen!2sus" width={'100%'} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                                    }
                                    {single?.location == "Buxoro viloyati" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98121.86132961998!2d64.34039588235876!3d39.77763909852806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2sBukhara%2C%20Bukhara%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1710740905356!5m2!1sen!2sus" width={'100%'} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                                    }
                                    {single?.location == "Jizzax viloyati" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195267.02520053703!2d67.68958111627296!3d40.1189500645926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b29442f6b6d4d9%3A0x9278c40ee88910e2!2sJizzakh%2C%20Jizzakh%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1710740947562!5m2!1sen!2sus" width={"100%"} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                                    }
                                    {single?.location == "Qashqadaryo viloyati" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24830.89047304608!2d65.7333314338262!3d38.927147376174354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea3e4135d6153%3A0xc01d2f182ae5f29c!2sKashkadarya%2C%20Qashqadaryo%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1710740992123!5m2!1sen!2sus" width={'100%'} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                                    }
                                    {single?.location == "Navoiy viloyati" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97663.42771348832!2d65.28921135328756!3d40.098111673837074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f51c6d7e12931b3%3A0x613f6eb9636019bb!2sNavoi%2C%20Samarqand%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1710741042106!5m2!1sen!2sus" width={'100%'} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                                    }
                                    {single?.location == "Namangan viloyati" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192799.77073521176!2d71.47980894680292!3d40.970609501133595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4c1b2e60eea5%3A0x36ef7252c4c12106!2sNamangan%2C%20Namangan%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1710741069425!5m2!1sen!2sus" width={'100%'} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                                    }
                                    {single?.location == "Samarqand viloyati" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196633.24527965148!2d66.80307308871085!3d39.64083630340456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d191960077df7%3A0x487636d9d13f2f57!2sSamarkand%2C%20Samarqand%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1710741123689!5m2!1sen!2sus" width={'100%'} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                                    }
                                    {single?.location == "Surxandaryo viloyati" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1607094.0300143121!2d66.13349555018192!3d38.12029537607697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5110fcbfa23c3%3A0xb095bebbc47ce718!2sSurxondaryo%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1710741182645!5m2!1sen!2sus" width={'100%'} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                                    }
                                    {single?.location == "Sirdaryo viloyati" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96591.8930255872!2d68.5879206022436!3d40.83901836230936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ade82acb853cb1%3A0xab522d4ebb3e69d!2sSyrdarya%2C%20Sirdaryo%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1710741231854!5m2!1sen!2sus" width={'100%'} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                                    }
                                    {single?.location == "Toshkent viloyati" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383577.1244486076!2d69.1295009808879!3d41.31547033565216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afbcaa73f2ce4d%3A0x57f19ae913e2f367!2sTashkent%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1710741316789!5m2!1sen!2sus" width={'100%'} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                                    }
                                    {single?.location == "Farg‘ona viloyati" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97257.84088758695!2d71.70805932181186!3d40.37987633026141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83431937abc5%3A0xcfa4d876b34e7bbc!2sFergana%2C%20Fergana%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1710741342355!5m2!1sen!2sus" width={'100%'} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                                    }
                                    {single?.location == "Xorazm viloyati" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d765562.9002627145!2d60.193219722052255!3d41.45050180463867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41de3cbf7f89baef%3A0xe874bc482a2737e!2sXorazm%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1710741378957!5m2!1sen!2sus" width={"100%"} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                                    }
                                    {single?.location == "Toshkent shahri" && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.8398699716!2d69.11455318234162!3d41.282737946764215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1710741419331!5m2!1sen!2sus" width={'100%'} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-6 '>
                        <div className='flex flex-col gap-[26px] w-full'>
                            <div className='rounded-lg py-6 px-8 bg-white'>
                                <p className='text-[14px] mb-4'>Joylashtirildi: {single?.date}</p>
                                <h3 className='text-[28px] mb-4'>{single?.title}</h3>
                                <div className='flex items-center mb-4 gap-5'>
                                    <strong className='text-[28px] text-vivaldi-red font-bold '>${single?.price}</strong>
                                    <span className='text-argent text-[20px]'>Kelishiladi</span>
                                </div>
                                <h2 className='text-[24px] text-dark font-medium mb-4'>Tavsifi</h2>
                                <p className='text-[14px] text-dark pb-10 border-b border-b-gray mb-5'>{single?.description}</p>
                                <div className='flex items-center justify-between'>
                                    <p className=' text-[14px]'>ID: {single?.id}</p>
                                    <p className='flex items-center gap-2 text-[14px]'>
                                        <EyeIcon />
                                        ko'rishlar: 137
                                    </p>
                                    <Complaint />
                                </div>
                            </div>
                            <div className='rounded-lg py-6 px-8 bg-white'>
                                <div>
                                    <div className='flex ic justify-between'>
                                        <div className='flex items-center gap-[25px]'>
                                            <div className='w-10 h-10 overflow-hidden'>
                                                <img className='object-cover object-center' src={userImg} alt="profile image" />
                                            </div>
                                            <div>
                                                <h3 className='text-[16px] font-semibold mb-[4px] text-dark'>{single?.name}</h3>
                                                <p className='text-[14px] text-dark mb-[6px]'>{single?.date}</p>
                                                <span className='inline-block text-argent text-[14px] mb-2'>Online</span>

                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <PhoneIcon />
                                            <p className='text-[16px] font-medium'>
                                                XXX XXX XXX
                                            </p>
                                            <ShowContact phone={single?.phone} userImg={userImg} userName={single?.name} />
                                        </div>
                                    </div>
                                </div>
                                <textarea className='w-full mb-5 resize-none p-6 outline-none rounded-xl bg-chefs' placeholder='Xabaringgizni yozing...' name="" id="" cols="30" rows="10"></textarea>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <label htmlFor="file-upload" className="flex cursor-pointer items-center gap-3">
                                            <AttachIcon />
                                            <span>Fayl biriktirish</span>
                                        </label>
                                        <input className='hidden' id="file-upload" type="file" />
                                    </div>
                                    <div>
                                        <Button variant="primary">
                                            Yuborish
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${adsImg})` }} className='rounded-lg overflow-hidden bg-center bg-contain bg-no-repeat py-6 px-8 bg-white w-[375px]'>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
