"use client"
import Icon from '@/Components/utils/Icon'
import axios, { AxiosError } from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useReducer, useState } from 'react'
import Client from '../../../model/client'
import { userContext } from '../../../context/contextApi'

const FormReducer = (state: any, event: any) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const Signin = () => {

    const { client, setClient } = userContext()

    const [ShowPass, setShowPass] = useState(false)
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
            return false
        }
        return true
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setMessage({
            text: "",
            type: ""
        })

        if (!checkData(formData.email)) return
        if (!checkData(formData.password)) return

        try {
            const { data } = await axios.post('api/auth/login', formData)
            setClient(data)
            location.href = location.origin
        } catch (e) {
            const error = e as AxiosError
            console.log(e)
            setMessage({
                text: "Unauthorized, Please Try again",
                type: "red"
            })
        }
    }

    return (
        <div>
            <div className="bg-[url('/homebg.svg')] h-[100vh] flex flex-col items-center w-[100vw] ">

                <div className="bg-black bg-opacity-[0.1] w-[100%] h-[102px]">
                    <Image src={'/logo.svg'} alt='logo' width={20} height={20} className='w-[188px] h-[73px]' />
                </div>

                <div className='my-[80px]'>
                    <form action="" onSubmit={handleSubmit} className="text-[#000000] flex flex-col align-center bg-[#FFFFFF] w-[790px]  rounded-[10px] p-[100px]">
                        <div className='text-center mb-[46px] '>
                            <p className='font-[600] text-[40px]'>Welcome Back</p>
                            <p className='font-[400] text-[24px] mt-15px text-[#715E5E]'>Enter your details below to sign into your Traddify business account</p>
                        </div>

                        {Message.type != '' && (
                            <div className={`bg-${Message.type}-100 border border-${Message.type}-400 text-${Message.type}-700 px-4 py-3 mb-[20px] rounded relative" text-center role="alert`}>
                                <p className="block sm:inline text-center">{Message.text}</p>
                            </div>
                        )}

                        <div className='flex mt-[16px] flex-col'>
                            <label className='font-[400] text-[20px]'>Email</label>
                            <input type="text" name='email' onChange={setFormData} className='outline-none border border-#C4C4C4 rounded-[5px] text-[#C4C4C4] py-[6px] px-[39px] h-[42px]' placeholder='Email' />
                        </div>

                        <div className='flex mt-[16px]  flex-col'>
                            <label className='font-[400] text-[20px]'>Password</label>
                            {ShowPass ? (
                                <div className="flex border border-#C4C4C4 items-center rounded-[5px]  py-[6px] px-[39px] justify-between h-[42px]">
                                    <input type="text" name='password' onChange={setFormData} className='outline-none flex-1' value={formData?.password} placeholder='Password' />
                                    <div onClick={() => setShowPass(!ShowPass)}>
                                        <Icon name='eye-slash.svg' classes='' size={14} />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex border border-#C4C4C4 items-center rounded-[5px]  py-[6px] px-[39px] justify-between h-[42px]">
                                    <input type="password" name='password' onChange={setFormData} className='outline-none flex-1' value={formData?.password} placeholder='Password' />
                                    <div onClick={() => setShowPass(!ShowPass)}>
                                        <Icon name='eye-slash.svg' classes='' size={14} />
                                    </div>
                                </div>
                            )}


                        </div>

                        <div className='flex mt-[21px] justify-end'>
                            <label className='font-[400] text-[20px]'>Forgot password?</label>
                        </div>

                        <div className=' mt-[45px] text-center'>
                            <button type='submit' className='bg-[#8D00CA]  mb-[24px] font-[600] text-white py-[11px]  w-full radius-[5px]'>
                                Sign in
                            </button>
                            <label className='font-[500] mr-[10px] text-[20px]'>Don`t have an account?
                                <Link href={'/register'}>
                                    <span className='ml-[10px] text-[#2400FF]'>Create an account here</span>
                                </Link>
                            </label>
                        </div>

                    </form>

                </div>
            </div >
        </div >
    )
}

export default Signin