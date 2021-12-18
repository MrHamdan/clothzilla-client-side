import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageAllServices = () => {
    const [services, setServices] = useState([]);
    const [isDeleted, setIsDelete] = useState(false);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isDeleted])


    const handleDelete = id => {
        console.log(id, 'deleted');
        const proceed = window.confirm('Are you sure you want to cancle this user order?');
        if (proceed) {
            fetch(`http://localhost:5000/deleteServices/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Delete Successful!')
                        setIsDelete(!isDeleted);
                    }
                    else {
                        setIsDelete(false);
                    }
                })
        }
    }


    return (
        <div>
            <h1 className="text-design">Manage All Services</h1>
            {services.length === 0 ?
                <Spinner animation="border" variant="success" />
                :
                <div className="container mb-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            services.map(service => <div key={service._id}>
                                <div className="col pt-5">
                                    <div className="card card-design h-100 rounded-3xl shadow-2xl">
                                        <img src={service.img} className="card-img-top p-4" alt="..." />
                                        <div className="card-body text-white-300 fw-bolder">
                                            <h3 className="card-title">{service.title}</h3>
                                            <h5>Location: {service.location}</h5>
                                            <p className="card-text">{service.description}</p>
                                            <p>Price: $ {service.price}</p>
                                        </div>
                                        <div className="card-footer">
                                            <button onClick={() => handleDelete(service._id)} className="btn btn-danger my-1"><i className="fas fa-eraser"></i> Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>}
        </div>
    );
};

export default ManageAllServices;