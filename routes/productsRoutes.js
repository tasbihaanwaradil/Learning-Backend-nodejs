import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProducts,
  getProductDetailById,
  updateProductDetails,
} from "../controllers/productsController.js";
import { isAdmin, isAuthenticatedUser } from "../utils/userAuth.js";

const productRouter = express.Router();

productRouter.post(
  "/create-product",
  isAuthenticatedUser,
  isAdmin("admin"),
  createProduct,
);
productRouter.get("/get-all-products", getAllProducts);
productRouter.get("/get-product-details/:id", getProductDetailById);

productRouter.patch(
  "/update-product-details/:id",
  isAuthenticatedUser,
  isAdmin("admin"),
  updateProductDetails,
);
productRouter.delete(
  "/delete-product/:id",
  isAuthenticatedUser,
  isAdmin("admin"),
  deleteProductById,
);

export default productRouter;
