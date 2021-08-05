import styled from 'styled-components';
import { File } from './components/File';
import { Upload } from './components/Upload';
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  .list {
    width: 80%;
    background-color: #3c3c3c;
  }
  .upload {
    width: 20%;
    background-color: #eee;
  }
`;
export default function IndexPage() {
  return (
    <Wrapper>
      <div className="list">
        <File />
      </div>
      <div className="upload">
        <Upload />
      </div>
    </Wrapper>
  );
}
