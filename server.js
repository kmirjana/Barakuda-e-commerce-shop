import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import { nanoid } from 'nanoid';
import productRouter from './routes/productRoute.js';

let app = express();
app.use(express.json());
2
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

let products=[
    {id:nanoid(),name:"salmon",weight:"2400g"},
    {id:nanoid(),name:"squids",weight:"5500g"},
    {id:nanoid(),name:"oysters ",weight:"2200g"},
]

app.get('/', function(req, res){
    res.send('Hello World');
})
app.post('/',(req, res)=>{
    res.json({message:'data recieved',result:req.body});
});
app.use("/api/v1/products",productRouter);
// ROUTES MOVED TO PORDUCT CONTROLER

/* app.get('/api/v1/products',(req,res)=>{
    res.status(200).json({products});
});
app.post('/api/v1/products',(req,res)=>{
   const {id, name, weight} = req.body;
   if(!name || !weight){
    return res.status(400).json({message:"Name and weight are required"});

   }
   const productId=nanoid(4);
   const product ={id, name, weight}
   products.push(product);
   res.status(201).json({product});
})
app.get('/api/v1/products/:id',(req,res)=>{
    const {id}=req.params;
    const product= products.find(product => product.id === id);
    if(!product){
        return res.status(404).json({ message: `Product with this ${id} not found` });
    }
    res.status(200).json(product);
}) */
app.use("*", (req, res) => {
    res.status(404).json({message:"Page not found"});
});
app.use((err,res) => {
    res.status(500).json({message:"Internal server error",error:err.message});
})

    const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
})