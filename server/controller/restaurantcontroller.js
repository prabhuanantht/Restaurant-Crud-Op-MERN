import restaurant from "../model/restaurantModel.js"
export const createRestaurant = async(req,res) =>{
    try{
        const restaurantData = restaurant(req.body)
        if(!restaurantData){
            return res.status(404).json({message:"Restaurant data not found"});
        }
        await restaurantData.save();
        res.status(200).json({message:"Successfully created restaurant"});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

};


export const getAllRestaurant = async(req,res)=>{
   try{
    const restaurantData =await restaurant.find();
    if(!restaurantData){ 
        return res.status(404).json({message:"Restaurant data not found"})
    };
    
    res.status(200).json(restaurantData)
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}

export const updateRestaurant = async (req, res) => {
    try {
      const id =req.params.id;
      const restaurantData =await restaurant.findById(id);
      if (!restaurantData) {
        return res.status(404).json({ msg: "Restaurant data not found" });
      }
  
      const updatedData =await restaurant.findByIdAndUpdate(id,req.body,{new:true});
      res.status(200).json(updatedData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const deleteRestaurant = async (req, res) => {
    try {
      const id =req.params.id;
      const restaurantData =await restaurant.findById(id);
      if (!restaurantData) {
        return res.status(404).json({ msg: "Restaurant data not found" });
      }
  
      const deletedData =await restaurant.findByIdAndDelete(id);
      return res.status(200).json({msg: "Deleted Successfully!"});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  export const getOne = async(req,res)=>{
    try{
        const id=req.params.id;
        const restaurantData=await restaurant.findById(id)
    if(!restaurantData){
        return res.status(404).json({msg:"Restaurant data not found"});
        }
    res.status(200).json(restaurantData);
    }
    catch(error){
        res.status(500).json({error:error.message})
      }
};
