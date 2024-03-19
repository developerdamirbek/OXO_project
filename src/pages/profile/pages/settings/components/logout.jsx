import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Logout = () => {
    let [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate()

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    function logout(){
        localStorage.removeItem("user")
        navigate('/')
    }

    return (
        <>
            <div className=" inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md border border-dark hover:text-dark bg-dark px-4 py-2 text-sm font-medium text-white hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                    Chiqish
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Akkauntdan chiqishni xohlaysizmi?
                                    </Dialog.Title>


                                    <div className="mt-4 flex items-center gap-5">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Yo'q
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={logout}
                                        >
                                            Ha
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
