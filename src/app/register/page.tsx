import Image from 'next/image'
import React from 'react'

const Register = () => {
    return (
        <div>
            <div className="bg-[url('/homebg.svg')] flex flex-col items-center w-[100vw] ">

                <div className="bg-black bg-opacity-[0.1] w-[100%] h-[102px]">
                    <Image src={'/logo.svg'} alt='logo' width={20} height={20} className='w-[188px] h-[73px]' />
                </div>

                <div className='my-[80px]'>
                    <form action="" className="text-[#000000] flex flex-col align-center bg-[#FFFFFF] w-[790px] h-[1128px] rounded-[10px] p-[100px]">
                        <div className='text-center mb-[46px] '>
                            <p className='font-[600] text-[40px]'>Create Account</p>
                            <p className='font-[400] text-[24px] mt-15px text-[#715E5E]'>Please provide the details below to create your Traddify business account for free.</p>
                        </div>

                        <div className='flex flex-col'>
                            <label className='font-[400] text-[20px]'>Business name</label>
                            <input type="text" className='outline-none border border-#C4C4C4 rounded-[5px] text-[#C4C4C4] py-[6px] px-[39px] h-[42px]' placeholder='Business name' />
                        </div>

                        <div className='flex mt-[16px] flex-col'>
                            <label className='font-[400] text-[20px]'>Email</label>
                            <input type="text" className='outline-none border border-#C4C4C4 rounded-[5px] text-[#C4C4C4] py-[6px] px-[39px] h-[42px]' placeholder='Email' />
                        </div>

                        <div className='flex mt-[16px]  flex-col'>
                            <label className='font-[400] text-[20px]'>Phone Number</label>
                            <input type="text" className='outline-none border border-#C4C4C4 rounded-[5px] text-[#C4C4C4] py-[6px] px-[39px] h-[42px]' placeholder='Phone Number' />
                        </div>

                        <div className='flex mt-[16px]  flex-col'>
                            <label className='font-[400] text-[20px]'>Country</label>
                            <input type="text" className='outline-none border border-#C4C4C4 rounded-[5px] text-[#C4C4C4] py-[6px] px-[39px] h-[42px]' placeholder='Country' />
                        </div>

                        <div className='flex mt-[16px]  flex-col'>
                            <label className='font-[400] text-[20px]'>Password</label>
                            <input type="password" className='outline-none border border-#C4C4C4 rounded-[5px] text-[#C4C4C4] py-[6px] px-[39px] h-[42px]' placeholder='Password' />
                        </div>

                        <div className='flex mt-[16px]  flex-col'>
                            <label className='font-[400] text-[20px]'>Confirm Password</label>
                            <input type="password" className='outline-none border border-#C4C4C4 rounded-[5px] text-[#C4C4C4] py-[6px] px-[39px] h-[42px]' placeholder='Confirm Password' />
                        </div>


                        <div className='mt-[43px] flex items-center'>
                            <input type="checkbox" className='w-[25px] h-[25px] mr-[22px]' value='false' />
                            <label className='font-[400] text-[20px]'>I agree to Traddify’s <span className='text-[#2400FF]'>Terms of Use and Privacy policy</span></label>
                        </div>

                        <div className=' mt-[59px] text-center'>
                            <button className='bg-[#8D00CA]  mb-[24px] font-[600] text-white py-[11px]  w-full radius-[5px]'>
                                Create Account
                            </button>
                            <label className='font-[500] text-[20px]'>Already have an account? <span className='text-[#2400FF]'>Sign in here</span></label>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Register