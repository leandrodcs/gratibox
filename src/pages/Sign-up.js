import { useState } from "react";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { sendAlert } from "../components/shared/Alerts";
import { Button, Greetings, Input, FormWrapper } from "../components/shared/Styles";
import { signUp } from "../services/service";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function signUpHandler(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            sendAlert('error', 'Opa...', 'Os campos de senha devem ser iguais.');
            return;
        }
        setIsLoading(true);
        const body = {
            name,
            email,
            password,
        };
        signUp(body)
        .then(res => {
            setIsLoading(false);
            history.push('/sign-in');
        })
        .catch(err => {
            setIsLoading(false);
            sendAlert('error', 'Opa...', err.response.data)
        })
    }

    return (
        <FormWrapper onSubmit={signUpHandler}>
            <Greetings>Bem vindo ao GratiBox</Greetings>
            <Input placeholder='Nome' type='text' value={name} onChange={(e) => setName(e.target.value)} disabled={isLoading}/>
            <Input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading}/>
            <Input placeholder='Senha' type='password' value={password} onChange={(e) => setPassword(e.target.value)} disabled={isLoading}/>
            <Input placeholder='Confirmar senha' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={isLoading}/>
            <Button type='submit' disabled={isLoading}>{isLoading?<Loader type="ThreeDots" color="#FFFFFF" height={13} /> : `Cadastrar`}</Button>
            <Link to='/sign-in'>Já sou grato</Link>
        </FormWrapper>
    );
}