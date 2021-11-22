import Loader from "react-loader-spinner";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button, Greetings, Input, FormWrapper } from "../components/shared/Styles";
import { Link } from "react-router-dom";
import { signIn } from "../services/service";
import UserContext from "../contexts/UserContext";
import { sendAlert } from "../components/shared/Alerts";

export default function SignIn() {
    const {user, setUser} = useContext(UserContext);
    const [email, setEmail] = useState(user.email||"");
    const [password, setPassword] = useState(user.password||"");
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function signInHandler(e) {
        if (e) e.preventDefault();
        setIsLoading(true);
        const body = {
            email,
            password,
        };
        signIn(body)
        .then(res => {
            localStorage.setItem("user", JSON.stringify(res.data));
            setUser(res.data);
            setIsLoading(false);
            history.push('/home')
        })
        .catch(err =>{
            setIsLoading(false);
            sendAlert('error', 'Opa...', 'Email e/ou senha incorreto(s)')
        })
    }

    useEffect(() => {
        if(user.email) {
            signInHandler();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);




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