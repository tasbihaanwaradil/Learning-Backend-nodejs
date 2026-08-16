import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productsController.js";

const productRouter = express.Router();

productRouter.post("/create-product", createProduct);
productRouter.get("/get-all-products", getAllProducts);

export default productRouter;
