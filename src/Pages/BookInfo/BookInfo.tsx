import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { PageContainer } from "../../Components/PageContainer/PageContainer";
import {
    Wrapper,
    BookCover,
    BookDetails,
    RequestButton,
    BookTitle,
    AuthorLink,
    BookDescription,
    BookActions
} from "./style";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


interface Book {
  id: string;
  titulo: string;
  autor: string;
  capa: string;
  sinopse: string;
}


const BookInfo = () => {
    const { id } = useParams();
    const [book, setBook] = useState<Book | null>(null);

    useEffect(() => {
        async function loadBook() {
            const response = await fetch(`https://plenna-api.onrender.com/api/book/${id}`);
            const data = await response.json();
            console.log(data)
            setBook(data);
        }

        loadBook();
    }, [id]);

    if (!book) return <p>Carregando...</p>;

    return (<>
        <Header />

        <PageContainer>
            <Wrapper>
                <BookCover>
                    <img src={book.capa} alt="" />
                </BookCover>
                <BookDetails>
                    <BookTitle>
                        <h1>{book.titulo}</h1>
                        <h3>
                            por <AuthorLink to={`/author/${book.autor}`}>{book.autor}</AuthorLink>
                        </h3>
                    </BookTitle>

                    <hr />

                    <BookDescription>
                        <h3>Descrição</h3>
                        <p>{book.sinopse}</p>
                    </BookDescription>

                    <hr />
                    <BookActions>
                        <RequestButton>
                            Solicitar Livro
                        </RequestButton>
                    </BookActions>
                </BookDetails>
            </Wrapper>

        </PageContainer>
        <Footer />
    </>)
}

export { BookInfo }