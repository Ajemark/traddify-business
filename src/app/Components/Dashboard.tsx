import Image from 'next/image'
import React from 'react'

const Dashboard = () => {
    return (
        <div>
            {/* <Head></Head> */}
            <nav>
                <div className='w-[368px] bg-[#000000] flex flex-col items-center text-white'>
                    <div className=''>
                        <Image src={'/logo.svg'} alt='logo' width={20} height={20} className='w-[188px] h-[73px] mt-[83px]' />
                    </div>

                    <div className='flex flex-col my-[86px]'>
                        <div className='flex items-center'>
                            <Image src={'/dashicon.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                            <p className='font-[600] ml-[25px] text-[18px]'>Dashboard</p>
                        </div>

                        <div className='flex items-center mt-[50px]'>
                            <Image src={'/transicon.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                            <p className='font-[600] ml-[25px] text-[18px]'>Transaction</p>
                        </div>

                        <div className='flex items-center mt-[50px]'>
                            <Image src={'/border.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                            <p className='font-[600] ml-[25px] text-[18px]'>Cross border payment</p>
                        </div>

                        <div className='flex items-center mt-[50px]'>
                            <Image src={'/Grouptrade.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                            <p className='font-[600] ml-[25px] text-[18px]'>Trade financing</p>
                        </div>

                        <div className='flex items-center mt-[50px]'>
                            <Image src={'/payroll.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                            <p className='font-[600] ml-[25px] text-[18px]'>Payroll management</p>
                        </div>

                        <div className='flex items-center mt-[50px]'>
                            <Image src={'/invoice.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                            <p className='font-[600] ml-[25px] text-[18px]'>Invoicing</p>
                        </div>

                        <div className='flex items-center mt-[50px]'>
                            <Image src={'/paylink.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                            <p className='font-[600] ml-[25px] text-[18px]'>Payment link</p>
                        </div>

                        <div className='flex items-center mt-[94px]'>
                            <Image src={'/signout.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                            <p className='font-[600] ml-[25px] text-[18px]'>Signout</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Dashboard