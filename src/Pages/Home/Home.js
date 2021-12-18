import React, { useEffect, useState } from 'react';
import { Card, Col, Nav, Row, Spinner, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';
import './Home.css'
import Contact from '../Contact/Contact';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { HashLink } from 'react-router-hash-link';
import image from '../../images/storess.jpg'


const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://sleepy-scrubland-93051.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id="home">
            <div>
                <Header></Header>
                <Banner></Banner>
            </div>
            <div className="container mt-5">
                <div className="text-center">
                    <h1 id="clothes" className="text-design3">Our Clothes Collections And Special Deals </h1>
                    <h5 className="text-color-h5 fw-bold">We have so many different variants of new trending clothes collections in our showroom that you are most welcome to come and visit us and watch our cloth collections.We also have regular clothes which is very reasonable in price that you can purchase.We provide best prices available for our customers because your happiness is our happiness.</h5>
                </div>
                {services.length === 0 ?
                    <Spinner animation="border" variant="success" />
                    :
                    <div className="row row-cols-1 row-cols-md-3 pb-5">
                        {/* Show services */}
                        {
                            services.slice(0, 6).map(service => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                        }
                    </div>

                }
                <Nav.Link as={HashLink} to="/moreServices"><Button variant="success" className="rounded-pill">Explore More Clothes <i className="fas fa-car"></i> </Button></Nav.Link>
                <div>
                    <div>
                        <h1 className="py-5 text-design">Our Happy Client Reviews</h1>
                        <Reviews></Reviews>
                    </div>
                </div>
            </div>
            <h1 id="about" className="py-5 text-design">About Us</h1>
            <h5 className="container mb-5 text-color-h5 fw-bold ">Clothzilla.com is a leading digital marketplace and solutions provider for the automotive industry that connects cloth shoppers with sellers. Launched in 1998 and headquartered in Chicago, the Company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers. In a rapidly changing market, Clothzilla.com enables dealerships and OEMs with innovative technical solutions and data-driven intelligence to better reach and influence ready-to-buy shoppers, increase inventory turn and gain market share. In 2021, Clothzilla.com acquired Dealer Inspire®, an innovative technology company building solutions that future-proof dealerships with more efficient operations, a faster and easier cloth buying process, and connected digital experiences that sell and service more.</h5>
            <div className="about-us mt-2 grid md:grid-cols-2 sm:grid-cols-1 mb-5">

                <Fade left>

                    <div>
                        <img className=" rounded" src={image} alt="" />
                    </div>

                </Fade>

                <div>

                    <Fade right>

                        <Row xs={1} md={2} className="g-4 pt-4 px-2 container mx-auto">

                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://www.lux-review.com/wp-content/uploads/2020/10/sale.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Big Discount On Clothes</Card.Title>
                                        <Card.Text>
                                            We have big discount on clothes. We always have best clothes collection in our showroom. So you can buy best clothes in our showroom. We always make sure that our clients are satisfied with our clothes.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://learn.canva.com/wp-content/uploads/2020/01/How-to-design-a-t-shirt-from-scratch_Banner.png" alt="" />
                                    <Card.Body>
                                        <Card.Title>New Tranding Fashion</Card.Title>
                                        <Card.Text>
                                            We have new tranding clothes collection in our showroom. So many different variants of clothes we also have kids collection in our store. Also you can customize your own clothes by our designers.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1271626545_gwmgka.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>30 Days Return</Card.Title>
                                        <Card.Text>
                                            If you have any problem with our products, we will give you 30 days return. We always make sure that our clients are satisfied with our service. Client satisfaction is our main priority. We are always ready to help you. Make sure that you are satisfied with our service.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://www.corporatevision-news.com/wp-content/uploads/2021/03/Delivery.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Fastest Delivery</Card.Title>
                                        <Card.Text>
                                            We always try to deliver our clients clothes as fast as possible we dont want to waste time. Once a client order is placed we go throw with the paper work as fast as we can then we have our own cargo trucks and plane which we use to deliver the clothes to the client.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                    </Fade>



                </div>
            </div>
            <div>
                <div id="contact" className="py-5"><h1 className="text-design">Contact</h1></div>
                <h5 className="mb-5 text-color-h5">We are always here to help you feel free to contact with us and stay connected with us we always listen to our client feedback and everyday we are trying to improve our company deals and policy</h5>
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;