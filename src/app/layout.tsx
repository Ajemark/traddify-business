"use client"
import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { usePathname, useRouter } from 'next/navigation'
import UserProvider, { userContext } from "../../context/contextApi";
import Icon from '@/Components/utils/Icon'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <Layout>
        {children}
      </Layout>
    </UserProvider>
  )
}


function Layout({ children }: { children: React.ReactNode }) {
  const { error, client } = userContext()

  const [showNav, setShowNav] = useState(false)
  const [loading, setloading] = useState(true)
  const [activePage, setActivePage] = useState('dashboard')
  const [activePageText, setActivePageText] = useState('dashboard')
  const currentPage = usePathname()

  useEffect(() => {
    if (currentPage == '/payroll') {
      setActivePage('payroll')
      setActivePageText('payroll MANAGEMENT')
    }
    if (currentPage == '/') {
      setActivePage('dashboard')
      setActivePageText('dashboard')
    }
    if (currentPage == '/inviocing') {
      setActivePage('inviocing')
      setActivePageText('inviocing')
    }
    if (currentPage == '/tradefinancing') {
      setActivePage('tradefinancing')
      setActivePageText('trade financing')
    }
    if (currentPage == '/paymentlink') {
      setActivePage('paymentlink')
      setActivePageText('payment link')
    }
    if (currentPage == '/crossborderpayment') {
      setActivePage('crossborderpayment')
      setActivePageText('cross border payment')
    }
    if (currentPage == '/transactions') {
      setActivePage('transactions')
      setActivePageText('transactions')
    }
  }, [currentPage])


  useEffect(() => {
    if (location.href.includes('/register') || location.href.includes('/signin')) {
    } else {
      setShowNav(true)
    }
  }, [children])

  useEffect(() => {
    (async () => {

      if (client) {
        if (location.href == location.origin + '/register' || location.href == location.origin + '/signin') {
          location.href = location.origin
          return
        }
      }

      if (error) {
        if (location.href != location.origin + '/register' && location.href != location.origin + '/signin') {
          location.href = location.origin + '/signin'
          return
        }
      }
      setloading(false)
    })()
  }, [client, error])

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
      <UserProvider>
        <html lang="en">
          <body className={inter.className}>
            <nav className={`relative ${showNav ? 'flex' : 'hidden'}`}>
              <div className='h-[100vh] flex flex-col text-white w-[368px] bg-[#000000] fixed top-0 left-0'>
                <div className='pl-[3rem]'>
                  <Link href={'/'}>
                    <Image src={'/logo.svg'} alt='logo' width={20} height={20} className='w-[188px] h-[73px] mt-[63px]' />
                  </Link>
                </div>

                <div className='flex flex-col pl-[3rem] my-[76px] w-full '>
                  <Link href={'/'} className={`${activePage == "dashboard" ? "bg-[#4D4D4D]" : ''} pl-[2rem] py-[14px] rounded-[5px]`}>
                    <div className='flex my-[10px] items-center'>
                      <Image src={'/dashicon.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                      <p className='font-[600] ml-[25px] text-[18px]'>Dashboard</p>
                    </div>
                  </Link>

                  <Link href={'/'} className={`${activePage == "transactions" ? "bg-[#4D4D4D]" : ''} pl-[2rem] py-[14px] rounded-[5px]`}>
                    <div className='flex items-center my-[10px]'>
                      <Image src={'/transicon.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                      <p className='font-[600] ml-[25px] text-[18px]'>Transaction</p>
                    </div>
                  </Link>

                  <Link href={'/crossborderpayment'} className={`${activePage == "crossborderpayment" ? "bg-[#4D4D4D]" : ''} pl-[2rem] py-[14px] rounded-[5px]`}>
                    <div className='flex items-center my-[10px]'>
                      <Image src={'/border.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                      <p className='font-[600] ml-[25px] text-[18px]'>Cross border payment</p>
                    </div>
                  </Link>

                  <Link href={'/crossborderpayment'} className={`${activePage == "crossborderpayments" ? "bg-[#4D4D4D]" : ''} pl-[2rem] py-[14px] rounded-[5px]`}>
                    <div className='flex items-center my-[10px]'>
                      <Image src={'/Grouptrade.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                      <p className='font-[600] ml-[25px] text-[18px]'>Trade financing</p>
                    </div>
                  </Link>

                  <Link href={'/payroll'} className={`${activePage == "payroll" ? "bg-[#4D4D4D]" : ''} pl-[2rem] py-[14px] rounded-[5px] item-center`}>
                    <div className='flex items-center my-[10px]'>
                      <Image src={'/payroll.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                      <p className='font-[600] ml-[25px] text-[18px]'>Payroll management</p>
                    </div>
                  </Link>

                  <Link href={'/crossborderpayment'} className={`${activePage == "crossborderpayments" ? "bg-[#4D4D4D]" : ''} pl-[2rem] py-[14px] rounded-[5px]`}>
                    <div className='flex items-center my-[10px]'>
                      <Image src={'/invoice.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                      <p className='font-[600] ml-[25px] text-[18px]'>Invoicing</p>
                    </div>
                  </Link>

                  <Link href={'/crossborderpayment'} className={`${activePage == "crossborderpayments" ? "bg-[#4D4D4D]" : ''} pl-[2rem] py-[14px] rounded-[5px]`}>
                    <div className='flex items-center my-[10px]'>
                      <Image src={'/paylink.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                      <p className='font-[600] ml-[25px] text-[18px]'>Payment link</p>
                    </div>
                  </Link>

                  <Link href={'/crossborderpayment'} className={`${activePage == "crossborderpayments" ? "bg-[#4D4D4D]" : ''} pl-[2rem] py-[14px] rounded-[5px]`}>
                    <div className='flex items-center mt-[64px]'>
                      <Image src={'/signout.svg'} alt='logo' width={20} height={20} className='w-[20px] h-[20px]' />
                      <p className='font-[600] ml-[25px] text-[18px]'>Signout</p>
                    </div>
                  </Link>
                </div>
              </div>
            </nav>

            <main>
              <div className={` ${showNav ? 'flex' : 'hidden'} `}>
                <div className='h-[132px] ml-[370px] flex w-full items-center px-[70px] border-b-[3px] border-[#F0EEEE]'>
                  <p className="text-[#000000] font-[600] uppercase text-[24px] flex-1">
                    {activePageText || 'DASHBOARD'}
                  </p>
                  <div className='flex'>
                    <p className="text-[#000000] border-r-[3px] pr-[20px] border-[#8E8E8E] font-[500] text-[20px] flex-1">
                      <em>Welcome</em>
                    </p>


                    <div className='flex'>
                      <Icon name='profile.svg' size={20} classes='mx-[12px]' />
                      <p className="text-[#000000] font-[500] text-[20px] flex-1">
                        {client?.name || 'Johnson Ltd'}
                      </p>
                      <Icon name='caret-down.svg' size={20} classes='ml-[12px]' />
                    </div>
                  </div>
                </div>
              </div>

              {children}
            </main>

          </body>
        </html>
      </UserProvider>
    )
}

