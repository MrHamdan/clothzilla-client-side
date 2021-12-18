import React from 'react';
import './Banner.css'
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../images/shop1.jpg'
import banner2 from '../../images/shop2.jpg'
import banner3 from '../../images/shop3.jpg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../images/clothes.jpg'
import { Typography } from '@mui/material';





const Banner = () => {
    return (
        <div>
            <div className="text-start custom-bg d-flex align-items-center">
                <span className="text-style container">The Highest Quality Collection Of Clothes <br /> For You And Your Family!<br /><Button className=" mx-auto" variant="success">Take A Tour</Button></span>
            </div>

            <div className="carousel-design mx-auto">
                <h1 className="text-design mt-5 ">The Best And Trending Fashion Collection</h1>
                <h5 className="container mb-4 text-color-h5 fw-bold">Here are some pictures of  our cloth store those images have been taken while we first open our showroom Get yourself best and trending clothes have fun with your life enjoy every moment of your life.Those clothes images was amazing while we are capturing these moments. Now you can take a look at the photos !!!</h5>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <div className="container mt-5">
                    <h1 className="text-design mt-5">Exclusive Deals</h1>
                    <h5 className="text-color-h5 fw-bold">We have some exclusive deals available. Becoming a member can get you an exclusive deal which is pretty amazing. 20% discount on your first purchase and we have more amazing gifts for you </h5>
                </div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img
                                style={{ width: "100%" }}
                                src={doctor} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            textAlign: 'left'
                        }}>
                            <Box>
                                <Typography variant="h3" sx={{ mb: 5 }} style={{ color: '#7abd78' }}>
                                    <span className="text-design">Best Cloth Deals</span>
                                </Typography>
                                <Typography variant="h4" className="text-color-h5 fw-bold">
                                    Save up to 30% on your next cloth purchase with our exclusive cloth deals and offers. Get your clothes today!
                                </Typography>
                                <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 15, fontWeight: 300 }}>
                                    <span className="text-color-h5 fw-bold">Many cloth deals and offers are exclusive to our members. Sign up today to get your exclusive cloth deals and offers. Get in touch with us!</span>
                                </Typography>
                                <Button variant="success">Learn More</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default Banner;