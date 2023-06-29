"use client"
import Icon from '@/Components/utils/Icon'
import axios, { AxiosError } from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useReducer, useState } from 'react'

const FormReducer = (state: any, event: any) => {

    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const Register = () => {
    const [openModal, setOpenModal] = useState(false)
    const [ShowPass, setShowPass] = useState(false)
    const [ShowPassAgain, setShowPassAgain] = useState(false)

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

        if (!formData.password || (formData.password != formData.passwordAgain)) {
            if (!formData.password) {
                setMessage({
                    text: "Enter All Fields",
                    type: "red"
                })
                return
            }
            setMessage({
                text: "Passwords do not match",
                type: "red"
            })
            return
        }

        try {
            const { data } = await axios.post('api/client', formData)
            console.log(data)
            setOpenModal(true)
        } catch (e) {
            const error = e as AxiosError
            alert(error.message)
        }
    }

    return (
        <div className={``}>
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
                            <div className={`bg-${Message.type}-600 border border-${Message.type}-400 text-${Message.type}-700 px-4 py-3 mb-[20px] rounded relative" text-center role="alert`}>
                                <p className="block sm:inline text-center">{Message.text}</p>
                            </div>
                        )}

                        <div className='flex flex-col'>
                            <label className='font-[400] text-[20px]'>Business name</label>
                            <input type="text" name='name' onChange={setFormData} className='outline-none border border-#C4C4C4 rounded-[5px]  py-[6px] px-[39px] h-[42px]' placeholder='Business name' />
                        </div>

                        <div className='flex mt-[16px] flex-col'>
                            <label className='font-[400] text-[20px]'>Email</label>
                            <input type="text" name='email' onChange={setFormData} className='outline-none border border-#C4C4C4 rounded-[5px]  py-[6px] px-[39px] h-[42px]' placeholder='Email' />
                        </div>

                        <div className='flex mt-[16px]  flex-col'>
                            <label className='font-[400] text-[20px]'>Phone Number</label>
                            <input type="text" name='phoneNumber' onChange={setFormData} className='outline-none border border-#C4C4C4 rounded-[5px]  py-[6px] px-[39px] h-[42px]' placeholder='Phone Number' />
                        </div>

                        <div className='flex mt-[16px]  flex-col'>
                            <label className='font-[400] text-[20px]'>Country</label>
                            <input type="text" name='country' onChange={setFormData} className='outline-none border border-#C4C4C4 rounded-[5px]  py-[6px] px-[39px] h-[42px]' placeholder='Country' />
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

                        <div className='flex mt-[16px]  flex-col'>
                            <label className='font-[400] text-[20px]'>Confirm Password</label>


                            {ShowPassAgain ? (
                                <div className="flex border items-center border-#C4C4C4 rounded-[5px]  py-[6px] px-[39px] justify-between h-[42px]">
                                    <input type="text" name='passwordAgain' onChange={setFormData} className='outline-none flex-1' value={formData?.passwordAgain} placeholder='Confirm Password' />
                                    <div onClick={() => setShowPassAgain(!ShowPassAgain)}>
                                        <Icon name='eye-slash.svg' classes='' size={14} />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex border items-center border-#C4C4C4 rounded-[5px]  py-[6px] px-[39px] justify-between h-[42px]">
                                    <input type="password" name='passwordAgain' onChange={setFormData} className='outline-none flex-1' value={formData?.passwordAgain} placeholder='Confirm Password' />
                                    <div onClick={() => setShowPassAgain(!ShowPassAgain)}>
                                        <Icon name='eye-slash.svg' classes='' size={14} />
                                    </div>
                                </div>
                            )}

                        </div>


                        <div className='mt-[43px] flex items-center'>
                            <input type="checkbox" name='agree' onChange={setFormData} className='w-[25px] h-[25px] mr-[22px]' value={formData.agree} />
                            <label className='font-[400] text-[20px]'>I agree to Traddify’s <span className='text-[#2400FF]'>Terms of Use and Privacy policy</span></label>
                        </div>

                        <div className=' mt-[59px] text-center'>
                            <button type='submit' className='bg-[#8D00CA]  mb-[24px] font-[600] text-white py-[11px]  w-full radius-[5px]'>
                                Create Account
                            </button>
                            <label className='font-[500] text-[20px] mr-[20px]'>Already have an account?
                                <Link href={'/signin'}>
                                    <span className='text-[#2400FF] ml-[10px] cursor-pointer'>Sign in here</span>
                                </Link>
                            </label>
                        </div>

                    </form>

                </div>

                {openModal && (<div className=''>
                    <div className=" fixed top-0 bg-black overflow-y-hidden bg-opacity-[0.63] left-0 w-[100%] h-[100%]">
                        <div className="flex items-center justify-center w-[100%] h-[100%]">
                            <div className="flex relative flex-col  p-[90px] rounded-[10px] bg-[#FFFFFF] w-[590px] ">
                                <div onClick={() => setOpenModal(false)} className=" cursor-pointer absolute top-[40px] right-[40px]">
                                    <Icon name='close.svg' size={24} classes='' />
                                </div>

                                <div className="flex flex-col text-center items-center">
                                    <Icon name='done.svg' size={91} classes='' />
                                    <p className='text-[32px] font-[600] mt-[23px] '>Thank you for reaching out to TRADDIFY</p>
                                    <p className='text-[24px] my-[38px] font-[400] text-[#090000] '>We have received your information, one of our account executives will contact you within the next 24 hours to schedule an appointment.</p>

                                    <div onClick={() => setOpenModal(false)} className="flex items-center text-center text-white w-full bg-[#8D00CA] py-[11px] text-[20px] font-[600] rounded-[5px]">
                                        <p className='w-full text-center'>Ok</p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>)}
            </div>
        </div>
    )
}


export default Register
