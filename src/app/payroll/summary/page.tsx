"use client"
import Icon from '@/Components/utils/Icon'
import Link from 'next/link'
import React, { useState } from 'react'

const Page = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <main className='ml-[370px] mb-[100px]'>

            <div className='h-[132px] flex items-center px-[70px] border-b-[3px] border-[#F0EEEE]'>
                <p className="text-[#000000] font-[600] text-[24px] flex-1">
                    PAYROLL MANAGEMENT
                </p>
                <div className='flex'>
                    <p className="text-[#000000] border-r-[3px] pr-[20px] border-[#8E8E8E] font-[500] text-[20px] flex-1">
                        <em>Welcome</em>
                    </p>

                    <div className='flex'>
                        <Icon name='profile.svg' size={20} classes='mx-[12px]' />
                        <p className="text-[#000000] font-[500] text-[20px] flex-1">
                            Johnson Ltd
                        </p>
                        <Icon name='caret-down.svg' size={20} classes='ml-[12px]' />
                    </div>
                </div>
            </div>

            <div className="px-[70px] ">

                <div className='flex justify-between items-center border-b-[1px] border-[#CECECE] mb-[40px] py-[37px]'>

                    <div className="flex w-[100%] items-center justify-between">
                        <Link href="/payroll">
                            <div className='flex w-full items-center'>
                                <div className='flex p-[14px] border-[#C4C4C4] rounded-[5px] border'>
                                    <Icon name='caret-down.svg' size={20} classes='rotate-[90deg]' />
                                </div>
                                <p className='font-[500] text-[24px] ml-[40px]'>Payroll Summary</p>
                            </div>
                        </Link>

                        <div className="flex items-center">
                            <div className="flex items-center border-[#C4C4C4] border py-[6px] px-[12px] text-[18px] rounded-[5px]">
                                <p>Cancel</p>
                            </div>

                            <div onClick={() => setOpenModal(true)} className="flex cursor-pointer items-center text-white ml-[13px] py-[6px] bg-[#8D00CA] px-[12px] text-[18px] rounded-[5px]">
                                <p>Submit for Approval</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flex text-[#000000] items-center'>
                    <div className="flex flex-1 items-center justify-between">
                        <div className='flex flex-col '>
                            <p className='font-[500] text-[#000000] text-[20px]'>Select payout date</p>
                            <div className="flex mt-[15px] items-center border-[#C4C4C4] border py-[6px] px-[12px] text-[18px] rounded-[5px]">
                                <p>2023-06-11</p>
                            </div>
                        </div>
                        <div>
                            <p className='font-[500] text-[20px]'>Available Balance</p>
                            <p className='font-[500] mt-[15px] text-[28px]'>N2,000,000.00</p>
                        </div>
                    </div>

                    <div className="flex mt-[22px] ml-[40px] items-center border-[#C4C4C4] border py-[6px] px-[12px] text-[18px] rounded-[5px]">
                        <p>Fund Wallet</p>
                    </div>
                </div>

                <div className='px-[40px] flex py-[20px] mt-[50px] rounded-[10px] border-[2px] border-[#DCDCDC]'>
                    <div className="mr-[70px]">
                        <p className='text-[#8D00CA] font-[600] text-[20px]'>Total Salary</p>
                        <p className='font-[600] text-[40px]'>N900,000.00</p>
                    </div>
                    <div className="mr-[70px]">
                        <p className='text-[#8D00CA] font-[600] text-[20px]'>Total Employee</p>
                        <p className='font-[600] text-[40px]'>2</p>
                    </div>
                    <div className="">
                        <p className='text-[#8D00CA] font-[600] text-[20px]'>Total Processing fees</p>
                        <p className='font-[600] text-[40px]'>N2,350.00</p>
                    </div>
                </div>

                <div className='mt-[40px] overflow-auto border-[2px] border-[#DCDCDC] rounded-[10px]'>
                    <div className='px-[36px] py-[8px] bg-[#F8F8F8]'>
                        <p className='font-[500] text-[#000000] text-[20px]'>Total Payroll charge</p>
                    </div>
                    <div className='px-[36px] py-[8px] border-t-[2px] border-[#DCDCDC]'>
                        <p className='font-[500] text-[#000000] text-[28px]'>N902,350.00</p>
                    </div>
                </div>
            </div>

            {openModal && (<div className=''>
                <div className="absolute top-0 bg-black bg-opacity-[0.63] left-0 w-[100%] h-[100%]">
                    <div className="flex items-center justify-center w-[100%] h-[100%]">
                        <div className="flex relative flex-col  p-[90px] rounded-[10px] bg-[#FFFFFF] w-[590px] ">

                            <div onClick={() => setOpenModal(false)} className=" cursor-pointer absolute top-[40px] right-[40px]">
                                <Icon name='close.svg' size={24} classes='' />
                            </div>

                            <div className="flex flex-col text-center items-center">
                                <Icon name='done.svg' size={91} classes='' />
                                <p className='text-[32px] font-[600] mt-[23px] '>PAYROLL SCHEDULE SENT FOR APPROVAL</p>
                                <p className='text-[24px] my-[38px] font-[400] text-[#090000] '>You have successfully sent out a payroll schedule for approval. We will notify you as it progresses through the approval flow.</p>

                                <Link className='w-full' href={'/payroll/status'}>
                                    <div className="flex items-center text-center text-white w-full bg-[#8D00CA] py-[11px] text-[20px] font-[600] rounded-[5px]">
                                        <p className='w-full text-center'>Ok</p>
                                    </div>
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>

            </div>)}

        </main>
    )
}

export default Page