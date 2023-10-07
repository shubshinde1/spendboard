import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { Avatar, Layout, Space, Menu, } from 'antd';
import {
  RightSquareFilled,
  LeftSquareFilled
} from '@ant-design/icons';
import { Button, } from 'antd';
import Home from './Components/Home';
import Topbar from './Components/Topbar';


const { Header, Sider, Content } = Layout;











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

          </Sider>

          <Layout className='space-y-3 my-3 mr-3'>

            <Header className='bg-white rounded-lg'>
              <Topbar />
            </Header>

            <Content className='bg-white border-gray-700 rounded-lg  md:mr-0'>
              <Home />
            </Content>
            
          </Layout>


        </Layout>

      </Layout>
    </div>
  );
}

export default App;
