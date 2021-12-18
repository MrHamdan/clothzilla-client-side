import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDelete] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);



    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted, isUpdated])



    const handleDelete = id => {
        console.log(id, 'deleted');
        const proceed = window.confirm('Are you sure you want to cancle this user order?');
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrders/${id}`, {
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


    const handleUpdate = id => {
        const updatedStatus = {
            status: 'Shipped'
        }
        axios.put(`http://localhost:5000/orders/${id}`, {
            status: 'Shipped'
        })
            .then(res => {
                if (res.data.acknowledged) {
                    alert("Approved! Status updated")
                    setIsUpdated(true);
                }
            })
    }


    return (
        <div>
            <div>
                <div>
                    <div>
                        <h1 className="p-4 text-design">Manage All Orders</h1>
                        {!orders && (<div className="text-center">
                            <div className="spinner-grow text-danger text-center" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>)}


                        <div>
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {
                                    orders.map(order => <div key={order._id}>
                                        <div className="col pt-5">
                                            <div className="card card-design h-100 rounded-3xl shadow-2xl">
                                                <img src={order.img} className="card-img-top p-4" alt="..." />
                                                <div className="card-body text-white-300 fw-bolder">
                                                    <h3 className="card-title">{order.title}</h3>
                                                    <h5>Location: {order.location}</h5>
                                                    <p className="card-text">{order.description}</p>
                                                    <p>Price: $ {order.price}</p>
                                                    <p>Name: {order.name}</p>
                                                    <p>Email: {order.email}</p>
                                                    <p>Phone: {order.number}</p>
                                                    <p>Address: {order.address}</p>
                                                    <h5>Status: {order.status}</h5>
                                                </div>
                                                <div className="card-footer">
                                                    <button onClick={() => handleUpdate(order._id)} className="btn btn-success m-1"><i className="far fa-thumbs-up"></i> Update</button>
                                                    <button onClick={() => handleDelete(order._id)} className="btn btn-danger my-1"><i className="fas fa-eraser"></i> Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;