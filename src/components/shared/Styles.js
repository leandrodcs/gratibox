import styled from "styled-components";

const Button = styled.button`
    background: #8C97EA;
    border-radius: 10px;
    width: 237px;
    height: 56px;
    color: #FFFFFF;
    border: none;
    font-weight: bold;
    font-size: 30px;
    line-height: 42px;
    text-align: center;
    margin-top: 60px;
`;

const Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #604848;
    border-radius: 10px;
    padding: 0px 17px;
    width: 325px;
    height: 64px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    outline-color: #8C97EA;
    ::placeholder {
        color: rgba(96, 72, 72, 0.4);
    }
`;

const Greetings = styled.p`
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    margin-bottom: 38px;
`;

const SignWrapper = styled.main`
    display: flex;
    flex-direction: column;
    padding: 100px 25px 0px 25px;
    color: #FFFFFF;
    align-items: center;
    text-align: center;
    gap: 8px;
`;

export {
    Button,
    Input,
    Greetings,
    SignWrapper,
}