import styled from 'styled-components';

export const InputStyle = styled.div`
  input {
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #f4ede8;

    & + input {
      margin-top: 10px;
    }
  }
`;
