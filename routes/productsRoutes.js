import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductDetailById,
} from "../controllers/productsController.js";

const productRouter = express.Router();

productRouter.post("/create-product", createProduct);
productRouter.get("/get-all-products", getAllProducts);
productRouter.get("/get-product-details/:id", getProductDetailById);

export default productRouter;
