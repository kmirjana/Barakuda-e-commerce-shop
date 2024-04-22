import { nanoid } from "nanoid"
import ProductModel from "../models/productModel.js"


export const getAllProducts=async(req,res)=>{
    const products= await ProductModel.find({name:"salmon"})
    res.status(200).json({products});
}
export const createProduct=async(req,res)=>{
    try {
           const product= await ProductModel.create(req.body)
  res.status(201).json({product});
    } catch (error) {
        res.status(500).json({msg:"server error",error});
    }

    }

export const getProduct=async(req,res)=>{
    const{id}=req.params
   const product= await ProductModel.findById(id)
    if(!product){
        return res.status(404).json({ message: `Product with this ${id} not found` });
    }
    res.status(200).json({product});
}
export const deleteProduct=async(req,res)=>{
    const {id}=req.params;
    const removedProduct=await ProductModel.findByIdAndDelete(id)
    if(!id){
       return res.status(400).json({message:"Id is required"});
    }
    res.status(200).json({message:"Product deleted"});
};
export const updatedProduct=async(req,res)=>{
    const{name, weight}=req.body;
    if(!name || !weight){
       return res.status(400).json({message:"Name and weight are required"});
    }
    const {id}=req.params;
    if(!id){
       return res.status(404).json({message:"Id is required"});
    }
    const updatedProduct=await ProductModel.findOneAndUpdate(id,req.body,{new:true});
    if(updatedProduct){

    }
    product.name=name;
    product.weight=weight;
    res.status(200).json({message:"Product updated",product:product});

}