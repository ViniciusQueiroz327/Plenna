import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { BooksWrapper, BooksContainer } from "./style";
import { BookCard } from "../../Components/BookCard/BookCard";
import books from "../../../books.json";
import { PageContainer } from "../../Components/PageContainer/PageContainer";
import { DonateBookButton } from "../../Components/DonateBookButton/DonateBookButton";

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
        <DonateBookButton/>
      </PageContainer>

      <Footer />
    </div>
    </>)
}

export { BooksCatalog }