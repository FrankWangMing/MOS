/*
 * @Descripttion:
 * @version:
 * @Author: WangMing
 * @Date: 2021-08-04 14:43:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-04 15:43:27
 */
import { observer, useLocalStore } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div``;
export const File = observer(() => {
  const state = useLocalStore(() => ({}));
  return <Wrapper> File </Wrapper>;
});
