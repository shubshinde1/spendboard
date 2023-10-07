import React from "react";
import { Space, Segmented } from "antd";

const Home = () => {
    return (
        <div className='grid grid-cols-9 gap-5 m-5'>
            <div className='col-span-9 md:col-span-6 gap-5 bg-red-00 grid grid-rows-6'>
                <div className='row-span-4 bg-blue-40'>

                    <Space className=" hidden md:flex">
                        <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} className='popsemi' />
                    </Space>

                </div>
                <div className='row-span-2 bg-blue-100'><h2>Hello</h2></div>

            </div>
            <div className='col-span-9 md:col-span-3 bg-slate-100 rounded-lg'>
                <h3>Hello</h3>

            </div>
        </div>
    )
}
export default Home