import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src="https://res.cloudinary.com/dtybx6nov/image/upload/v1606710939/BIG_bite_2_dnycly.png" alt='logo' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/aboutme" activeStyle>
                        About Me
                    </NavLink>
                    <NavLink to="/gallery" activeStyle>
                        Gallery
                    </NavLink>
                    <NavLink to="/blog" activeStyle>
                        Blog
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;

