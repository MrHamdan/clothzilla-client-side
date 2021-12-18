import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch("https://sleepy-scrubland-93051.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <Header></Header>
            <h1 className="text-design">Explore more clothes and find your best deals</h1>
            {services.length === 0 ?
                <Spinner animation="border" variant="success" />
                :
                <div className="container mb-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            services.map(service => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>}
            <Footer></Footer>
        </div>
    );
};

export default Services;