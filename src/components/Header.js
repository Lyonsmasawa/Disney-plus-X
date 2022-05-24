import { Link } from "react-router-dom"
import styled from "styled-components"
import { Add, Hd, HomeOutlined, Search, Star, Tv } from '@material-ui/icons/';

const Nav = styled.nav`
    position: fixed;
    background-color: rgba(9, 11, 19, .6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 1001;
`

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img {
        display: block;
        width: 100%;
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row no-wrap;
    justify-content: flex-end;
    height: 100%;
    margin: 0;
    position: relative;
    padding: 0px;
    margin-right: auto;    
    margin-left: 25px;

    span {
        color: rgb(249, 249, 249);
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1.8px;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative; 

        
        &:before {
            content: "";
            background-color: rgb(249, 249, 249);
            bottom: -3px;
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
        }
    }

    &:hover {
        span:before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }


    @media(max-width: 768px){
        display: none;
    }
`

const MenuLinks = {
    display: "flex", 
    alignItems: "center",
    padding: "0 12px",
}

const  MenuIcon ={
    maxWidth: "30px",
    maxHeight: "30px",
    zIndex: "auto",
}

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    letter-spacing: 1.5px;
    transition: all 0.2s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color: black;
    }
`

 const Header = () => {
   return (
     <Nav>
        <Logo>
            <img src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" alt="Disney+" />
        </Logo>
        <NavMenu>
            <Link to="/home" style={MenuLinks}><HomeOutlined style={MenuIcon} /><span>HOME</span></Link>
            <Link to="/home" style={MenuLinks}><Search style={MenuIcon} /><span>SEARCH</span></Link>
            <Link to="/home" style={MenuLinks}><Add style={MenuIcon} /><span>WATCHLIST</span></Link>
            <Link to="/home" style={MenuLinks}><Star style={MenuIcon} /><span>ORIGINALS</span></Link>
            <Link to="/home" style={MenuLinks}><Hd style={MenuIcon} /><span>MOVIES</span></Link>
            <Link to="/home" style={MenuLinks}><Tv style={MenuIcon} /><span>SERIES</span></Link>
        </NavMenu>
        <Login>Log in</Login>
    </Nav>
   )
 }
 
 export default Header