import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { Avatar, Layout, Space, Menu, } from 'antd';
import {
  CaretDownFilled,
  RightSquareFilled,
  LeftSquareFilled
} from '@ant-design/icons';
import { notification, Dropdown, Typography, Button, Segmented, } from 'antd';
import { useNavigate } from 'react-router-dom';
// import items from 'antd/es/list/Item';


const { Header, Sider, Content } = Layout;

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
    <div className="App">

      <Layout className=' mx-auto '>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: "white", }} className="h-[90vh] hover:shadow-xl duration-300 m-3 rounded-lg md:w-[100%]">
            <Menu className='flex flex-col justify-start w-auto bg-transparent h-[85%]'
              onClick={(items) => {
                const navigate = useNavigate;
                navigate(items.key);
              }}
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '/',
                  icon: <Avatar src="./person.svg" style={{ color: 'white', marginLeft: '-10px', marginTop: '2px', }} className='h-8 w-8 justify-center flex items-center ' />,
                  label: <h4 className='my-auto popsemi text-base text-[#023154]'>Shubham</h4>,
                  style: {
                    borderRadius: '10px',
                  }
                },
                {
                  key: '/home',
                  icon: <Avatar src="./home.svg" style={{ margin: '5px -10px', }} className='h-7 w-7' />,
                  label: <h4 className='my-auto ml-3 popsemi text-sm text-[#023154]'>Home</h4>,
                  className: "flex mt-",
                  style: {
                    borderRadius: '10px',
                    marginTop: "30px",
                  }
                },
                {
                  key: '/dashboard',
                  icon: <Avatar src="./dashboard4.svg" style={{ margin: '5px -10px', }} className='h-7 w-7' />,
                  label: <h4 className='my-auto ml-3 popsemi text-sm text-[#023154]'>Dashboard</h4>,
                  style: {
                    borderRadius: '10px',

                  }
                },
                {
                  key: '/explore',
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

          </Sider>

          <Layout className='space-y-3 my-3 mr-3'>

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

                {/* <Badge size="small" count={5}> */}
                <Avatar src="./notifications.svg" icon='' className=' m-auto hover:bg-slate-100 rounded-full p-2 w-10 h-10' />
                {/* </Badge> */}

                <Dropdown className='flex w-auto bg-slate-100 hover:bg-slate-200 duration-1000 py-1 rounded-full'
                  menu={{
                    items,
                    selectable: true,
                    defaultSelectedKeys: ['2'],
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

            <Content className='bg-white border-gray-700 rounded-lg  md:mr-0'>
              <div className='grid grid-cols-9 gap-5 m-5'>
                <div className='col-span-9 md:col-span-6 gap-5 bg-red-00 grid grid-rows-6'>
                  <div className='row-span-4 bg-blue-40'>
                    <Space direction=''>
                      <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} className='popsemi' />
                    </Space>



                    <div>
                      <canvas id="myChart"></canvas>
                    </div>

                    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

                    <script src='./chart.js'></script>



                  </div>
                  <div className='row-span-2 bg-blue-100'><h2>Hello</h2></div>

                </div>
                <div className='col-span-9 md:col-span-3 bg-slate-100 rounded-lg'>
                  <h3>Hello</h3>

                </div>
              </div>
            </Content>
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
