import Product from "../models/productsModel.js";

export const createProduct = async (req, res) => {
  try {
    const { title, price, decscription, stocks, category, image } = req.body;
    console.log(title, price, decscription, stocks, category, image);
  } catch (error) {
    console.log(error);
  }
};
