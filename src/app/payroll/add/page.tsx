"use client"
import Icon from '@/Components/utils/Icon'
import TableCreate from '@/Components/utils/TableCreate'
import Link from 'next/link'
import React, { useState } from 'react'

const Add = () => {
    const [addRow, setaddRow] = useState(1)

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

            <div className="mt-[40px] px-[70px] ">

                <Link href="/payroll">
                    <div className='flex w-full items-center'>
                        <div className='flex p-[14px] border-[#C4C4C4] rounded-[5px] border'>
                            <Icon name='caret-down.svg' size={20} classes='rotate-[90deg]' />
                        </div>
                        <p className='font-[500] text-[24px] ml-[40px]'>Add employee data</p>
                    </div>
                </Link>


                <div className='flex flex-col mt-[50px] rounded-[10px] border-[2px] border-[#DCDCDC]'>

                    <div className='flex justify-between w-full p-[40px]'>
                        <div className='flex'>
                            <p className='font-[500] border border-[#C4C4C4] px-[35px] py-[10px] text-[24px]'>Upload Sheet</p>
                        </div>

                        <div className="flex items-center text-white ml-[13px] bg-[#8D00CA] px-[40px] rounded-[5px]">
                            <p>Save & Add Employee</p>
                        </div>
                    </div>

                    <div className=''>
                        <TableCreate addRow={addRow} setaddRow={setaddRow} />
                    </div>

                    <div onClick={() => setaddRow(prev => prev + 1)} className='flex m-[30px] cursor-pointer'>
                        <Icon name='addicon.svg' size={27} classes='mr-[18px] rotate-[90deg]' />
                        <p className="text-[20px] font-[500] text-[#8D00CA]">Add another employee</p>
                    </div>

                </div>

            </div>
        </main>
    )
}

export default Add