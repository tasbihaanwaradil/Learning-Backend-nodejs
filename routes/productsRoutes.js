import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductDetailById,
  updateProductDetails,
} from "../controllers/productsController.js";

const productRouter = express.Router();

productRouter.post("/create-product", createProduct);
productRouter.get("/get-all-products", getAllProducts);
productRouter.get("/get-product-details/:id", getProductDetailById);
productRouter.patch("/update-product-details/:id", updateProductDetails);

export default productRouter;
