import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const ReviewerFeedback = () => {

    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div>
            <div className='flex flex-col justify-center items-center w-full'>
                <div aria-label="group of cards" tabindex="0" class="focus:outline-none py-8 w-full">
                    <div class="lg:flex lg:flex-col items-center justify-center w-full">
                        <div tabindex="0" aria-label="card 1" class=" w-full mb-7 bg-white p-6 shadow rounded">

                            <div class="flex items-center">
                                <div class="flex items-start justify-between w-full">
                                    <div class="pl-3">
                                        <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800 w-fit">Machine Learning: LSTM Trees</p>
                                        <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-2 text-[#BF83FF] hover:cursor-pointer w-fit">View file</p>
                                    </div>
                                </div>
                            </div>
                            <div class="px-2">
                                <p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-600">Presenting a bunch of ideas revolving around the concept of LSTM Trees in ML</p>

                                <div tabindex="0" class="focus:outline-none flex">
                                    <button className='text-sm leading-5 text-[#3A974C] bg-white hover:bg-[#3A974C] hover:text-white px-4 py-2 rounded' onClick={openModal}>Send Review</button>
                                    <button className='text-sm leading-5 text-[#5B93FF] bg-white hover:bg-[#5B93FF] hover:text-white px-4 py-2 rounded' onClick={openModal}>Add Review</button>

                                </div>
                            </div>
                            <div className="w-full pt-4">
                                <div className="w-full rounded-2xl bg-white p-2">
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium   focus:outline-none focus-visible:ring">
                                                    <span className='text-blue-900'>Your Reviews</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-blue-900`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                                    <div className='flex flex-col gap-6'>

                                                        <div >
                                                            <p>If you're unhappy with your purchase for any reason, email us
                                                                within 90 days and we'll refund you in full, no questions asked.</p>
                                                            <div className='flex flex-row gap-2 mt-2'>
                                                                <button className='bg-white text-[#3A974C] py-1 px-3 rounded hover:bg-[#3A974C] hover:text-white'>Edit</button>
                                                                <button className='bg-white text-[#c93f3f] py-1 px-3 rounded hover:bg-[#c93f3f] hover:text-white'>Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg text-center font-medium leading-6 text-gray-900"
                                    >
                                        Give your review
                                    </Dialog.Title>
                                    <div className=" my-10 flex gap-4 flex-col">

                                        <div className='flex flex-row gap-10 items-center'>
                                            <textarea
                                                className="w-full rounded-lg border-gray-500 p-4 text-sm shadow-lg resize-y"
                                                placeholder='Enter your review here'
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default ReviewerFeedback