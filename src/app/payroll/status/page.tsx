"use client"
import Icon from '@/Components/utils/Icon'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
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
						<div className="flex">
							<Link href="/payroll">
								<div className='flex w-full items-center'>
									<div className='flex p-[14px] border-[#C4C4C4] rounded-[5px] border'>
										<Icon name='caret-down.svg' size={20} classes='rotate-[90deg]' />
									</div>
									<p className='font-[500] text-[24px] ml-[40px]'>Payroll (Jun 2023)</p>
								</div>
							</Link>

							<div className="rounded-[5px] ml-[18px] py-[5px] px-[16px] flex items-center bg-[#FFDBB9]">
								<Icon name='dot.svg' size={20} classes='rotate-[90deg] mr-[5px]' />
								<p className='text-[20px] text-[#D89659] font-[500]'>Approved</p>
							</div>
						</div>

						<div className="flex items-center">
							<div className="flex items-center border-[#C4C4C4] border py-[6px] px-[12px] text-[18px] rounded-[5px]">
								<p>Cancel Payoff</p>
							</div>

							<div className="flex cursor-pointer items-center text-white ml-[13px] py-[6px] bg-[#8D00CA] px-[12px] text-[18px] rounded-[5px]">
								<p>Edit Payoff</p>
							</div>

						</div>
					</div>
				</div>

				<div className='mt-[40px] overflow-auto border-[2px] border-[#DCDCDC] rounded-[10px]'>
					<div className='px-[36px] flex items-center py-[8px] bg-[#F8F8F8]'>
						<p className='font-[500] text-[#000000] text-[20px]'>Payroll Summary | </p> <span className='text-[#999696] ml-[4px]'>Payout date: Sat 10, June 2023</span>
					</div>
					<div className='px-[36px] flex py-[8px] border-t-[2px] border-[#DCDCDC]'>
						<div className='border-r-[2px] border-[#CECECE] p-[15px]'>
							<p className='font-[500] text-[#000000] text-[20px]'>Total Payroll Charge</p>
							<p className='font-[500] text-[#000000] text-[36px]'>N902,350.00</p>
						</div>
						<div className='border-r-[2px] border-[#CECECE] p-[15px]'>
							<p className='font-[500] text-[#000000] text-[20px]'>Total Salary Payout</p>
							<p className='font-[500] text-[#000000] text-[36px]'>N900,000.00</p>
						</div>
						<div className='border-r-[2px] border-[#CECECE] p-[15px]'>
							<p className='font-[500] text-[#000000] text-[20px]'>Total Employee</p>
							<p className='font-[500] text-[#000000] text-[36px]'>2</p>
						</div>
						<div className='p-[15px]'>
							<p className='font-[500] text-[#000000] text-[20px]'>Total Processing Fee</p>
							<p className='font-[500] text-[#000000] text-[36px]'>N2,350.00</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default page