import React from 'react';
import { useForm } from "react-hook-form";
import './AddANewService.css'

const AddANewService = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const proceed = window.confirm('Do You Want To Add This New Car ?');
        if (proceed) {
            fetch("http://localhost:5000/addService", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.insertedId) {
                        alert('New Car Has Been Added!');
                        reset();
                    }
                })
            console.log(data)
        }
    };
    return (
        <div className="container border-4 rounded-3xl">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="py-4 text-design">Add A New CAR</h1>
                <input
                    {...register("title")}
                    placeholder="Title"
                    className="p-2 m-2 w-100"
                />
                <br />
                <input
                    {...register("location")}
                    placeholder="Location"
                    className="p-2 m-2 w-100"
                />
                <br />
                <input
                    {...register("description")}
                    placeholder="Description"
                    className="p-2 m-2 w-100"
                />
                <br />
                <input
                    {...register("price")}
                    placeholder="Price"
                    className="p-2 m-2 w-100"
                />
                <br />

                <input
                    {...register("img", { required: true })}
                    placeholder="Image Link"
                    className="p-2 m-2 w-100"
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input className="fw-bold" type="submit" />
            </form>
        </div>
    );
};

export default AddANewService;