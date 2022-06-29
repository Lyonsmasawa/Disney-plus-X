import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

const Carousel = styled(Slider)`
    margin-top: 10px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover{
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before{
            font-size: 12px;
            color: gray;
        }
    }

    li.slick-active button:before{
        color: #0063e5;
    }

    .slick-list{
        overflow: initial;
    }

    .slick-prev{
        left: -45px;
    }

    .slick-next{
        right: -45px;
    }
`;

const Wrap = styled.div`
    border-radius: 4px;
    padding: 6px;
    cursor: pointer;
    position: relative;

    a{
        border-radius: 4px;
        box-shadow: 0 0 2px;
        cursor: pointer;
        display: block;
        padding: 4px;

        img{
            width: 100%;
            height: 100%;
        }

        &:hover {
            padding:0;
            border: 2px solid #0063e5;
            transition-duration: 300ms;
        }
    }
`

  return (
    <Carousel {...settings}>
        <Wrap>
            <a>
                <img src="/images/slider-badging.jpg" alt="" />
            </a>
        </Wrap>
        <Wrap>
            <a>
                <img src="/images/slider-scale.jpg" alt="" />
            </a>
        </Wrap>
        <Wrap>
            <a>
                <img src="/images/slider-badag.jpg" alt="" />
            </a>
        </Wrap>
        <Wrap>
            <a>
                <img src="/images/slider-scales.jpg" alt="" />
            </a>
        </Wrap>
    </Carousel>
  )
}

export default ImageSlider;