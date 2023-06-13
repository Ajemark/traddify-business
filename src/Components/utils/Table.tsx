import React from 'react'

const Table = () => {

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
                    <tr className="bg-white ">
                    </tr>

                </tbody>
            </table>
            <p className='text-center my-[30px]'>No Data</p>
        </div>

    )
}

export default Table