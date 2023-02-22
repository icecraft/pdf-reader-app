
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Layout, Modal, theme, Button} from 'antd';
import PdfView from '../components/PdfView';
import Translate from '../components/Translate';

const { Header, Content, Sider, Footer} = Layout;

const App: React.FC = () => {

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function onFileChange(event: any) {
      dispatch({type: "LOAD_PDF", payload: event.target.files[0]});
      setIsModalOpen(false);
  }

  const {
       token: { colorBgContainer },
    } = theme.useToken();
  return (

    <Layout>
      <div style={{ width: 256, position: "fixed", top: "20px" }}>
      <Button type="primary" onClick={showModal}  >
        Load Pdf
      </Button>
      </div>
      <Modal title="choose file" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <label htmlFor="file">Load from file:</label>{' '}
        <input onChange={onFileChange} type="file" />
      </Modal>

      <Content style={{ padding: '0 50px' }}>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Content style={{ padding: '0 2px', minHeight: 765 }}> 
              <PdfView/> 
          </Content>
          <Sider width="420" style={{padding: '2px 0', background: colorBgContainer}}>
            <div style={{  position: "fixed" }}>
              <Translate />
            </div>
          </Sider>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;