import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Button } from 'react-bootstrap';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [path, setPath] = useState("");
    const [isDelete, setDelete] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:5000/myorders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));

    }, [isDelete, user.email]);


    const handleDelete = (id) => {
        const proceed = window.confirm('Cancel Your Order ! Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrders/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        alert('Your Order Has Been Cancled')
                        setDelete(!isDelete);
                    } else {
                        setDelete(false);
                    }
                });
        }

    };


    return (
        <div>
            <div>
                <div>
                    <h1 className="p-4 text-design">My Orders</h1>
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
                                                <Button onClick={() => handleDelete(order._id)} className="btn btn-danger my-1"><i className="fas fa-ban"></i> Cancle Order</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>


                </div>
            </div>



        </div >
    );
};

export default MyOrders;