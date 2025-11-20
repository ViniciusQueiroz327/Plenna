import { MasterContainer } from "./style"
import { FormContainer } from "./style"
import { Header } from "../../Components/Header/Header"

const BookRegister = () => {
    return (<>
        <Header />
        <MasterContainer>
            <FormContainer className="FormContainer">
                <h1>Cadastro de Livro</h1>
                <form action="">
                    <label htmlFor="nome do livro">Nome do livro</label>
                    <label htmlFor="autor">Autor</label>
                    <label htmlFor="editora">Editora</label>
                </form>
            </FormContainer>
        </MasterContainer>
    </>)
}

export { BookRegister }