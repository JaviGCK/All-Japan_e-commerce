import styled from "styled-components";
import { ButtonProps } from "../../types";

export const Button = styled.button<ButtonProps>`
  width: 40vw;
  height: 5vh;
  margin: 2vw;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 4px 4px rgba(57, 55, 55, 0.25);
  color: #000000;
  background-color: #fdd4d4;
  cursor: pointer;

  &:hover {
    font-size: 1.5rem;
    background-color: #fdc4c4;
  }

  &:active {
    box-shadow: inset 0 4px 4px rgba(57, 55, 55, 0.25);
  }

  ${({ $login }) =>
    $login &&
    `
    position: absolute;
    right: 10%;
    top: -2vh;
    width: 15vw;
    height: 7vw;
    display: flex;
    justify-content: center;
    align-items: botton;
  `}

  ${({ $subs }) =>
    $subs &&
    `
    position: absolute;
    top: 24%;
    right: 15%;
    width: 30vw;
    height: 3vh;
    border: 1px solid black;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    z-index: 1000;
  `}
`;
