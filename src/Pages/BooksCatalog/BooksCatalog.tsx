import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { BooksWrapper, BooksContainer } from "./style";
import { BookCard } from "../../Components/BookCard/BookCard";
import books from "../../../books.json";
import { PageContainer } from "../../Components/PageContainer/PageContainer";

const BooksCatalog = () => {
    return (<>
      <div className="home">
      <Header />
      
      <PageContainer>
        <BooksWrapper>
          <h2>Catálogo de Livros</h2>
    
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
      </PageContainer>

      <Footer />
    </div>
    </>)
}

export { BooksCatalog }