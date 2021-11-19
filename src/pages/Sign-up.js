import { Button, Greetings, Input, SignWrapper } from "../components/shared/Styles";

export default function SignUp() {

    return (
        <SignWrapper>
            <Greetings>Bem vindo ao GratiBox</Greetings>
            <Input placeholder='Nome' />
            <Input placeholder='Email' />
            <Input placeholder='Senha' />
            <Input placeholder='Confirmar senha' />
            <Button>Cadastrar</Button>
        </SignWrapper>
    );
}