import { MasterContainer, FormContainer, LinksContainer } from "./style"

const Login = () => {
    return (<>
        <MasterContainer>
                <FormContainer>
                    <h1>Welcome to Plenna!</h1>
                    <form action="">
                        <label htmlFor="email">E-mail</label>
                        <label htmlFor="password">Senha</label>
                    </form>
                    <LinksContainer>
                        <a href="/register">Cadastre-se</a>
                        <a href="#" id="esqueceuASenha">Esqueceu a senha?</a>
                    </LinksContainer>
                </FormContainer>
        </MasterContainer>
    </>)
}

export { Login }