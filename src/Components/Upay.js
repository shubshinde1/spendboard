import React from "react";
import { Timeline } from 'antd';
import { useState } from "react";



function Upay() {
    const [mode, setMode] = useState('right');

    setMode(e.target.value);

    return (
        <div className=" ">

            <div className="flex flex-col gap-3 mx-3 mt-4 text-[#023154] popsemi">
                <h3 className="my-0">Upcoming Payments :</h3>

                <div className="grid grid-cols-6 bg-slate-200 px-4 rounded-lg border-2 border-red-300 hover:scale-105 duration-700">
                    <img src="./netflix.png" style={{ width: '30px', height: '30px' }} className='col-span-1 my-auto md:w-40 flex justify-start rounded-none hover:scale-105 duration-500' alt='logo' />
                    <div className="my-2 col-span-3 md:col-span-4 mx-1">
                        <h4 className="my-0   ">Netflix Premium</h4>
                        <h5 className="my-0  ">09-10-2023</h5>
                    </div>
                    <h4 className="col-span-2 md:col-span-1 mx-auto md:mx-0 text-red-600 flex float-right my-auto">645Rs</h4>
                </div>

                <div className="grid grid-cols-6 bg-slate-200 px-4 rounded-lg border-2 border-red-300 opacity-80 hover:scale-105 duration-700">
                    <img src="./loan.png" style={{ width: '30px', height: '30px' }} className='col-span-1 my-auto md:w-40 flex justify-start rounded-none hover:scale-105 duration-500' alt='logo' />
                    <div className="my-2 col-span-3 md:col-span-4 mx-1">
                        <h4 className="my-0   ">Personal Loan EMI</h4>
                        <h5 className="my-0  ">12-10-2023</h5>
                    </div>
                    <h4 className="col-span-2 md:col-span-1 mx-auto md:mx-0 text-red-600 flex float-right">2500Rs</h4>
                </div>

                <div className="grid grid-cols-6 bg-slate-200 px-4 rounded-lg border-2 border-red-300 opacity-60 hover:scale-105 duration-700">
                    <img src="./hdfc.png" style={{ width: '30px', height: '30px' }} className='col-span-1 my-auto md:w-40 flex justify-start rounded-none hover:scale-105 duration-500' alt='logo' />
                    <div className="my-2 col-span-3 md:col-span-4 mx-1">
                        <h4 className="my-0   ">HDFC SIP</h4>
                        <h5 className="my-0  ">13-10-2023</h5>
                    </div>
                    <h4 className="col-span-2 md:col-span-1 mx-auto md:mx-0 text-red-600 flex float-right">1500Rs</h4>
                </div>

            </div>

            <div className="px-3 text-[#023154] popsemi ">
                <h3 className="mt-4">Paid Amounts :</h3>
                <Timeline className=""
                    mode={mode}
                    style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        paddingTop: '30px',
                        fontFamily: 'poppins',
                        fontWeight: 'bold'
                    }}
                    items={[
                        {
                            label: '1400 Rs (Yesterday)',
                            children: 'Amazon Prime',
                        },
                        {
                            label: '100 Rs (Yesterday)',
                            children: 'Mobile Recharge',
                        },
                        {
                            label: '4500 (10-Sep-23)',
                            children: 'Bike EMI',
                        },
                        {
                            label: '3000 (17-Sep-23)',
                            children: 'Mobile EMI',
                        },
                        {
                            label: '2400 (18-Sep-23)',
                            children: 'TV Recharge',
                        },
                    ]}
                />

            </div>

        </div>
    )
}
export default Upay;