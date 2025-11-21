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
    background: #DDD;
    border-radius: 9px;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    p {
        font-family: var(--font-main);
        color: #555;
        font-weight: 500;
        font-size: var(--font-size-body-xs);
    }

    input[type="file"] {
        width: 100%;
        height: 100%;
        opacity: 0;
        position: absolute;
        cursor: pointer;
    }
`


export const BookTitle = styled.div`
    display: flex;
    flex-direction: column;
    #bookTitleInput {
        font-family: var(--font-title);
        font-size: var(--font-size-h1);
    }

    input {
        border: none;
    }

    input:focus {
        outline: none;
    }
        
    #AuthorInput {
        margin-left: 6px;
        font-size: var(--font-size-body-md);
        color: black;
        font-weight: 400;
        text-decoration: none;
        font-family: var(--font-title);
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

    textarea {
        padding: 1rem;
        border: none;
        height: 200px;
        background: #DDD;
        font-size: var(--font-size-body-sm);
        border-radius: 6px;
        outline: none;
        resize: none;
        font-family: var(--font-main);
    }
`

export const DeleteButton = styled.button`
  position: absolute;
  bottom: 2%;
  left: 0;
  transform: translateX(2.5%);
  width: 95%;
  height: 4rem;
  z-index: 20;
  border-radius: 9px;
  border: 5px solid #f00;
  background: #ff000055;
  font-family: var(--font-main);
  font-size: var(--font-size-button-md);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ff000099; /* escurece o fundo no hover */
    border-color: #ff0000cc; /* escurece a borda */
  }
`;

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