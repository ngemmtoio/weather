import styled from '@emotion/styled';

export let Input = styled.input`
  min-width: 370px;
  min-height: 50px;
  border-radius: 0 0 25px 25px;
  text-align: center;
  font-size: 20px;
  color: black;
  border: gray 1px solid;
  -webkit-box-shadow: 14px 12px 25px 13px rgba(2, 2, 2, 0.24);
  -moz-box-shadow: 14px 12px 25px 13px rgba(2, 2, 2, 0.24);
  box-shadow: 14px 12px 25px 13px rgba(2, 2, 2, 0.24);
  opacity: 0.7;
  &::placeholder {
    color: black;
  }
`;
