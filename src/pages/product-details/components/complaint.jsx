import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { RedFlag } from '../../../assets/icons/components/red-flag'
import { Button } from '../../../components/ui/button/button'

export const Complaint = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="flex items-center gap-2 text-vivaldi-red text-[14px]"
        >
          <RedFlag/>
          Shikoyat qilish
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
                    className="text-lg mb-4 font-medium leading-6 text-gray-900"
                  >
                    Shikoyat matnini kitiring!
                  </Dialog.Title>
                  <div className="mt-2">
                    <textarea className='w-full resize-none border-2 rounded-md outline-none p-3 border-gray' placeholder='Matn kiriting...' name="complaint" id="complaint" cols="30" rows="7"></textarea>
                  </div>

                  <div className="mt-4 flex items-center gap-4">
                    <Button
                      type="button"
                      className=""
                      onClick={closeModal}
                      variant='primary'
                    >
                      Yuborish
                    </Button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Bekor qilish
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
