import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AcUnit, Add, Hd, HomeOutlined, Search, Star, Tv } from '@material-ui/icons/';
import { keyframes } from "styled-components";
import { auth, provider } from "../Firebase";
import { useSelector, useDispatch } from 'react-redux'
import { setUserLoginDetails, setSignOutState, selectUserName, selectUserPhoto } from '../features/user/userSlice.js'

const Nav = styled.nav`
    position: fixed;
    background-color: rgba(9, 11, 19, .65);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
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
    max-height: 60px;
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

    @media(max-width: 768px){
        display: none;
    }
`
const Span = styled.span`
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

    &:hover {
        :before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
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

// Create the keyframes
const rotate = keyframes `
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 3s linear infinite;
  padding: 0 1.4rem;
  font-weight: bold;
  color: #0063e5;
  font-size: 2rem;
`;

const UserImage = styled.img`
  height: 100%;
`

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0;
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    width: max-content;
    background-color:  black;
    border-radius: 4px;
    box-shadow: 0px 2px 8px  #0063e5;
    opacity: 0;
`

const SignOut = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  cursor: pointer;

  ${UserImage} {
      border-radius: 50%;
      min-width: 100%;
      min-height: 100%;
      border: 2px solid #0063e5;
  }

  &:hover{
      ${DropDown} {
          opacity: 1;
          transition: 1s;
      }
  }
`

 const Header = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const userName = useSelector(selectUserName);
     const userPhoto = useSelector(selectUserPhoto);


    const handleAuth = () => {
        if (!userName) {
            auth.signInWithPopup(provider).then((result) => {
                setUser(result.user);
                navigate("/home");
                console.log(result.user)
            } ).catch( error => {alert(error.message)})
        } else if (userName){
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                navigate("/");
            }).catch(error => {alert(error.message)})
        }
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        )
    }

   return (
     <Nav>
        <Logo>
            <img src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" alt="Disney+" />
        </Logo>

        {!userName ? <><Rotate><AcUnit /></Rotate><Rotate><AcUnit /></Rotate><Login onClick={handleAuth}>Log in</Login></> : 
            <>
                <NavMenu>
                    <Rotate><AcUnit /></Rotate>
                    <Link to="/home" style={MenuLinks}><HomeOutlined style={MenuIcon} /><Span>HOME</Span></Link>
                    <Link to="/home" style={MenuLinks}><Search style={MenuIcon} /><Span>SEARCH</Span></Link>
                    <Link to="/home" style={MenuLinks}><Add style={MenuIcon} /><Span>WATCHLIST</Span></Link>
                    <Link to="/home" style={MenuLinks}><Star style={MenuIcon} /><Span>ORIGINALS</Span></Link>
                    <Link to="/home" style={MenuLinks}><Hd style={MenuIcon} /><Span>MOVIES</Span></Link>
                    <Link to="/home" style={MenuLinks}><Tv style={MenuIcon} /><Span>SERIES</Span></Link>
                    <Rotate><AcUnit /></Rotate>
                </NavMenu>
                <SignOut>
                    <UserImage src={userPhoto} alt={userName} />
                    <DropDown>
                        <span onClick={handleAuth}>Sign out</span>
                    </DropDown>
                </SignOut>
            </>
        }
    </Nav>
   )
 }
 
 export default Header