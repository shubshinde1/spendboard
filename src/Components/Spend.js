import React from "react";
import {
    CaretRightFilled
} from '@ant-design/icons';

function Spend() {
    return (
        <div className=" rounded-lg h-full">
            <div className="grid grid-cols-2 gap-5  h-full popsemi">
                <div className="flex flex-col col-span-3 md:col-span-1 rounded-lg bg-[#023154]  hover:scale-105 duration-700 px-4 popsemi">
                    <div className="grid grid-cols-5 md:flex">
                        <h4 className="col-span-3 md:col-span-4 md:text-lg text-white">Total Spends & Expense</h4>
                        <CaretRightFilled style={{ fontSize: '20px', color: 'white', fontWeight: 'bold' }} className="col-span-2 md:col-span-1 flex items-start mt-5 md:mt-7 ml-12 sm:ml-8 md:ml-5 justify-end" />
                    </div>
                    <h5 className="text-white mt-3 mb-5 font-bold text-2xl">35.236 Rs</h5>
                </div>
                <div className="flex flex-col col-span-3 md:col-span-1 rounded-lg bg-slate-200  hover:scale-105 duration-700 px-4 popsemi">
                    <div className="grid grid-cols-5 md:flex">
                        <h4 className="col-span-3 md:col-span-4 md:text-lg text-[#023154]">Remaining Payments</h4>
                        <CaretRightFilled style={{ fontSize: '20px', color: '#023154', fontWeight: 'bold' }} className="col-span-2 md:col-span-1 flex items-start mt-5 md:mt-7 ml-12 sm:ml-8 md:ml-5 justify-end" />
                    </div>
                    <h5 className="text-[#023154] mt-3 mb-5 font-bold text-2xl">10.526 Rs</h5>
                </div>
            </div>
        </div>
    )
}
export default Spend;