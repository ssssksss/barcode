import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url("/images/barcode.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const LoginWrapper = styled.div`
  width: calc(100% - 30%);
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #999999;
  border-radius: 40px;
  padding: 50px;
  background: #f5f5f5;
  margin-top: -130px;
  margin-left: auto;
  margin-right: auto;
  /* position: absolute;
  top: 120px;
  left: 240px; */
`;

export const Title = styled.h1``;

// 로그인
export const LoginEmailWrapper = styled.div`
  width: 100%;
`;
export const Label = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  border: 1px solid #000000;
  border-radius: 20px;
  ::placeholder {
    font-size: 12px;
    color: blue;
    padding-left: 10px;
    transition: all 0.5s ease-in-out;
  }
  :focus::placeholder {
    color: transparent;
  }
`;
export const LoginPasswordWrapper = styled.div`
  width: 100%;
`;

// 회원가입 이동
export const SignUpWrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const SignUpTitle = styled.div`
  font-size: 20px;
`;
export const SignUp = styled.div`
  font-size: 20px;
  margin-left: 30px;
  cursor: pointer;
`;

// 로그인 버튼
export const LoginButton = styled.button`
  width: calc(100% - 30%);
  height: 50px;
  border: none;
  border-radius: 20px;
  font-size: 30px;
  font-weight: 700;
  background: linear-gradient(to right, black, white, black);
  cursor: pointer;
`;
