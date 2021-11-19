import { Button, Greetings, Input, SignWrapper } from "../components/shared/Styles";
import { signUp } from "../services/service";

export default function SignUp() {

    function signUpHandler() {
        signUp("body")
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err.response.data))
    }

    return (
        <SignWrapper>
            <Greetings>Bem vindo ao GratiBox</Greetings>
            <Input placeholder='Nome' />
            <Input placeholder='Email' />
            <Input placeholder='Senha' />
            <Input placeholder='Confirmar senha' />
            <Button onClick={signUpHandler}>Cadastrar</Button>
        </SignWrapper>
    );
}