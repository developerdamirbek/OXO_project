import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { EyeIcon } from '../../../assets/icons/components/eye-icon'

export const Avatar = ({ img1, img2 }) => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className=" flex  items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md relative group px-4 py-4 text-sm font-medium text-white hover:bg-black/30   "
                >
                    <img className=' w-full object-cover' src={img1} alt="" />
                    <span className=' absolute top-[50%] left-[50%] translate-x-[-50%] hidden translate-y-[-50%] text-center z-[1000] text-[20px]  group-hover:block '>
                        Rasmni <br />
                        ko'rish
                    </span>
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-[600px] flex items-center justify-center  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="mt-2">
                                        <img src={img2} alt="" />
                                    </div>

                                        <button
                                            type="button"
                                            className="absolute top-0 left-4 text-[50px]"
                                            onClick={closeModal}
                                        >
                                            &times;
                                        </button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
