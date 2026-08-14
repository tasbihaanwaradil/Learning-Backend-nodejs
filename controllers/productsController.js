import Product from "../models/productsModel.js";

export const createProduct = async (req, res) => {
  try {
    const { title, price, description, stocks, category, image } = req.body;

    //checks
    if (!title || !description || !category || !price || !image) {
      return res.status(401).json({
        success: false,
        message: "All input filed are required",
      });
    }

    //create proudct in database
    const product = Product.create({
      title,
      price,
      description,
      stocks,
      category,
      image,
    });

    //check
    if (!product) {
      return res.status(401).json({
        success: false,
        message: "Product not created",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product Created Successfully",
      product
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error,
    });
  }
};
