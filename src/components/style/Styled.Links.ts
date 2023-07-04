import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LinkProps } from '../../types';


export const Links = styled(Link)<LinkProps>`

    text-decoration: none;
    color: #000;

  ${({ $cart }) =>
    $cart &&
    `
    position: absolute;
    right: 12%;
    margin-top: 2vh;
  `}

  ${({ $login }) =>
    $login &&
    `
    text-decoration: none;
    color: #000000;
  `}

`;

