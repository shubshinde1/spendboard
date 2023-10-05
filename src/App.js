import React from 'react';
import './App.css';
import { Avatar, Layout, Space } from 'antd';
import {
  SettingFilled,
  CaretDownFilled,
  UserOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import { notification, Dropdown, Typography, Button, Badge } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const showNotification = () => {
  notification.info({
    message: 'Notification topLeft',
    description: 'Hello, Ant Design!!',
    placement: 'bottomRight',
  });
};

const items = [
  {
    key: '1',
    label: 'Item 1',
  },
  {
    key: '2',
    label: 'Item 2',
  },
  {
    key: '3',
    label: 'Item 3',
  },
];




function App() {
  return (
    <div className="App">

      <Layout className=' mx-auto'>

        <Layout className='mx-3 mt-3'>
          <Header className="bg-white border-gray-700 rounded-lg justify-end flex items-center">

            <Space className='mx-1'>
              <Button type="default" onClick={showNotification}>
                Notify me
              </Button>
            </Space>

            <Space className='mx-3 hover:bg-slate-100 rounded-full px-[9px] pt-1 h-[60%] space-x-4 hover:scale-110 duration-700 my-auto'>
              <SettingFilled style={{ fontSize: '20px', color: 'skyblue' }} className='m-auto' />
            </Space>


            <Space className='bg-slate-100 h-[70%] rounded-full hidden md:flex' style={{ border: '' }}>
              <Dropdown className='hidden md:flex w-auto '
                menu={{
                  items,
                  selectable: true,
                  defaultSelectedKeys: ['2'],
                }}
              >
                <Typography.Link className=''>
                  <Space className='flex px-2 justify-center' >
                    <Badge size="small" count={5}>
                      <Avatar size="10px" icon={<UserOutlined />} className='justify-center flex items-center' />
                    </Badge>
                    <h5 className='mt-2 text-xs'>Shubham</h5>
                    <CaretDownFilled style={{ fontSize: '20px', color: 'black', }} className='flex items-center' />
                  </Space>
                </Typography.Link>
              </Dropdown>
            </Space>

          </Header>
        </Layout>

        <Layout>

          <Sider style={{ background: "white", border: ""}} className="h-[90vh] hover:shadow-xl duration-300 m-3 rounded-lg md:w-auto">
            <Space className='justify-center mt-4 flex md:hidden' style={{ border: '' }}>
              <Dropdown className='w-auto '
                menu={{
                  items,
                  selectable: true,
                  defaultSelectedKeys: ['1'],
                }}
              >
                <Typography.Link className=''>
                  <Space className='bg-slate-100 h-[70%] rounded-full py-2 flex px-2 justify-center' >
                    <Badge size="small" dot>
                      <Avatar size="10px" icon={<UserOutlined />} className='justify-center flex items-center' />
                    </Badge>
                    <h5 className='mt-2 hidden sm:flex'>Shubham</h5>
                    <CaretDownFilled style={{ fontSize: '20px', color: 'black' }} className='flex items-center' />
                  </Space>
                </Typography.Link>
              </Dropdown>
            </Space>
          </Sider>

          <Layout className='space-y-3 my-3'>
            <Content className='bg-white border-gray-700 rounded-lg mr-3 md:mr-0'>Content</Content>
            <Footer className='bg-white border-gray-700  rounded-lg'>Footer</Footer>
          </Layout>

          <Sider style={{ background: "white", border: "1px" }} className="bg-white border-gray-700 h-[90vh] hidden md:flex m-3 rounded-lg w-28 md:w-auto">
            <div className='bg-white '>

            </div>
            Side
          </Sider>

        </Layout>

      </Layout>
    </div>
  );
}

export default App;
