'use client'
import React, { useEffect } from 'react'
import Icon from './utils/Icon'
import { useParams } from 'next/navigation';
import { GetServerSideProps } from 'next';


const Dashboard = ({id}) => {
    const params = useParams();

    // const [query, setquery] = useState('')

    console.log(params)

    // useEffect(() => {
    //     if (!router.isReady) return;
    //     console.log(router.query)
    //     const query = router.query;
    // }, [router.isReady, router.query]);

    return (
        <div className=''>
            {/* <Head></Head> */}
            <main className='ml-[370px] mb-[100px]'>

                <div className='h-[132px] flex items-center px-[70px] border-b-[3px] border-[#F0EEEE]'>
                    <p className="text-[#000000] font-[600] text-[24px] flex-1">
                        DASHBOARD
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

                <div className='px-[42px] mt-[32px] text-white py-[24px] mx-[70px] bg-[#8D00CA] border-2 border-[#8D00CA] rounded-[10px]'>
                    <div className='flex mb-[14px]'>
                        <Icon name='wallet.svg' size={20} classes='' />
                        <p className='font-[600] text-[20px] ml-[12px]'>Wallet Balance</p>
                    </div>
                    <p className='font-[600] text-[40px]'>N1,000,000.00</p>
                </div>

                <div className="mt-[40px] mx-[70px] flex">
                    <div className='border-[#DCDCDC] rounded-[10px] mr-[50px] border-[2px] flex flex-col items-center justify-center w-[275px] py-[15px]'>
                        <Icon name='fund.svg' size={5} classes='w-[45px] h-[45px] mb-[6px]' />
                        <p className='font-[600] text-[20px]'>Fund Wallet</p>
                    </div>
                    <div className='border-[#DCDCDC] rounded-[10px] mr-[50px] border-[2px] flex flex-col items-center justify-center w-[275px] py-[15px]'>
                        <Icon name='withdraw.svg' size={5} classes='w-[45px] h-[45px] mb-[6px]' />
                        <p className='font-[600] text-[20px]'>Withdraw</p>
                    </div>
                    <div className='border-[#DCDCDC] rounded-[10px] mr-[50px] border-[2px] flex flex-col items-center justify-center w-[275px] py-[15px]'>
                        <Icon name='paystaff.svg' size={5} classes='w-[45px] h-[45px] mb-[6px]' />
                        <p className='font-[600] text-[20px]'>Pay Staff</p>
                    </div>
                </div>

                <div className="mt-[40px] mx-[70px]">
                    <Icon name='chart.svg' size={5} classes='w-[100%] ' />
                </div>

                <div className="mt-[40px] mx-[70px]">
                    <Icon name='trans.svg' size={5} classes='w-[100%] ' />
                </div>

            </main>
        </div>
    )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async (context) => {
    var id = context.query["id"];
    console.log(context.query)
    return {
        props: {
            id
        },
    };
};

