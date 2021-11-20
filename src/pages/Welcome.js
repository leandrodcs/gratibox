import { useHistory } from 'react-router';
import styled from 'styled-components';
import image from '../assets/welcomeImg.webp';

export default function Welcome() {
    const history = useHistory();

    function relocate(whereTo) {
        history.push(whereTo);
    }
    return (
        <Wrapper>
            <Greetings>Bem vindo ao GratiBox</Greetings>
            <Description>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</Description>
            <Image src={image} alt='Welcome'/>
            <Filler>
                <Button onClick={() => relocate('/sign-up')} top='-45px' background='#8C97EA'>Quero começar</Button>
                <Button onClick={() => relocate('/sign-in')} top='5px' background='inherit'>Já sou grato</Button>
            </Filler>
        </Wrapper>
    );
}

const Button = styled.button`
    width: 202px;
    height: 45px;
    background: ${(props) => props.background};
    border-radius: 10px;
    border: none;
    color: #FFFFFF;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    font-weight: 700;
    position: absolute;
    top: ${(props) => props.top};
`;

const Filler = styled.div`
    background: #4D65A8;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    position: relative;
`;

const Greetings = styled.h1`
    font-size: 28px;
    line-height: 33px;
    font-weight: 500;
    margin: 50px 16px 44px 16px;
`;

const Description = styled.p`
    font-size: 18px;
    line-height: 21px;
    font-weight: 300;
    padding: 0 16px;
`;

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    height: 100vh;
`;

const Image = styled.img`
    width: 100%;
`;

