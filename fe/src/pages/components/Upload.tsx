import { observer, useLocalStore } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div``;
export const Upload = observer(() => {
  const state = useLocalStore(() => ({}));
  return <Wrapper> Upload </Wrapper>;
});
