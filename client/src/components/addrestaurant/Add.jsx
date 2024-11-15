import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import './add.css';

const Add = () => {
    const restaurants = {
        name: "",
        Type: "",
        Location: "",
        Rating: "",
        Top_food: ""
    };

    const [restaurant, setRestaurant] = useState(restaurants);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setRestaurant({ ...restaurant, [name]: value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create", restaurant)
            .then((response) => {
                toast.success(response.data.msg, { position: "top-right" });
                navigate("/");
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="container">
            <Link to="/" className="back-link">Back</Link>
            <h3>Add New Restaurant</h3>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' onChange={inputHandler} id='name' name='name' placeholder='Enter the Name of restaurant' />
                </div>
                <div>
                    <label htmlFor='type'>Type</label>
                    <input type='text' onChange={inputHandler} id='type' name='type' placeholder='Type' />
                </div>
                <div>
                    <label htmlFor='location'>Location</label>
                    <input type='text' onChange={inputHandler} id='location' name='location' placeholder='Location' />
                </div>
                <div>
                    <label htmlFor='rating'>Rating</label>
                    <input type='number' onChange={inputHandler} id='rating' name='rating' placeholder='Rating' />
                </div>
                <div>
                    <label htmlFor='top_food'>Top Food</label>
                    <input type='text' onChange={inputHandler} id='top_food' name='top_food' placeholder='Top food' />
                </div>
                <div>
                    <button type="submit">ADD RESTAURANT</button>
                </div>
            </form>
        </div>
    );
};

export default Add;
