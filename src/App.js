import { useState } from 'react';
import React from 'react';
import './App.css';
import { Avatar, Layout, Space, Menu } from 'antd';
import {
  SettingFilled,
  CaretDownFilled,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
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
  const [collapsed, setCollapsed] = useState(0);
  return (
    <div className="App">

      <Layout className=' mx-auto '>



        <Layout>

          {/* <Sider style={{ background: "white", border: "" }} className="h-[90vh] hover:shadow-xl duration-300 m-3 rounded-lg md:w-[100%]">
            <Space className='flex justify-center items-center hover:bg-slate-100 m-2 rounded-lg'>
              <img src="./logo.png" className='w-40 my-3 rounded-none' />
            </Space>
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

            <Space className='bg-red-200 mx-2 px-2 w-[85%]'>
              <img src="./dashboard4.svg" className='rounded-none' />
              <h3 className='flex items-center'>Dashboard</h3>
            </Space>

          </Sider> */}


          <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: "white", border: "" }} className="h-[90vh] hover:shadow-xl duration-300 m-3 rounded-lg md:w-[100%]">
            {/* <div className="demo-logo-vertical" /> */}



            <Space className='flex justify-center items-center hover:bg-slate-100 m-2 rounded-lg'>

              <Space className='bg-slate-100 h-[70%] rounded-full flex md:hidden' style={{ border: '' }}>
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
                        {/* <Avatar size="10px" src="./avtr.jpg" style={{ border: '1px solid blue' }} className='my-auto justify-center flex items-center' /> */}
                      </Badge>
                      <h6 className='my-auto text-black text-xs  text-[#023154]popsemi'>Shubham</h6>
                      <CaretDownFilled style={{ fontSize: '20px', color: 'black', }} className='flex items-center' />
                    </Space>
                  </Typography.Link>
                </Dropdown>
              </Space>

            </Space>

            <Menu className='flex flex-col justify-start w-auto h-[90%]'
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <Avatar size="10px" src="./person.svg" style={{ color: 'white', marginLeft: '-10px', marginTop: '2px' }} className='w-9 justify-center flex items-center' />,
                  label: <h4 className='my-auto popsemi text-base text-[#023154]'>Shubham</h4>,
                  style: {
                    borderRadius: '10px',
                  }
                },
                {
                  key: '2',
                  icon: <Avatar src="./home.svg" style={{ margin: '5px -10px', }} />,
                  label: <h4 className='my-auto ml-3 popsemi text-sm text-[#023154]'>Home</h4>,
                  className: "flex mt-",
                  style: {
                    borderRadius: '10px',
                    marginTop: "30px"
                  }
                },
                {
                  key: '3',
                  icon: <Avatar src="./dashboard4.svg" style={{ margin: '5px -10px', }} />,
                  label: <h4 className='my-auto ml-3 popsemi text-sm text-[#023154]'>Dashboard</h4>,
                  style: {
                    borderRadius: '10px',

                  }
                },
                {
                  key: '4',
                  icon: <Avatar src="./explore.svg" style={{ margin: '5px -10px', }} />,
                  label: <h4 className='my-auto ml-3 popsemi text-sm text-[#023154]'>Explore</h4>,
                  style: {
                    borderRadius: '10px',

                  }
                },
                {
                  key: '5',
                  icon: <Avatar src="./spend.svg" style={{ margin: '5px -10px', }} />,
                  label: <h4 className='my-auto ml-3 popsemi text-sm text-[#023154]'>Spend</h4>,
                  style: {
                    borderRadius: '10px',

                  }
                },
                {
                  key: '6',
                  icon: <Avatar src="./shopping.svg" style={{ margin: '5px -10px', }} />,
                  label: <h4 className='my-auto ml-3 popsemi text-sm text-[#023154]'>Shopping</h4>,
                  style: {
                    borderRadius: '10px',

                  }
                },
              ]}
            />

            <Space className='bg-red-30 my-5 flex justify-start ml-6 items-stretch'>
              <Button className='hover:bg-slate-100'
                type=""
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
              />
            </Space>

          </Sider>

          <Layout className='space-y-3 my-3 mr-3'>


            {/* <Layout className='mx-3 mt-3'> */}
            <Header className="grid grid-cols-12  bg-white border-gray-700 rounded-lg justify-end items-center">


              <Space className='col-span-4 '>
                <img src="./logo.png" className='w-40 flex justify-start rounded-none' alt='logo' />
              </Space>


              <Space className='col-span-8 flex justify-end'>
                <Space className='mx-1 '>
                  <Button type="default" className='popsemi' onClick={showNotification}>
                    Notify me
                  </Button>
                </Space>

                <Space className='mx-3 hover:bg-slate-100 rounded-full px-[9px] pt-1 h-[60%] space-x-4 hover:scale-110 duration-700 my-auto'>
                  <SettingFilled style={{ fontSize: '20px', }} className='m-auto' />
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
                          {/* <Avatar size="10px" src="./avtr.jpg" style={{ border: '1px solid blue' }} className='my-auto justify-center flex items-center' /> */}
                        </Badge>
                        <h6 className='my-auto text-black text-xs popsemi'>Shubham</h6>
                        <CaretDownFilled style={{ fontSize: '20px', color: 'black', }} className='flex items-center' />
                      </Space>
                    </Typography.Link>
                  </Dropdown>
                </Space>
              </Space>


            </Header>
            {/* </Layout> */}


            <Content className='bg-white border-gray-700 rounded-lg mr-3 md:mr-0'>Content</Content>
            <Footer className='bg-white border-gray-700  rounded-lg'>Footer</Footer>
          </Layout>

          {/* <Sider style={{ background: "white", border: "1px" }} className="bg-white border-gray-700 h-[90vh] hidden md:flex m-3 rounded-lg w-28 md:w-auto">
            <div className='bg-white '>

            </div>
            Side
          </Sider> */}

        </Layout>

      </Layout>
    </div>
  );
}

export default App;
