import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import './BookService.css'


const BookService = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const bookingInfo = {
            ...data,
            status: 'pending'
        };
        console.log(bookingInfo);
        axios.post('http://localhost:5000/order', bookingInfo)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Successful. Visit My Orders On Dashboard For Update.');
                    reset();
                }
            })
    };


    return (
        <div>
            <Header></Header>
            {service.length === 0 ?
                <Spinner animation="border" variant="success" />
                :
                <div>
                    <h1 className="text-design pt-5 pb-5">Here's Full Detail's Of {service?.title}.</h1>
                    <div className="border mb-3 mx-2">
                        <div className="row g-0">

                            <div className="col-md-6 d-flex align-items-center">
                                <img src={service?.img} className="img-fluid pt-5 rounded" alt="..." />
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="card-body">
                                    <div>
                                        <h3 className="card-title text-design py-3">{service?.title}</h3>
                                        <h6 className="card-text container">{service?.description}</h6>
                                        <h5 className="card-text"><small className="text-muted ">Location: {service?.location}</small></h5>
                                        <span className="fs-5 ">Price: $ {service?.price}</span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="py-4">
                        <form className="rounded-3xl container form-width" onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-design2">Order Informations. <i className="far fa-address-card"></i></h1>


                            <input type="hidden" defaultValue={service?.img} {...register("img")} readOnly />


                            <label className="text-black" htmlFor="">Title:</label>
                            <input defaultValue={service?.title} {...register("title")} readOnly />

                            <label className="text-black" htmlFor="">Location:</label>
                            <input defaultValue={service?.location} {...register("location")} readOnly />

                            <label className="text-black" htmlFor="">Price:</label>
                            <input defaultValue={service?.price} {...register("price")} readOnly />

                            <label className="text-black" htmlFor="">Name:</label>
                            <input defaultValue={user?.displayName} {...register("name")} readOnly />


                            <label className="text-black" htmlFor="">Email:</label>
                            <input defaultValue={user?.email} {...register("email", { required: true })} readOnly />

                            <label className="text-black" htmlFor="">Address:</label>
                            <input  {...register("address", { required: true })} />

                            <label className="text-black" htmlFor="">Contact No:</label>
                            <input  {...register("number", { required: true })} />

                            <label className="text-black" htmlFor="">Date:</label>
                            <input {...register("date", { required: true })} type="date" className="" />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className="fw-bold" type="submit" value="Order" />
                        </form>
                    </div>
                </div>}
        </div>
    );
};

export default BookService;