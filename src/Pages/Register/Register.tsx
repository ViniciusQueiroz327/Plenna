import { MasterContainer } from "./style"
import { FormContainer } from "../Login/style"
const Register = () => {
    return (<>
        <MasterContainer>
            <FormContainer>
                <h1>Cadastro</h1>
                <form action="">
                    <label htmlFor="nome de usuário">Nome de Usuário</label>
                    <label htmlFor="email">E-mail</label>
                    <label htmlFor="password">Senha</label>
                </form>
                    <a href="/login">Já possui uma conta?</a>
            </FormContainer>
        </MasterContainer>
    </>)
}

export { Register }