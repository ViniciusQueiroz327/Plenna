import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { BooksWrapper, BooksContainer } from "./style";
import { BookCard } from "../../Components/BookCard/BookCard";
import { PageContainer } from "../../Components/PageContainer/PageContainer";

interface Book {
  id: string;
  titulo: string;
  capa: string;
}

const AuthorBooks = () => {
  const { name } = useParams();
  const authorName = decodeURIComponent(name || "");

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://plenna-api.onrender.com/api/books/author/${encodeURIComponent(authorName)}`)
    // https://plenna-api.onrender.com/api/books/author/
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar livros do autor:", err);
        setLoading(false);
      });
  }, [authorName]);

  return (
    <>
      <div className="home">
        <Header />

        <PageContainer>
          <BooksWrapper>
            <h2>Livros de {authorName}</h2>

            {loading ? (
              <p>Carregando livros...</p>
            ) : books.length === 0 ? (
              <p>Nenhum livro encontrado para este autor.</p>
            ) : (
              <BooksContainer>
                {books.map((book) => (
                  <BookCard
                    key={book.id}
                    image={book.capa}
                    title={book.titulo}
                  />
                ))}
              </BooksContainer>
            )}
          </BooksWrapper>
        </PageContainer>

        <Footer />
      </div>
    </>
  );
};

export { AuthorBooks };