import dayjs from "dayjs";
import { useContext } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import image from "../assets/subscribeImg.jpg";
import UserContext from "../contexts/UserContext";
import 'dayjs/locale/pt-br.js';
import { informFutureDeliveryDates } from "../Utils/utils";
import { Banner, SubTitle, Title, Image } from "./shared/Styles";

export default function SubBanner({sub}) {
    const {user} = useContext(UserContext);
    const deliveryDates = informFutureDeliveryDates(sub.deliveryDate);
    const history = useHistory();

    return (
        <>
            <Title>Bom te ver por aqui, {user.name}.</Title>
            <SubTitle>"Agradecer é arte de atrair coisas boas"</SubTitle>
            <Banner>
                <Image src={image} alt="meditation"/>
                <InfoTitle>Plano: <Info>{parseFloat(sub.deliveryDate)?"Mensal":"Semanal"}</Info></InfoTitle>
                <InfoTitle>Data da assinatura: <Info>{dayjs(sub.entryDate).locale('pt-br').format('DD/MM/YYYY')}</Info></InfoTitle>
                <InfoTitle>Próximas entregas:<br/>
                    {deliveryDates.map((date, i) => 
                        <DeliveryDate key={i}>
                            {date} 
                            <br/>
                        </DeliveryDate> 
                    )}
                </InfoTitle>
                <InfoTitle>
                {sub.products.map((product, i) => <Info key={i}>{product}</Info>)}
                </InfoTitle>
            </Banner>
            <Button onClick={() => history.push('/feedback')}>Avaliar entregas</Button>
        </>
    );
}

const DeliveryDate = styled.span`
    color: #E63C80;
    margin-left: 38px;
`;

const Info = styled.span`
    color: #E63C80;
`;

const InfoTitle = styled.p`
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    color: #4D65A8;
    :last-child {
        display: flex;
        gap: 18px;
        margin: 28px 0 10px 0;
    }
`;

const Button = styled.button`
    background: #8C97EA;
    border-radius: 10px;
    width: 237px;
    height: 56px;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin: 20px auto 30px auto;
    border: none;
`;