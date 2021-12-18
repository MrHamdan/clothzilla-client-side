import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { _id, title, location, price, description, img } = service;
    return (
        <div className="col pt-5">
            <div className="card card-design h-100 rounded-3xl shadow-2xl">
                <img src={img} className="card-img-top p-4" alt="..." />
                <div className="card-body text-white-300 fw-bolder">
                    <h3 className="card-title">{title}</h3>
                    <h5>Location: {location}</h5>
                    <p className="card-text">{description}</p>
                    <p>Price: $ {price}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/services/${_id}`}><small><Button variant="success" className="rounded-pill">Purchase Here <i className="fas fa-credit-card"></i></Button></small></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;