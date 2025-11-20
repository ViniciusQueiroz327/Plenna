import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { BooksWrapper, BooksContainer } from "./style";
import { BookCard } from "../../Components/BookCard/BookCard";
import books from "../../../books.json";

const BooksCatalog = ( ) => {
    return (<>
        <div className="home">
      <header className="header">
        <Header />
      </header>
      <BooksWrapper>
            <h1>Catálogo de Livros</h1>
      
            <BooksContainer>
              {books.map((book, index) => (
                <BookCard
                  key={index}
                  image={book.image}
                  title={book.title}
                />
              ))}
            </BooksContainer>
          </BooksWrapper>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
    </>)
}

export { BooksCatalog }