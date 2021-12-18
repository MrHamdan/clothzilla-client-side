import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const proceed = window.confirm('Do You Want To Add Your Review ?');
        if (proceed) {
            fetch("https://sleepy-scrubland-93051.herokuapp.com/addReview", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.insertedId) {
                        alert('Your Review Has Been Added!');
                        reset();
                    }
                })
            console.log(data)
        }
    };
    return (
        <div className="container border-4 rounded-3xl">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="py-4 text-design">Add A Review</h1>
                <input
                    value={user?.displayName}
                    {...register("name")}
                    placeholder="name"
                    className="p-2 m-2 w-100"
                    readOnly
                />
                <br />
                <input
                    {...register("description")}
                    placeholder="Review Here"
                    className="p-2 m-2 w-100"
                />
                <br />
                <select {...register("rating")} className="form-select" aria-label="Default select example">
                    <option selected>Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;