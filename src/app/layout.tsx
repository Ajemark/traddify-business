"use client"
import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [showNav, setShowNav] = useState(false)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    if (location.href.includes('/register') || location.href.includes('/signin')) {
    } else {
      setShowNav(true)
    }
  }, [])

  useEffect(() => {
    (async () => {
      const { client, error } = await getClient()
      if (error) {
        if (location.href != location.origin + '/register' && location.href != location.origin + '/signin') {
          location.href = location.origin + '/signin'
          return
        }
      }
      setloading(false)

    })()
  }, [])

  if (loading)
    return <html lang="en">
      <head>
        <link rel="icon" href="logo.png" />
      </head>
      <body className={inter.className}>
        <div>
          <div className="bg-[url('/homebg.svg')] flex flex-col items-center w-[100vw] h-[100vh]">

            <div className="bg-black bg-opacity-[0.1] w-[100%] h-[102px]">
              <Image src={'/logo.svg'} alt='logo' width={20} height={20} className='w-[188px] h-[73px]' />
            </div>
            <p className='text-center p-auto m-auto text-2xl text-white pt-[20px]'>Loading ...</p>
          </div>
        </div>
      </body>
    </html>
  else
    return (
      <html lang="en">
        <body className={inter.className}>
          <nav className={`relative ${showNav ? 'flex' : 'hidden'}`}>
            <div className='h-[100vh] flex flex-col items-center text-white w-[368px] bg-[#000000] fixed top-0 left-0'>
              <div className=''>
                <Link href={'/'}>
                  <Image src={'/logo.svg'} alt='logo' width={20} height={20} className='w-[188px] h-[73px] mt-[63px]' />
                </Link>
              </div>

              <div className='flex flex-col my-[76px]'>
                <Link href={'/'}>
                  <div className='flex items-center'>
                    <Image src={'/dashicon.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                    <p className='font-[600] ml-[25px] text-[18px]'>Dashboard</p>
                  </div>
                </Link>

                <div className='flex items-center mt-[35px]'>
                  <Image src={'/transicon.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                  <p className='font-[600] ml-[25px] text-[18px]'>Transaction</p>
                </div>

                <div className='flex items-center mt-[35px]'>
                  <Image src={'/border.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                  <p className='font-[600] ml-[25px] text-[18px]'>Cross border payment</p>
                </div>

                <div className='flex items-center mt-[35px]'>
                  <Image src={'/Grouptrade.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                  <p className='font-[600] ml-[25px] text-[18px]'>Trade financing</p>
                </div>

                <Link href={'/payroll'}>
                  <div className='flex items-center mt-[35px]'>
                    <Image src={'/payroll.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                    <p className='font-[600] ml-[25px] text-[18px]'>Payroll management</p>
                  </div>
                </Link>

                <div className='flex items-center mt-[35px]'>
                  <Image src={'/invoice.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                  <p className='font-[600] ml-[25px] text-[18px]'>Invoicing</p>
                </div>

                <div className='flex items-center mt-[35px]'>
                  <Image src={'/paylink.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                  <p className='font-[600] ml-[25px] text-[18px]'>Payment link</p>
                </div>

                <div className='flex items-center mt-[64px]'>
                  <Image src={'/signout.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                  <p className='font-[600] ml-[25px] text-[18px]'>Signout</p>
                </div>
              </div>
            </div>
          </nav>

          {children}
        </body>
      </html>
    )
}


async function getClient() {
  try {
    const data = await axios.get('api/auth/me')
    return {
      client: data,
      error: null
    }
  } catch (e) {
    const error = e as AxiosError
    return {
      client: null,
      error: error
    }
  }
}