import express from "express";
import { createProduct } from "../controllers/productsController.js";

const productRouter = express.Router();

productRouter.post("/create-product", createProduct);

export default productRouter;
