import { observer, useLocalObservable } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
const Wrapper = styled.div`
  height: 100%;
  .ant-upload-list {
    position: absolute;
    top: 20%;
  }
`;
const { Dragger } = Upload;
export const UploadComponent = observer(() => {
  const state = useLocalObservable(() => ({}));
  const props = {
    name: 'file',
    multiple: true,
    action: 'http://127.0.0.1:7779/fileserver/upload',
    onChange(info: { file: { name?: any; status?: any }; fileList: any }) {
      console.log(info);
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: { dataTransfer: { files: any } }) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  return (
    <Wrapper>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">上传文件</p>
        <p className="ant-upload-hint">支持拖拽</p>
      </Dragger>
    </Wrapper>
  );
});
