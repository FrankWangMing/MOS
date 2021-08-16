/*
 * @Descripttion:
 * @version:
 * @Author: WangMing
 * @Date: 2021-08-04 14:43:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-05 17:51:04
 */
import { file } from '@/domain';
import { observer, useLocalObservable } from 'mobx-react-lite';
import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { FileTree } from './FileTree';
import { Button } from 'antd';

const Wrapper = styled.div`
  .filelist-box {
    padding: 10px 15px;
  }
`;
export const File = observer(() => {
  const state = useLocalObservable(() => ({
    data: [],
    setData(data) {
      state.data = data;
    },
    active: [],
    setActive(active) {
      state.active = active;
    },
  }));
  useEffect(() => {
    file.getFile().then((res) => {
      console.log(res);
      state.setData(res);
    });
  }, []);

  const download = () => {
    console.log(state.active);
    state.active.map((i: string) => {
      console.log();
      window.open(`http://10.0.1.89:7777${i.substring(13)}`);
    });
  };
  return (
    <Wrapper>
      <div className="filelist-box">
        <Button
          type="primary"
          disabled={state.active.length == 0 ? true : false}
          style={{ marginBottom: '10px' }}
          onClick={download}
        >
          下载
        </Button>
        <FileTree
          data={state.data}
          active={state.active}
          setActive={state.setActive}
        />
      </div>
    </Wrapper>
  );
});
