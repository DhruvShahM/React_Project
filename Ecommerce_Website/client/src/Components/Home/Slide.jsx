import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box,Typography } from '@mui/material';

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 5
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2
    }
};

const Slide = ({ products }) => {
    return (
        <Box>
        <Box>
            <Typography>Deal of the day</Typography>
        </Box>
        <Carousel
            responsive={responsive} I
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            centerMode={true}
            dotListClass="custom-dot-list-style"
            itemClass='carousel-item-padding-40-px'
            containerClass='carousel-container'
        >
            {products.map(product => {
                return <img src={product.url} alt="product" />
            })
            }
        </Carousel>
        </Box>
    )
}

export default Slide; 