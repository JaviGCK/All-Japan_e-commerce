import { styled } from "styled-components";

//HEADER

export const WrapperTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 5vh;
`

export const WrapperBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 5vh;
`

// MAIN

export const WrappContainerProduct = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5vw;
    justify-content: center;
    margin: 5vw 2vw;
`

// PRODUCTSCARD

export const WrappCardProduct = styled.div`
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
`

// FOOTER

export const WrappFooter = styled.footer`
    position: relative;
    text-align: center;
    height: 30vh;
    background-color: #FDEAEA;
`

export const WrappSocialMedia = styled.div`
    position: absolute;
    top: 15vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
`