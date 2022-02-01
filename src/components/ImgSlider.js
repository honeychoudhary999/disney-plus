import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    let settings={
        dots:true,
        infinite:true,
        speed:500,
        slideToShow:1,
        slideToScroll:1,
        autoplay:true,
    }
    return (
        <Carousel{...settings}>
        <Wrap>
            <img src="/images/slide-image1.jpeg"/>
        </Wrap>
         <Wrap>
         <img src="/images/junglebook.jpeg"/>
     </Wrap>
     <Wrap>
     <img src="/images/sanju.png"/>
     </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel=styled(Slider)`
Margin-top:10px;
ul li button{
    &:before {
        font-size:10px;
        color rgb(150,158,171);
    }
}
li.slick-active button:before{
    color:white;
}
button{
    z-index:1;
}
.slick-list{
    overflow: visible;
}
`
const Wrap=styled.div`
cursor:pointer;


img{
    max-height:300px;
    align-items:center;
    border: 4px solid transparent;
    border-radius:4px;
    width:100%;
    height:100%;
    transition-duration:300ms;
    box-shadow:rgb(0 0 0 / 69%) 0px 20px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover{
        border:4px solid rgba(249, 245, 249, 0.8);
    }
}
`