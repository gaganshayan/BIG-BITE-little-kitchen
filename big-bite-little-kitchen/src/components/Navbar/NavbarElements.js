import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #white;
    height: 200px;
    display: flex;
    font-size: 25px;
    position: sticky;
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 100px;
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 25px;
    justify-content: flex-end;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #000000;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #000000;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

