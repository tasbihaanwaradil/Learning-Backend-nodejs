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
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

//get products from db

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();

    //checks
    if (!allProducts) {
      res.status(401).json({
        success: false,
        message: "Products not found",
      });
    }

    //products found
    return res.status(200).json({
      success: true,
      allProducts,
      message: "Products are successfully found",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
    });
  }
};

//get product by id
export const getProductDetailById = async (req, res) => {
  try {
    const getProductDetail = await Product.findById(req.params.id);

    if (!getProductDetail) {
      return res.status(401).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      getProductDetail,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Product Details not found",
    });
  }
};
