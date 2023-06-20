"use client"
import axios, { AxiosError } from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useReducer, useState } from 'react'

const FormReducer = (state: any, event: any) => {
    console.log(event.target.value)
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const Register = () => {
    const [Message, setMessage] = useState({
        text: "",
        type: ""
    })
    const [formData, setFormData] = useReducer(FormReducer, {})

    const checkData = (field: String) => {
        if (field == undefined || field == '') {
            setMessage({
                text: "Enter All Fields",
                type: "red"
            })
            return
        }
        else if (field == 'false') {
            setMessage({
                text: "Enter All Fields",
                type: "red"
            })
            return
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setMessage({
            text: "",
            type: ""
        })

        checkData(formData.name)
        checkData(formData.email)
        checkData(formData.phoneNumber)
        checkData(formData.country)
        checkData(formData.password)
        checkData(formData.passwordAgain)
        checkData(formData.agree)

        try {
            const { data } = await axios.post('api/client', formData)
            console.log(data)
            // location.href = location.origin
        } catch (e) {
            const error = e as AxiosError
            alert(error.message)
        }
    }

    return (
        <div>
            <div className="bg-[url('/homebg.svg')] flex flex-col items-center w-[100vw] ">
                <div className="bg-black bg-opacity-[0.1] w-[100%] h-[102px]">
                    <Image src={'/logo.svg'} alt='logo' width={20} height={20} className='w-[188px] h-[73px]' />
                </div>

                <div className='my-[80px]'>
                    <form action="" onSubmit={handleSubmit} className="text-[#000000] flex flex-col align-center bg-[#FFFFFF] w-[790px] h-[1128px] rounded-[10px] p-[100px]">
                        <div className='text-center mb-[46px] '>
                            <p className='font-[600] text-[40px]'>Create Account</p>
                            <p className='font-[400] text-[24px] mt-15px text-[#715E5E]'>Please provide the details below to create your Traddify business account for free.</p>
                        </div>


                        {Message.type != '' && (
                            <div className={`bg-${Message.type}-100 border border-${Message.type}-400 text-${Message.type}-700 px-4 py-3 mb-[20px] rounded relative" text-center role="alert`}>
                                <p className="block sm:inline text-center">{Message.text}</p>
                            </div>
                        )}

                        <div className='flex flex-col'>
                            <label className='font-[400] text-[20px]'>Business name</label>
                            <input type="text" name='name' onChange={setFormData} className='outline-none border border-#C4C4C4 rounded-[5px] text-[#C4C4C4] py-[6px] px-[39px] h-[42px]' placeholder='Business name' />
                        </div>

                        <div className='flex mt-[16px] flex-col'>
                            <label className='font-[400] text-[20px]'>Email</label>
                            <input type="text" name='email' onChange={setFormData} className='outline-none border border-#C4C4C4 rounded-[5px] text-[#C4C4C4] py-[6px] px-[39px] h-[42px]' placeholder='Email' />
                        </div>

                        <div className='flex mt-[16px]  flex-col'>
                            <label className='font-[400] text-[20px]'>Phone Number</label>
                            <input type="text" name='phoneNumber' onChange={setFormData} className='outline-none border border-#C4C4C4 rounded-[5px] text-[#C4C4C4] py-[6px] px-[39px] h-[42px]' placeholder='Phone Number' />
                        </div>

                        <div className='flex mt-[16px]  flex-col'>
                            <label className='font-[400] text-[20px]'>Country</label>
                            <input type="text" name='country' onChange={setFormData} className='outline-none border border-#C4C4C4 rounded-[5px] text-[#C4C4C4] py-[6px] px-[39px] h-[42px]' placeholder='Country' />
                        </div>

                        <div className='flex mt-[16px]  flex-col'>
                            <label className='font-[400] text-[20px]'>Password</label>
                            <input type="password" name='password' onChange={setFormData} className='outline-none border border-#C4C4C4 rounded-[5px] text-[#C4C4C4] py-[6px] px-[39px] h-[42px]' placeholder='Password' />
                        </div>

                        <div className='flex mt-[16px]  flex-col'>
                            <label className='font-[400] text-[20px]'>Confirm Password</label>
                            <input type="password" name='passwordAgain' onChange={setFormData} className='outline-none border border-#C4C4C4 rounded-[5px] text-[#C4C4C4] py-[6px] px-[39px] h-[42px]' placeholder='Confirm Password' />
                        </div>


                        <div className='mt-[43px] flex items-center'>
                            <input type="checkbox" name='agree' onChange={setFormData} className='w-[25px] h-[25px] mr-[22px]' value={formData.agree} />
                            <label className='font-[400] text-[20px]'>I agree to Traddify’s <span className='text-[#2400FF]'>Terms of Use and Privacy policy</span></label>
                        </div>

                        <div className=' mt-[59px] text-center'>
                            <button type='submit' className='bg-[#8D00CA]  mb-[24px] font-[600] text-white py-[11px]  w-full radius-[5px]'>
                                Create Account
                            </button>
                            <label className='font-[500] text-[20px] mr-[10px]'>Already have an account?
                                <Link href={'/signin'}>
                                    <span className='text-[#2400FF] cursor-pointer'>Sign in here</span>
                                </Link>
                            </label>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}


export default Register