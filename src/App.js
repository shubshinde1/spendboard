import React from 'react';
import { Layout } from 'antd';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout className=' mx-auto'>
        <Sider style={{ background: "purple" }} className="h-[90vh]  m-3 rounded-lg w-28 md:w-auto">
          <div className='bg-red-300'>

          </div>
          Sidersdfghjk
        </Sider>
        <Layout className='space-y-3 my-3'>
          <Header className="bg-red-400 rounded-lg">Header</Header>
          <Content className='bg-blue-300 rounded-lg'>Content</Content>
          <Footer className='bg-red-700 text-white rounded-lg'>Footer</Footer>
        </Layout>
        <Sider style={{ background: "red" }} className="h-[90vh]  m-3 rounded-lg w-28 md:w-auto">
          <div className='bg-red-300 '>

          </div>
          Sidersdfghjk
        </Sider>
      </Layout>
    </div>
  );
}

export default App;
