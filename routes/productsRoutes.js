import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProducts,
  getProductDetailById,
  updateProductDetails,
} from "../controllers/productsController.js";
import { isAuthenticatedUser } from "../utils/userAuth.js";

const productRouter = express.Router();

productRouter.post("/create-product", isAuthenticatedUser, createProduct);
productRouter.get("/get-all-products", getAllProducts);
productRouter.get("/get-product-details/:id", getProductDetailById);
productRouter.patch(
  "/update-product-details/:id",
  isAuthenticatedUser,
  updateProductDetails,
);
productRouter.delete(
  "/delete-product/:id",
  isAuthenticatedUser,
  deleteProductById,
);

export default productRouter;
