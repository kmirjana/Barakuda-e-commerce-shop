import { nanoid } from "nanoid"


let products=[
    {id:nanoid(),name:"salmon",weight:"2400g"},
    {id:nanoid(),name:"squids",weight:"5500g"},
    {id:nanoid(),name:"oysters ",weight:"2200g"},
]

export const getAllProducts=async(req,res)=>{
    res.status(200).json({products});
}
export const createProduct=async(req,res)=>{
    const {name,weight}=req.body;
    if(!name || !weight){
       return res.status(400).json({message:"Name and weight are required"});
    }
    const productId=nanoid(4);
    const product={id: productId, name, weight};
    products.push(product);
    res.status(200).json({product});
}
export const getProduct=async(req,res)=>{
    const{id}=req.params
    const product=products.find(product=>product.id===id);
    if(!product){
        return res.status(404).json({ message: `Product with this ${id} not found` });
    }
    res.status(200).json(product);
}
export const deleteProduct=async(req,res)=>{
    const {id}=req.params;
    if(!id){
       return res.status(400).json({message:"Id is required"});

    }
    products=products.filter(product=>product.id!==id);
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
    const product=products.find(product=>product.id===id);
    product.name=name;
    product.weight=weight;
    res.status(200).json({message:"Product updated",product:product});

}