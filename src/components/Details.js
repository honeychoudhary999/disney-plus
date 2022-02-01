import React from 'react'
import styled from 'styled-components'
function Details() {
    return (
        <Container>
            <Background>
            <img src="/images/bao.jpg"/>   
            </Background>
        <ImageTitle>
            <img src="/images/bao-logo.png"/>
            </ImageTitle>
            <Controls>
            <PlayButton>
                <img src="/images/play.png"/>
            <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
            <img src="/images/trailer.png"/>
            <span>TRAILOR</span>
            </TrailerButton>
            <AddButton>
            <span>+</span>
            </AddButton>
            <GroupWatchButton>
            <img src="/images/group.png"/>
            </GroupWatchButton>
            </Controls>
            <SubTitle>
               2018 . 7m  . Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
            The film is about an aging and lonely Chinese-Canadian mother, suffering from empty nest syndrome, who receives an unexpected second chance at motherhood when she makes a steamed bun (baozi) that comes to life. The film won the Academy Award for Best Animated Short Film at the 91st Academy Awards.
            </Description>
        </Container>
    )
}

export default Details

const Container=styled.div`
min-height: calc(100vh-70px);
padding:0 calc(3.5vw + 5px);
position:relative;
`
const Background=styled.div`
position:fixed;
top:0
bottom:0;
right:0;
left:0;
z-index:-1;
opacity:0.8;
img{
    width:100%;
    height:100%;
    object-fit:contain;
}
`
const ImageTitle=styled.div`
height:30vh;
min-height:170px;
width:35vw;
min-width:200px;
img{
    
    height:100%;
    width:100%;
    object-fit:contain;
}
`
const Controls=styled.div`
display:flex;
align-items:center;

`
const PlayButton=styled.button`
border-radius:4px;
font-size:15px;
display:flex;
align-items:center;
height:56px;
background:rgb(249,249,249);
border:none;
padding:0px 24px;
margin-right:28px;
letter-spacing:1.8px;
cursor:pointer;
img{
    height:40px;
}
&:hover{
    background:rgb(198,198,198);
}
`
const TrailerButton=styled(PlayButton)`
background:rgb(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249);
`
const AddButton=styled.button`
width:44px;
margin-right:16px;
height:44px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border:2px solid white;
background:rgb(0,0,0,0.6);
cursor:pointer;
span{
    font-size:30px;
    color:white; 
}
`
const GroupWatchButton=styled(AddButton)`
background:rgb(0,0,0);
img{
    height:30px;
    width:30px;
}
` 
const SubTitle=styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-top:26px;
`
const Description=styled.div`
line-height:1.4;
font-size:20px;
max-width:700px;
margin-top:16px;
color:rgb(249,249,249);
`