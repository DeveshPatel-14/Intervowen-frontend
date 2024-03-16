import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const AuthorFeedback = () => {
  return (
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
                                <div class="py-2 px-4  text-xs leading-3 text-[#3db952] rounded-full bg-[#DCFCE7]">Reviewed</div>
                            </div>
                        </div>
                        <div className="w-full pt-4">
                            <div className="w-full rounded-2xl bg-white p-2">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium   focus:outline-none focus-visible:ring">
                                                <span className='text-blue-900'>Reviews</span>
                                                <ChevronUpIcon
                                                    className={`${open ? 'rotate-180 transform' : ''
                                                        } h-5 w-5 text-blue-900`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                                If you're unhappy with your purchase for any reason, email us
                                                within 90 days and we'll refund you in full, no questions asked.
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
  )
}

export default AuthorFeedback