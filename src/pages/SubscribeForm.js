import image from "../assets/subscribeImg.jpg";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { Banner, SubTitle, Title, Wrapper, Image } from "../components/shared/Styles";
import FirstSubForm from "../components/FirstSubForm";
import SecondSubForm from "../components/SecondSubForm";

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

    function submitHandler() {

    }

    return (
        <Wrapper>
            <Title>Bom te ver por aqui, {user.name}.</Title>
            <SubTitle>"Agradecer é arte de atrair coisas boas"</SubTitle>
            <Banner>
                <Image src={image} alt="meditation"/>
                {false ?
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
        </Wrapper>
    );
}
