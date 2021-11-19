import Loader from "react-loader-spinner";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Button, Greetings, Input, FormWrapper } from "../components/shared/Styles";
import { Link } from "react-router-dom";
import { signIn } from "../services/service";
import UserContext from "../contexts/UserContext";
import { sendAlert } from "../components/shared/Alerts";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const {setUser} = useContext(UserContext);
    const history = useHistory();

    function signInHandler(e) {
        e.preventDefault();
        setIsLoading(true);
        const body = {
            email,
            password,
        }
        signIn(body)
        .then(res => {
            localStorage.setItem("user", JSON.stringify(res.data));
            setUser(res.data);
            console.log({...res.data, ...body});
            setIsLoading(false);
            history.push('/home')
        })
        .catch(err =>{
            setIsLoading(false);
            sendAlert('error', 'Opa...', err.response.data)
        })
    }


    return (
        <FormWrapper onSubmit={signInHandler}>
            <Greetings>Bem vindo ao GratiBox</Greetings>
            <Input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading}/>
            <Input placeholder='Senha' type='password' value={password} onChange={(e) => setPassword(e.target.value)} disabled={isLoading}/>
            <Button type='submit' disabled={isLoading}>{isLoading?<Loader type="ThreeDots" color="#FFFFFF" height={13} /> : `Login`}</Button>
            <Link to='/sign-up'>Ainda não sou grato</Link>
        </FormWrapper>
    );
}