import image from "../assets/subscribeImg.jpg";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { Banner, SubTitle, Title, Image, SubWrapper } from "../components/shared/Styles";
import FirstSubForm from "../components/FirstSubForm";
import SecondSubForm from "../components/SecondSubForm";
import { postSubscription } from "../services/service";
import { useHistory } from "react-router";
import { sendAlert } from "../components/shared/Alerts";

export default function SubscribeForm() {
    const {user} = useContext(UserContext);
    const [changePage, setChangePage] = useState(false);
    const [plan, setPlan] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [products, setProducts] = useState([]);
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [stateId, setStateId] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (!user.token) return history.push('/');
    })

    function submitHandler(setIsLoading) {
        const body = {
            fullName,
            address,
            zipCode,
            city,
            stateId,
            deliveryDate,
            products,
        }
        postSubscription(user.token, body)
        .then(res => {
            sendAlert('success', 'Parabéns!', 'Agora você é grato :)')
            setIsLoading(false);
            history.push('/home');
        })
        .catch(err => {
            sendAlert('error', 'Opa...', err.response.data)
            setIsLoading(false);
        })
    }

    return (
        <SubWrapper>
            <Title>Bom te ver por aqui, {user.name}.</Title>
            <SubTitle>"Agradecer é arte de atrair coisas boas"</SubTitle>
            <Banner>
                <Image src={image} alt="meditation"/>
                {!changePage ?
                    <FirstSubForm 
                        plan={plan}
                        setPlan={setPlan}
                        deliveryDate={deliveryDate}
                        setDeliveryDate={setDeliveryDate}
                        products={products}
                        setProducts={setProducts}
                        setChangePage={setChangePage}
                    />
                    :
                    <SecondSubForm 
                        fullName={fullName}
                        setFullName={setFullName}
                        address={address}
                        setAddress={setAddress}
                        zipCode={zipCode}
                        setZipCode={setZipCode}
                        city={city}
                        setCity={setCity}
                        stateId={stateId}
                        setStateId={setStateId}
                        submitHandler={submitHandler}
                    />
                }
            </Banner>
        </SubWrapper>
    );
}
