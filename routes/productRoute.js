import {Router} from 'express';
const router=Router();
import{getAllProducts,getProduct,deleteProduct,updatedProduct, createProduct}from "../controllers/productController.js";

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getProduct).delete(deleteProduct).patch(updatedProduct);


export default router;
