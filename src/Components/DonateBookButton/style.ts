import styled from "styled-components";

export const DonateButton = styled.button`
    border: none;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    background: hsla(197, 60%, 40%, 1.00);
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    transition: opacity .25s ease;

    &:hover {
        cursor: pointer;
        opacity: .8;
    }
`