import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const FormContainer = styled.div`
  display: flex;
  width: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;

  padding: 45px;
  background: rgb(213, 19, 104);
  background: linear-gradient(
    90deg,
    rgba(213, 19, 104, 1) 0%,
    rgba(158, 148, 233, 1) 100%
  );
  border: 2px solid #f09292;
`;

export const TitleInput = styled.label`
  display: block;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Input = styled(Field)`
  display: block;
  width: 300px;
  height: 25px;
  background-color: transparent;
  border-radius: 15px;
  border: 2px solid #f09292;
`;

export const Error = styled(ErrorMessage)`
  color: #bd0000;
  font-weight: 700;
  font-size: 18px;
`;

export const NameInput = styled.span`
  display: block;
  color: black;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  display: block;
  padding: 10px 20px;
  margin-left: auto;
  margin-right: auto;

  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 15px;
  color: black;
  background: rgb(0, 117, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 117, 255, 0.8) 15%,
    rgba(0, 208, 255, 0.8) 89%
  );
  &:hover,
  &:focus {
    background: linear-gradient(
      90deg,
      rgba(0, 117, 255, 1) 15%,
      rgba(0, 208, 255, 1) 89%
    );
  }
`;
