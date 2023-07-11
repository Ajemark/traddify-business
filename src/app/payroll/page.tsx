import Icon from '@/Components/utils/Icon'
import SelectOptions from '@/Components/utils/SelectOptions'
import Table from '@/Components/utils/Table'
import Link from 'next/link'
import React from 'react'

const Payroll = () => {

    return (
        <main className='ml-[370px] mb-[100px]'>

            <div className="px-[70px] ">

                <div className='flex justify-between items-center border-b-[1px] border-[#CECECE] mb-[40px] py-[37px]'>

                    <p className='font-[500] text-[#08000C] text-[24px]'>Employee Payroll Schedule</p>

                    <div className='flex'>
                        <div className="flex items-center font-[500] text-[18px] border-[#C4C4C4] border-[1px] px-[20px] rounded-[5px]">
                            <span>Payroll month:</span>
                            <SelectOptions classes='w-full flex justify-between p-[6px] rounded-[5px] ' />
                        </div>

                        <Link href={'/payroll/summary'}>
                            <div className="flex items-center text-white ml-[13px]  py-[6px] bg-[#8D00CA] px-[12px] text-[18px] rounded-[5px]">
                                <p>Proceed to Summary</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='flex justify-between w-full'>
                    <div className='flex'>
                        <div className="flex items-center font-[500] text-[20px] border-[#C4C4C4] border-[1px] px-[20px] rounded-[5px]">
                            <span>Pay:</span>
                            <SelectOptions classes='w-full flex justify-between p-[6px] rounded-[5px] ' />
                        </div>

                        <div className="flex items-center ml-[13px] border-[#C4C4C4] border-[1px] px-[10px] rounded-[5px]">
                            <input type="text" className='outline-none' />
                            <Icon name='search.svg' size={20} classes='ml-[12px]' />
                        </div>
                    </div>

                    <div className='h-[42px] w-[46px] border-[1px] border-[#C4C4C4] py-[8px] px-[20px] rounded-[5px] flex'>
                        <Icon name='threedotspurple.svg' size={10} classes=' h-auto' />
                    </div>

                </div>

                <div className='px-[40px] flex py-[20px] mt-[50px] rounded-[#8D00CA] border-[2px] border-[#DCDCDC]'>
                    <div className="mr-[70px]">
                        <p className='text-[#8D00CA] font-[600] text-[20px]'>Total Salary</p>
                        <p className='font-[600] text-[40px]'>N0.00</p>
                    </div>
                    <div className="">
                        <p className='text-[#8D00CA] font-[600] text-[20px]'>Total Employee</p>
                        <p className='font-[600] text-[40px]'>0</p>
                    </div>
                </div>


                <div className='flex flex-col mt-[50px] rounded-[10px] border-[2px] border-[#DCDCDC]'>
                    <div className='flex justify-between items-center'>
                        <p className='font-[500] text-[24px] p-[20px]'>Employee data</p>
                        <Link href={'/payroll/add'}>
                            <div className='flex m-[30px] cursor-pointer'>
                                <Icon name='addicon.svg' size={27} classes='mr-[18px] rotate-[90deg]' />
                                <p className="text-[20px] font-[500] text-[#8D00CA]">Add another employee</p>
                            </div>

                        </Link>
                    </div>

                    <div className=''>
                        <Table />
                    </div>

                </div>

            </div>
        </main>
    )
}

export default Payroll