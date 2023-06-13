import React from 'react'
import Icon from './Icon'
import SelectOptions from './SelectOptions'

const TableCreate = ({ addRow, setaddRow }: any) => {

    const table = [
        {
            "fullname": "",
            "email": "",
            "countryCode": "",
            "phoneNumber": "",
            "department": "",
            "currency": "",
            "monthlyGross": "",
            "bankName": "",
            "accountNumber": "",
            "swiftCode": "",
            "tradifyWalletID": "",
        }
    ]

    return (

        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-center">
                <thead className="text-[20px] text-[#494949] bg-[#F8F8F8]">
                    <tr>
                        <th scope="col" className="px-6 py-3 border-[2px] border-[#CECECE]">

                        </th>
                        <th scope="col" className="px-6 py-3 border-[2px] border-[#CECECE]">
                            FullName
                        </th>
                        <th scope="col" className="px-6 py-3 border-[2px] border-[#CECECE]">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3 border-[2px] border-[#CECECE]">
                            Country Code
                        </th>
                        <th scope="col" className="px-6 py-3 border-[2px] border-[#CECECE]">
                            Phone Number
                        </th>
                        <th scope="col" className="px-6 py-3 border-[2px] border-[#CECECE]">
                            Department
                        </th>
                        <th scope="col" className="px-6 py-3 border-[2px] border-[#CECECE]">
                            Currency
                        </th>
                        <th scope="col" className="px-6 py-3 border-[2px] border-[#CECECE]">
                            Monthly Gross
                        </th>
                        <th scope="col" className="px-6 py-3 border-[2px] border-[#CECECE]">
                            Bank Name
                        </th>
                        <th scope="col" className="px-6 py-3 border-[2px] border-[#CECECE]">
                            Account number / IBAN
                        </th>
                        <th scope="col" className="px-6 py-3 border-[2px] border-[#CECECE]">
                            Swift Code
                        </th>
                        <th scope="col" className="px-6 py-3 border-[2px] border-[#CECECE]">
                            Tradify Wallet ID
                        </th>
                        <th scope="col" className="px-6 py-3 border-[2px] border-[#CECECE]">

                        </th>

                    </tr>
                </thead>
                <tbody className='text-[#494949] text-[20px]'>

                    {Array(addRow).fill('').map((_, i) => (
                        <tr key={i} className="bg-white ">
                            {/* del  */}
                            <td className='px-6 py-3 border-[2px] border-[#CECECE]'>
                                <div onClick={() => setaddRow((prev: any) => prev - 1)} className='flex items-center p-[10px] w-[40px] h-[40px] border-[#C4C4C4] rounded-[5px] border'>
                                    <Icon name='del.svg' size={20} classes='' />
                                </div>
                            </td>

                            {/* fullname  */}
                            <td className='px-6 py-3 border-[2px] border-[#CECECE]'>
                                <input type="text" className='outline-none border-[#8D00CA] border h-[46px] p-[4px]' />
                            </td>

                            {/* email  */}
                            <td className='px-6 py-3 border-[2px] border-[#CECECE]'>
                                <input type="text" className='outline-none border-[#8D00CA] border h-[46px] p-[4px]' />
                            </td>

                            {/* countryCode  */}
                            <td className='px-6 py-3 border-[2px] border-[#CECECE]'>
                                <SelectOptions classes="border-[#8D00CA] border h-[46px] p-[4px]" />
                            </td>

                            {/* phoneNumber  */}
                            <td className='px-6 py-3 border-[2px] border-[#CECECE]'>
                                <input type="text" className='outline-none border-[#8D00CA] border h-[46px] p-[4px]' />
                            </td>
                            {/* department */}
                            <td className='px-6 py-3 border-[2px] border-[#CECECE]'>
                                <input type="text" className='outline-none border-[#8D00CA] border h-[46px] p-[4px]' />
                            </td>
                            {/* currency  */}
                            <td className='px-6 py-3 border-[2px] border-[#CECECE]'>
                                <SelectOptions classes="border-[#8D00CA] border h-[46px] p-[4px]" />
                            </td>
                            {/* monthlyGross  */}
                            <td className='px-6 py-3 border-[2px] border-[#CECECE]'>
                                <input type="text" className='outline-none border-[#8D00CA] border h-[46px] p-[4px]' />
                            </td>
                            {/* Bank name  */}
                            <td className='px-6 py-3 border-[2px] border-[#CECECE]'>
                                <SelectOptions classes="border-[#8D00CA] border h-[46px] p-[4px]" />
                            </td>
                            {/* accountNumber  */}
                            <td className='px-6 py-3 border-[2px] border-[#CECECE]'>
                                <input type="text" className='outline-none border-[#8D00CA] border h-[46px] p-[4px]' />
                            </td>
                            {/* swiftCode  */}
                            <td className='px-6 py-3 border-[2px] border-[#CECECE]'>
                                <input type="text" className='outline-none border-[#8D00CA] border h-[46px] p-[4px]' />
                            </td>
                            {/* tradifyWalletID */}
                            <td className='px-6 py-3 border-[2px] border-[#CECECE]'>
                                <input type="text" className='outline-none border-[#8D00CA] border h-[46px] p-[4px]' />
                            </td>
                            {/* tradifyWalletID */}
                            <td className='px-6 py-3 border-[2px] border-[#CECECE]'>
                                <div onClick={() => setaddRow((prev: any) => prev - 1)} className=''>
                                    <Icon name='threedotsblack.svg' size={20} classes='' />
                                </div>
                            </td>




                        </tr>
                    ))}

                </tbody>
            </table>

        </div>

    )
}

export default TableCreate