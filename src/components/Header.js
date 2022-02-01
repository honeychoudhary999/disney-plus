import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
         <Logo src="./images/disney-logo.svg"/>
         <NavMenu>
            <a>
                <img src="./images/home-icon.png"/>
                <span>HOME</span>
            </a>
            <a>
                <img src="./images/search-icon.png"/>
                <span>SEARCH</span>
            </a>
            <a>
                <img src="./images/watchlist.png"/>
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src="./images/originals-icon.png"/>
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src="./images/movies-icon.png"/>
                <span>MOVIES</span>
            </a>
            <a>
                <img src="./images/series-icon.png"/>
                <span>SERIES</span>
            </a>
         </NavMenu>
         <UserImg src="./images/cat1.jpeg" />
        </Nav>
    )
}
export default Header

const Nav=styled.nav`
heigth:90px;
background-color:#090b13;
display:flex;
align-items:center;
padding:0 36px;
overflow-x:hidden;
`
const Logo=styled.img`
width:80px;
`
const NavMenu=styled.div`
display:flex;
flex:1;
margin-left:25px;
align-item:center;
a{
    display:flex;
    cursor:pointer;
    align-items:center;
    padding:0 12px;
    img{
        height:20px;
    }
    span{
        font-size:13px;
        letter-spacing:1.42px;
        position:relative;

        &:after { 
            content="";
            height:2px;
            background:white;
            position: absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
        }
    }
}
`
const UserImg=styled.img`
width:48px;
height:48px;
border-radius:50%;
cursor:pointer;
`