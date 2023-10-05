import React from 'react';
import { Layout } from 'antd';
import './App.css';


const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout className=' mx-auto'>
        <Layout className='mx-3 mt-3'>
          <Header className="bg-red-400 rounded-lg">
            <div className='bg-emerald-400 w-28 mx-auto'>
              <img src={'img'} alt="" />
            </div>
          </Header>
        </Layout>
        <Layout>
          <Sider style={{ background: "purple" }} className="h-[90vh]  m-3 rounded-lg w-28 md:w-auto">Sidebar</Sider>
          <Layout className='space-y-3 my-3'>
            <Content className='bg-blue-300 rounded-lg'>Content</Content>
            <Footer className='bg-red-700 text-white rounded-lg'>Footer</Footer>
          </Layout>
          <Sider style={{ background: "red" }} className="h-[90vh] hidden md:flex m-3 rounded-lg w-28 md:w-auto">
            <div className='bg-red-300 '>

            </div>
            Sidersdfghjk
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
