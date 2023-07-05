import { styled } from "styled-components";
import { HeadingProps } from "../../types";

//HEADING

export const H1Logo = styled.h1`
    font-size: 3.5rem;
`


export const H3 = styled.h3`
    padding-top: 3vh;
`

export const H2 = styled.h2<HeadingProps>`
    padding: 2vw;
    font-size: 1.5rem;

${({ $cart }) =>
    $cart &&
    `
    widht: 100%
    padding: 5vw 100vw 0 100vw;
    font-size: 3rem;
  `}
`

//SPAN

export const SpanProduct = styled.span`
    position: absolute;
    bottom: 2vh;
    left: 5vw;
    font-size: 1.5rem;
    font-weight: bold;
`