import express from 'express';
import {createRestaurant,getAllRestaurant,updateRestaurant,deleteRestaurant,getOne} from '../controller/restaurantcontroller.js';
const route=express.Router();
route.post("/create",createRestaurant);
route.get("/getall",getAllRestaurant);
route.put("/update/:id",updateRestaurant);
route.get('/getone/:id',getOne);
route.delete("/delete/:id",deleteRestaurant);
export default route;