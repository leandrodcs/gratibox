import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import image01 from "../assets/homeImg01.jpg";
import image02 from "../assets/homeImage02.jpg";
import { SubTitle, Title, Image } from "./shared/Styles";
import styled from "styled-components";
import { useHistory } from "react-router";

export default function SublessBanner() {
    const {user} = useContext(UserContext);
    const history = useHistory();

    return (
        <>
            <Title>Bom te ver por aqui, {user.name}.</Title>
            <SubTitle>Você ainda não assinou um plano, que tal começar agora?</SubTitle>
            <Banner>
                <Image src={image01} alt="meditation"/>
                <Description>Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.</Description>
                <Button onClick={() => history.push('/subscribe')}>Assinar</Button>
            </Banner>
            <Banner>
                <Image src={image02} alt="meditation"/>
                <Description>Você recebe um box por mês.<br/><br/> Ideal para queme está começando agora.</Description>
                <Button onClick={() => history.push('/subscribe')}>Assinar</Button>
            </Banner>
        </>
    );
}

const Banner = styled.div`
    background: #E5CDB3;
    border-radius: 25px;
    padding: 0 22px;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;

const Description = styled.p`
    color: #4D65A8;
    font-size: 18px;
    line-height: 21px;
    font-weight: 700;
`;

const Button = styled.button`
    background: #8C97EA;
    border-radius: 10px;
    width: 168px;
    height: 39px;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin: 30px auto 30px auto;
    border: none;
`;