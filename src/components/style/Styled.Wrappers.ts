import { styled } from "styled-components";
import { WrappProps } from "../../types";

export const Wrapp = styled.div<WrappProps>`

  ${({ $Top }) =>
    $Top &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 5vh;
  `}

  ${({ $Body }) =>
    $Body &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 5vh;
  `}

  ${({ $ContainerProduct }) =>
    $ContainerProduct &&
    `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5vw;
    justify-content: center;
    margin: 5vw 2vw;
  `}

  ${({ $CardProduct }) =>
    $CardProduct &&
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

${({ $DetailProduct }) =>
    $DetailProduct &&
    `
    display: block;
    margin: 0 auto;
    width: 80vw;
    height: 50vw;
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
    background-color: #fff;

  `}

  ${({ $Footer }) =>
    $Footer &&
    `
    position: relative;
    text-align: center;
    height: 30vh;
    background-color: #FDEAEA;
  `}

  ${({ $SocialMedia }) =>
    $SocialMedia &&
    `
    position: absolute;
    top: 15vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
  `}

${({ $counter }) =>
    $counter &&
    `
    display: flex;
    justify-content: space-between;
    
    margin-bottom: 5vh;
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
    

  `}

${({ $detailtext }) =>
    $detailtext &&
    `
    margin: 2vw;
    line-height: 2rem;
  `}

${({ $counterNum }) =>
    $counterNum &&
    `
   position: absolute;
   bottom: 23%;
   left: 50%;
   transform: translateX(-50%);
   font-size: 3rem;
  `}

${({ $cart }) =>
    $cart &&
    `
    width: 75vw;
    margin: 5vw;
    text-align: center;
    line-height: 2rem;
    border-radius: 10px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
    box-shadow: 0px 0px 1px 1px #FDEAEA;
    background-color: #ffffff;
  `}

${({ $carttitle }) =>
    $carttitle &&
    `
  width: 100%;
  text-align: center;
  background-color: #FDEbEb;
`}

${({ $form }) =>
    $form &&
    `
  display: block;
  width: 60vw;
  padding: 10vw;
  text-align: center;
  border-radius: 10px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
  background: #fff;
  
`}

`;

// FOOTER

export const WrappFooter = styled.footer`
    position: relative;
    text-align: center;
    justify-content: center;
    height: 30vh;
    background-color: #FDEAEA;
`
export const WrappSection = styled.section<WrappProps>`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    min-height: 60vh;

    ${({ $form }) =>
    $form &&
    `
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: #FDEbEb;
`}
`
