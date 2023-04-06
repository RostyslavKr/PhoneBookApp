import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
`;
export const ContainerContacts = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 0 0 2% 2%;
  background-color: #fff;
`;
export const TitlePhonebook = styled.h1`
  text-align: center;
  color: black;
`;

export const HeaderAppBar = styled.header`
  padding: 0;
  margin-bottom: 30px;
  background: rgb(213, 19, 104);
  background: linear-gradient(
    90deg,
    rgba(213, 19, 104, 1) 0%,
    rgba(158, 148, 233, 1) 100%
  );

  border-radius: 10px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;
