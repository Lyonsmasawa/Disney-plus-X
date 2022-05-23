import styled from "styled-components"

const Nav = styled.nav`
    position: fixed;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 36px;
    leter-spacing: 16px;
    z-index: 1001;
`
 
 const Header = () => {
   return (
     <Nav>
        <Logo>
            <img src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" alt="Disney+" />
        </Logo>
    </Nav>
   )
 }
 
 export default Header