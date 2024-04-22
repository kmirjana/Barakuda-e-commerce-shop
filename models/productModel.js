import mongoose from "mongoose";

const ProductSchema=new mongoose.Schema({
    name: String,
    weight: String,
    price: Number,
    description: String,
    image: String,
    category: String,
    productStatus:{
        type:String,
        availability:Boolean,
    },
    experationDate:{
        enum:['fresh','frozen','canned','dried','pickled','fermented','smoked','cured','aged','preserved','spiced','seasoned','marinated','brined','glazed','coated','breaded','battered','stuffed','filled','rolled','wrapped','layered','infused','flavored','enhanced','fortified','enriched','sweetened','salted'],
        default:'fresh'
    },
    costumerLocation:{
        type:String,
        default:"Ljubljana"
    },
    timestamps: true
});

export default mongoose.model('Product',ProductSchema);