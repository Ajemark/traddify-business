"use client"
import Icon from '@/Components/utils/Icon'
import CountrySelector from '@/Components/utils/Selector';
import { COUNTRIES } from '@/database/countries';
import axios, { AxiosError } from 'axios';
import Link from 'next/link'
import React, { useReducer, useState } from 'react'

const FormReducer = (state: any, event: any) => {

  return {
    ...state,
    [event.target.name]: event.target.value
  }
}

const Page = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState('US');
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
      return false
    }
    else if (field == 'false') {
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

    setOpenModal(true)

    return

    if (!checkData(formData.name)) return
    if (!checkData(formData.email)) return
    if (!checkData(formData.phoneNumber)) return
    if (!checkData(formData.password)) return
    if (!checkData(formData.passwordAgain)) return
    if (!checkData(formData.agree)) return

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
    if (country == undefined) return setMessage({
      text: "Enter All Fields",
      type: "red"
    })
    const formd = formData
    formd['country'] = COUNTRIES.find(option => option.value === country)?.title

    try {
      const { data } = await axios.post('api/client', formd)
      console.log(data)
      setOpenModal(true)
    } catch (e) {
      const error = e as AxiosError
      alert(error.message)
    }
  }

  const handleDownload = () => {

  }


  return (
    <main className='ml-[370px] mb-[100px]'>
      <div className='h-[132px] flex items-center px-[70px] border-b-[3px] border-[#F0EEEE]'>
        <p className="text-[#000000] font-[600] text-[24px] flex-1">
          CROSS BORDER PAYMENT
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



      <div className='border-[2px] pb-[50px] border-[#DCDCDC] w-[925px] rounded-[10px] m-[78px]'>
        <p className='font-[500] p-[50px] text-[24px] text-[#090000]'>
          Make cross border payment on the go!
        </p>

        <form action="" onSubmit={handleSubmit} className="text-[#000000] flex flex-col bg-[#FFFFFF]  h-auto items-center space-y-[1.4rem]">
          {Message.type != '' && (
            <div className={`bg-${Message.type}-600 border border-${Message.type}-400 text-${Message.type}-700 px-4 py-3 mb-[20px] rounded relative" text-center role="alert`}>
              <p className="block sm:inline text-center">{Message.text}</p>
            </div>
          )}

          <div className='flex flex-col w-[590px] '>
            <label className='font-[400] text-[20px]'>Amount To Send</label>
            <div className='border border-#C4C4C4 rounded-[5px] flex items-center py-[6px] px-[20px] h-[42px]'>
              <Icon name='naira.svg' classes='h-[12px] w-[14px]' size={14} />
              <input type="text" name='name' onChange={setFormData} className='outline-none ' />
            </div>
          </div>

          <div className='flex mt-[16px]  flex-col w-[590px]'>
            <label className='font-[400] text-[20px]'>Select Currency To Send</label>
            <CountrySelector
              id={'countries'}
              open={isOpen}
              onToggle={() => setIsOpen(!isOpen)}
              onChange={(val: any) => setCountry(val)}
              selectedValue={COUNTRIES.find(option => option.value === country)}
            />
          </div>

          <div className='flex flex-col w-[590px]'>
            <label className='font-[400] text-[20px]'>Bank Name</label>
            <input type="text" name='name' onChange={setFormData} className='outline-none border border-#C4C4C4 rounded-[5px]  py-[6px] px-[20px] h-[42px]' />
          </div>

          <div className='flex flex-col w-[590px]'>
            <label className='font-[400] text-[20px]'>Account Number</label>
            <input type="text" name='name' onChange={setFormData} className='outline-none border border-#C4C4C4 rounded-[5px]  py-[6px] px-[20px] h-[42px]' />
          </div>

          <div className='flex flex-col w-[590px]'>
            <label className='font-[400] text-[20px]'>Account Name</label>
            <input type="text" name='name' onChange={setFormData} className='outline-none border border-#C4C4C4 rounded-[5px]  py-[6px] px-[20px] h-[42px]' />
          </div>

          <div className='flex flex-col w-[590px]'>
            <label className='font-[400] text-[20px]'>Description</label>
            <textarea cols={6} rows={6} name='description' onChange={setFormData} className='outline-none border border-#C4C4C4 rounded-[5px]  py-[6px] px-[20px] h-[42px]' />
          </div>

          <button type='submit' className='bg-[#8D00CA] my-[54px] font-[600] text-white py-[11px]  w-[590px] radius-[5px]'>
            Send
          </button>


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
                <p className='text-[32px] font-[600] mt-[23px] '>TRANSFER SUCCESSFUL</p>
                <p className='text-[24px] my-[38px] font-[400] text-[#090000] '>You have successfully transferred
                  NGN5,000,000.00 to JAMES OLUSEGUN
                  GABRIEL.</p>

                <div onClick={() => setOpenModal(false)} className="flex cursor-pointer items-center text-center text-black w-full border-[1px] border-[#000000] py-[11px] text-[20px] font-[600] mb-[26px] rounded-[5px]">
                  <p className='w-full text-center'>Ok</p>
                </div>

                <div onClick={handleDownload} className="flex cursor-pointer items-center text-center text-white w-full bg-[#8D00CA] py-[11px] text-[20px] font-[600] rounded-[5px]">
                  <p className='w-full text-center'>Download as PDF</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>)}

    </main>
  )
}

export default Page