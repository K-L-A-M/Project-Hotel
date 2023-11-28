import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyledBanner } from "./styles"

export const Banner = () => {
    const settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    };

    return (
        <StyledBanner>
            <Slider {...settings}>
                <div className='div_one'>
                    <h1>1</h1>
                </div>
                <div className='div_two'>
                    
                </div>
                <div className='div_three'>
                    
                </div>
                <div className='div_four'>
                    
                </div>
            </Slider>
        </StyledBanner>
    )
}