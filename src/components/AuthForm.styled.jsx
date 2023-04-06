import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;

  justify-content: center;

  padding: 15px;
`;
export const TitleInput = styled.label`
  display: block;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  display: block;
  width: 300px;
  height: 25px;
  background-color: transparent;
  border-radius: 15px;
  border: 2px solid #f09292;
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
