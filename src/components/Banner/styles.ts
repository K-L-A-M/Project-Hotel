import styled from "styled-components";
import bannerCafe from "../../assets/cafeDaManha.jpg"
import bannerEstadia from "../..//assets/estadia.jpg"
import bannerPromocao from "../..//assets/promocao.jpg"
import bannerDesconto from "../../assets/banner_desconto.jpg"

export const StyledBanner = styled.div`
    margin-top: 2rem;
    .div_one{
        height: 20rem;
        width: 100%;
        background-image: url(${bannerCafe});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .div_two{
        height: 20rem;
        width: 100%;
        background-image: url(${bannerEstadia});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .div_three{
        height: 20rem;
        width: 100%;
        background-image: url(${bannerPromocao});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .div_four{
        height: 20rem;
        width: 100%;
        background-image: url(${bannerDesconto});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`