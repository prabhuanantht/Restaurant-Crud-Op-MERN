import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./restaurant.css";
import { Link } from "react-router-dom";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/getall");
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch restaurants", { position: "top-right" });
      }
    };
    fetchData();
  }, []);

  const deleteRestaurant = async (restaurantId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/delete/${restaurantId}`);
      setRestaurants((prevRestaurants) =>
        prevRestaurants.filter((restaurant) => restaurant._id !== restaurantId)
      );
      toast.success(response.data.msg, { position: "top-right" });
    } catch (error) {
      console.error("Error deleting restaurant:", error);
      toast.error("Failed to delete restaurant", { position: "top-right" });
    }
  };

  return (
    <div className="restaurantTable">
      <Link to="/add" className="addButton">Add Restaurant</Link>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Restaurant Name</th>
            <th>Type</th>
            <th>Rating</th>
            <th>Location</th>
            <th>Top Items</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant, index) => (
            <tr key={restaurant._id}>
              <td>{index + 1}</td>
              <td>{restaurant.name}</td>
              <td>{restaurant.type}</td>
              <td>{restaurant.rating}</td>
              <td>{restaurant.location}</td>
              <td>{restaurant.top_food}</td>
              <td className="actionButtons">
                <button
                  onClick={() => deleteRestaurant(restaurant._id)}
                  className="deleteButton"
                >
                  Delete
                </button>
                <Link to={`/edit/${restaurant._id}`} className="editButton">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Restaurant;
