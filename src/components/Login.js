import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
           <CTA>
               <CTALogo src="/images/logo.png" />
               <SignUp>GET ALL THERE</SignUp>
               <Description>
The Disney Bundle includes subscriptions to Disney+, ESPN+, and the Hulu plan you select for a discounted price, as compared to the retail price of each subscription when purchased separately. The Disney Bundle is available with Hulu (Ad-supported) for $13.99/mo* or with Hulu (No Ads) for $19.99/mo.</Description>
               <CTALogoTwo src="/images/disney-brands.png"/>
               </CTA> 
        </Container>
    )
}

export default Login
const  Container=styled.div`
position:relative;
height:calc(100vh - 90px);
display:flex;
justify-content:center;
&:before
{   
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
    background-image:url("/images/disney-background-1.png");
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
  
}

`
const CTA=styled.div`
max-width:650px;
padding:80px 40px;
display:flex;
margin-top:100px;
flex-direction:column;
padding:17px 0;
`
const CTALogo=styled.img`
height:120px;
`
const SignUp=styled.button`
width:100%;
background-color:#0063e5;
color:white;
font-weight:bold;
height:40px;
font-size:20px;
border-radius:10px;
border:2px solid silver;
cursor:pointer;
transition:all 250ms;
letter-spacing:1.5px; 
margin-top:8px;
margin-bottom:10px;
&:hover{
    background:#0483ee;

}
`
const Description=styled.p`
font-size:11px;
text-align:center;
line-height:1.5;
`
const CTALogoTwo=styled.img`

`