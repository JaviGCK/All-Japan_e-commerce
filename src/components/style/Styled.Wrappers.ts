import { styled } from "styled-components";
import { WrappProps } from "../../types";

export const Wrapp = styled.div<WrappProps>`
  ${({ Top }) =>
    Top &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 5vh;
  `}

  ${({ Body }) =>
    Body &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 5vh;
  `}

  ${({ ContainerProduct }) =>
    ContainerProduct &&
    `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5vw;
    justify-content: center;
    margin: 5vw 2vw;
  `}

  ${({ CardProduct }) =>
    CardProduct &&
    `
    position: relative;
    height: 30vh;
    padding: 5vw;
    text-align: center;
    line-height: 1.5rem;
    border-radius: 10px;
    background-color: #ffffff;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
    box-shadow: 0px 0px 1px 1px #FDEAEA;
  `}

  ${({ Footer }) =>
    Footer &&
    `
    position: relative;
    text-align: center;
    height: 30vh;
    background-color: #FDEAEA;
  `}

  ${({ SocialMedia }) =>
    SocialMedia &&
    `
    position: absolute;
    top: 15vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
  `}
`;

// FOOTER

export const WrappFooter = styled.footer`
    position: relative;
    text-align: center;
    height: 30vh;
    background-color: #FDEAEA;
`

