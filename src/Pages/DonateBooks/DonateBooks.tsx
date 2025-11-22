import { Header } from "../../Components/Header/Header"
import { Footer } from "../../Components/Footer/Footer"

import { PageContainer } from "../../Components/PageContainer/PageContainer";
import {
    Wrapper,
    BookCover,
    BookDetails,
    RequestButton,
    BookTitle,
    BookDescription,
    BookActions,
    DeleteButton
} from "./style";

import { useState } from "react";
import { useRef } from "react";


interface Book {
    titulo?: string;
    autor?: string;
    editora?: string;
    sinopse?: string;
    capa?: string;
    disponibilidade: boolean;
}

const DonateBooks = () => {
    const [file, setFile] = useState<File | null>(null);
    const [book, setBook] = useState<Book>({ titulo: "", autor: "", sinopse: "", editora: "", disponibilidade: true});
    
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleDelete = () => {
    setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleCreate = async () => {
        if (!book) return;

        try {
            const payload = {
                titulo: book.titulo || "",
                autor: book.autor || "",
                sinopse: book.sinopse || "",
                capa: book.capa || file,
                disponibilidade: book.disponibilidade ?? true,
            };

            const response = await fetch("https://plenna-api.onrender.com/api/book", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error("Erro ao atualizar o livro");

            // const data = await response.json();
            // console.log("Livro atualizado:", data);
            alert("Livro atualizado com sucesso!");
        } catch (err) {
            console.error(err);
            alert("Falha ao atualizar o livro.");
        }
    };


    return (<>
        <Header />

        <PageContainer>
            <Wrapper>
                <BookCover>
                    <input type="file" ref={fileInputRef} onChange={handleChange} />
                    {file && (
                        <>
                        <img
                            src={URL.createObjectURL(file)}
                            draggable={false}
                            alt="Pré-visualização da capa"
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "9px",
                            }}
                            />

                        <DeleteButton onClick={handleDelete}>Deletar</DeleteButton>
                        </>
                    )}
                    {!file && (
                        <>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#555"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                        </svg>
                        <p>Importar Capa</p>
                        </>
                    )}
                </BookCover>
                <BookDetails>
                    <BookTitle>
                        <input
                            id="bookTitleInput"
                            type="text"
                            onChange={e => setBook({ ...book, titulo: e.target.value })}
                            placeholder="Título"
                        />
                        <h3>
                            por
                            <input
                                id="AuthorInput"
                                type="text"
                                onChange={e => setBook({ ...book, autor: e.target.value })}
                                placeholder="Autor"
                            />
                        </h3>
                    </BookTitle>

                    <hr />

                    <BookDescription>
                        <h3>Descrição</h3>
                        <textarea
                            onChange={e => setBook({...book, sinopse: e.target.value})}
                            placeholder="Digite a descrição do livro"
                        />
                    </BookDescription>

                    <hr />
                    <BookActions>
                        <RequestButton onClick={handleCreate}>
                            Doar Livro
                        </RequestButton>
                    </BookActions>
                </BookDetails>
            </Wrapper>

        </PageContainer>
        <Footer />
    </>)
}

export { DonateBooks }
