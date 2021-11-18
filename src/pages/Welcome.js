import { useHistory } from 'react-router';
import styled from 'styled-components';
import image from '../assets/image05.webp';

export default function Welcome() {
    const history = useHistory();

    function relocate(whereTo) {
        history.push(whereTo);
    }
    return (
        <PageStyle>
            <Greetings>Bem vindo ao GratiBox</Greetings>
            <Description>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</Description>
            <Image src={image} alt='Welcome'/>
            <Filler>
                <Button onClick={() => relocate('/sign-up')} background='#8C97EA'>Quero começar</Button>
                <Button onClick={() => relocate('/sign-in')} background='inherit'>Já sou grato</Button>
            </Filler>
        </PageStyle>
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
`;

const Filler = styled.div`
    background: #4D65A8;
    width: 100%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    position: fixed;
    bottom: 0;
    left: 0;
    padding-top: 20px;
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

const PageStyle = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
`;

const Image = styled.img`
    width: 100%;
`;

