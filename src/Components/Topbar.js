import React from "react";
import {
  Dropdown, Typography, Button, Space,
  Avatar, Layout, notification
} from 'antd';
import { CaretDownFilled } from '@ant-design/icons';

const { Header } = Layout;

const items = [
  {
    key: '1',
    icon: <Avatar src="./edit.svg" style={{ color: 'white', marginLeft: '-10px', marginTop: '2px', }} className='h-8 w-8 p-1 justify-center flex items-center ' />,
    label: <h4 className='my-auto popsemi text-sm text-[#023154]'>Edit Profile</h4>,
  },
  {
    key: '2',
    icon: <Avatar src="./download.svg" style={{ color: 'white', marginLeft: '-10px', marginTop: '2px', }} className='h-8 w-8 p-1 justify-center flex items-center ' />,
    label: <h4 className='my-auto popsemi text-sm text-[#023154]'>Download</h4>
  },
  {
    key: '3',
    icon: <Avatar src="./sync.svg" style={{ color: 'white', marginLeft: '-10px', marginTop: '2px', }} className='h-8 w-8 p-1 justify-center flex items-center ' />,
    label: <h4 className='my-auto popsemi text-sm text-[#023154]'>Sync</h4>
  },
  {
    key: '4',
    icon: <Avatar src="./info.svg" style={{ color: 'white', marginLeft: '-10px', marginTop: '2px', }} className='h-8 w-8 p-1 justify-center flex items-center ' />,
    label: <h4 className='my-auto popsemi text-sm text-[#023154]'>Info</h4>
  },
  {
    key: '5',
    icon: <Avatar src="./logout.svg" style={{ color: 'white', marginLeft: '-10px', marginTop: '2px', }} className='h-8 w-8 p-1 justify-center flex items-center ' />,
    label: <h4 className='my-auto popsemi text-sm text-[#023154]'>Log Out</h4>
  },
];

const showNotification = () => {
  notification.info({
    message: 'Notification topLeft',
    description: 'Hello, Ant Design!!',
    placement: 'bottomRight',
  });
};


function Topbar() {
  return (
    <div>
      <Header className="grid grid-cols-8 bg-white border-gray-700 rounded-lg justify-around items-center">
        <Space className='col-span-8 md:col-span-2'>
          <img src="./logo.png" className='w-28 md:w-40 flex justify-start rounded-none hover:scale-105 duration-500' alt='logo' />
        </Space>

        <Space className='col-span-6  justify-end  hidden md:flex'>
          <Space className='mx-1'>
            <Button type="default" className='popsemi' onClick={showNotification}>
              Notify me
            </Button>
          </Space>

          <Avatar src="./notifications.svg" icon='' className=' m-auto hover:bg-slate-100 rounded-full p-2 w-10 h-10' />

          <Dropdown className='flex w-auto bg-slate-100 hover:bg-slate-200 duration-1000 py-1 rounded-full'
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: ['1'],
            }}
          >
            <Typography.Link className=''>
              <Space className='flex px-2 justify-center mt-1' >

                <Avatar size="10px" src="./person.svg" className='justify-center flex items-center' />

                <h6 className='hidden my-auto text-black text-xs popsemi lg:flex'>Shubham</h6>
                <CaretDownFilled style={{ fontSize: '20px', color: 'black', }} className='flex items-center' />
              </Space>
            </Typography.Link>
          </Dropdown>
        </Space>
      </Header>
    </div>
  )
}
export default Topbar;