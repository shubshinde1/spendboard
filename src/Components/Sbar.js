import React from "react";
import { Space, Menu, Avatar, Button, } from "antd";
import { useState, useEffect } from "react";
import {
    RightSquareFilled,
    LeftSquareFilled
} from '@ant-design/icons';

const Sbar = () => {
    const [collapsed, setCollapsed] = useState(window.innerWidth < 640 ? 1 : 0);

    useEffect(() => {
        const handleResize = () => {
            setCollapsed(window.innerWidth < 768 ? 1 : 0);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <Menu className='flex flex-col justify-start w-auto bg-transparent h-[80vh] hover:shadow-xl duration-300 m-3 rounded-lg md:w-[100%]'  trigger={null} collapsible collapsed={collapsed} style={{ background: "white", }}
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '0',
                        icon: <Avatar src="./person.svg" style={{ color: 'white', marginLeft: '-10px', marginTop: '2px', }} className='h-8 w-8 justify-center flex items-center ' />,
                        label: <h4 className='my-auto popsemi text-base text-[#023154]'>Shubham</h4>,
                        style: {
                            borderRadius: '10px',
                        }
                    },
                    {
                        key: '1',
                        icon: <Avatar src="./home.svg" style={{ margin: '5px -10px', }} className='h-7 w-7' />,
                        label: <h4 className='my-auto ml-3 popsemi text-sm text-[#023154]'>Home</h4>,
                        className: "flex mt-",
                        style: {
                            borderRadius: '10px',
                            marginTop: "30px",
                        }
                    },
                    {
                        key: '2',
                        icon: <Avatar src="./dashboard4.svg" style={{ margin: '5px -10px', }} className='h-7 w-7' />,
                        label: <h4 className='my-auto ml-3 popsemi text-sm text-[#023154]'>Dashboard</h4>,
                        style: {
                            borderRadius: '10px',

                        }
                    },
                    {
                        key: '3',
                        icon: <Avatar src="./explore.svg" style={{ margin: '5px -10px', }} className='h-7 w-7' />,
                        label: <h4 className='my-auto ml-3 popsemi text-sm text-[#023154]'>Explore</h4>,
                        style: {
                            borderRadius: '10px',

                        }
                    },
                    {
                        key: '5',
                        icon: <Avatar src="./spend.svg" style={{ margin: '5px -10px', }} className='h-7 w-7' />,
                        label: <h4 className='my-auto ml-3 popsemi text-sm text-[#023154]'>Spend</h4>,
                        style: {
                            borderRadius: '10px',

                        }
                    },
                    {
                        key: '6',
                        icon: <Avatar src="./shopping.svg" style={{ margin: '5px -10px', }} className='h-7 w-7' />,
                        label: <h4 className='my-auto ml-3 popsemi text-sm text-[#023154]'>Shopping</h4>,
                        style: {
                            borderRadius: '10px',

                        }
                    },
                    {
                        key: '7',
                        icon: <Avatar src="./settings.svg" style={{ margin: '5px -10px', }} className='h-7 w-7' />,
                        label: <h4 className='my-auto ml-3 popsemi text-sm text-[#023154]'>Settings</h4>,
                        style: {
                            borderRadius: '10px',

                        }
                    },
                ]}
            />

            <Space className='bg-red-30 my-5 flex justify-start ml-6 items-stretch'>
                <Button className='bg-slate-100 hover:bg-slate-200'
                    type=""
                    icon={collapsed ? <RightSquareFilled /> : <LeftSquareFilled />}
                    onClick={() => setCollapsed(!collapsed)}
                />
            </Space>
        </div>
    )
}
export default Sbar