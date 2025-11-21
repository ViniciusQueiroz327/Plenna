import styled from "styled-components";
import { Link } from "react-router-dom";


export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 24px;

    display: flex;
    justify-content: space-between;

    * {
        color: black;
    }   
`

export const BookCover = styled.div`
    width: 450px;
    height: 600px;
    background: #111122;
    border-radius: 9px;

    img {
        height: 600px;
        width: 450px;
        object-fit: cover;
        border-radius: 9px;
    }
`


export const BookTitle = styled.div`
    h1 {
        font-family: var(--font-title);
        font-size: var(--font-size-h1);
    }
        
    h3 {
        font-weight: 400;
        font-size: var(--font-size-label);
    }
`
        
export const AuthorLink = styled(Link)`
    font-size: var(--font-size-body-md);
    color: black;
    font-weight: 400;
    text-decoration: none;
    font-family: var(--font-title);

    &:hover {
        color: #0055cc;
        text-decoration: underline;
    }
`;

export const BookDetails = styled.div`
    width: 65%;
    padding: 2rem;
    // background: green;
    border-radius: 9px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: left;
    font-family: var(--font-main);
            
    p {
        color: black;
        font-size: var(--font-size-body-sm);
    }
`

export const BookDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
        font-size: var(--font-size-h3);
    }

    p {
        font-size: var(--font-size-body-sm);
    }
`

export const BookActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
`

export const RequestButton = styled.button`
    font-family: var(--font-main);
    color: white;
    font-size: var(--font-size-button-sm);
    font-weight: 400;
    width: 300px;
    padding: 1rem 0;
    border: none;
    border-radius: 9px;
    background: #4444FF;
    transition: .25s ease;

    &:hover {
        opacity: .7;
    }
`