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

    $ > button {
        opactiy: 0;
    }
`

  return (
    <Carousel {...settings}>
        <div>
            <h1>1</h1>
        </div>
        <div>
            <h1>2</h1>
        </div>
        <div>
            <h1>3</h1>
        </div>
    </Carousel>
  )
}

export default ImageSlider;