import { observer, useLocalObservable } from 'mobx-react-lite';
import styled from 'styled-components';
import React, { useState } from 'react';
import { Tree } from 'antd';
const Wrapper = styled.div``;
type Prop = {
  data: any;
  active: any[];
  setActive: (active: Prop['active']) => void;
};
export const FileTree = observer((prop: Prop) => {
  const state = useLocalObservable(() => ({}));
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const onExpand = (expandedKeysValue: React.Key[]) => {
    console.log('onExpand', expandedKeysValue);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue: React.Key[]) => {
    console.log('onCheck', checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
    prop.setActive(checkedKeysValue);
  };

  const onSelect = (selectedKeysValue: React.Key[], info: any) => {
    console.log('onSelect', info);
    console.log('onSelect', selectedKeysValue);

    // console.log(checkedKeys.push(selectedKeysValue[0]))
    setCheckedKeys([...checkedKeys, selectedKeysValue[0]]);
    // setCheckedKeys(checkedKeys.push(selectedKeysValue[0]));
    setSelectedKeys(selectedKeysValue);
    prop.setActive([...checkedKeys, selectedKeysValue[0]]);
  };

  return (
    <Wrapper>
      <Tree
        checkable
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        onSelect={onSelect}
        selectedKeys={selectedKeys}
        treeData={prop.data}
      />
    </Wrapper>
  );
});
