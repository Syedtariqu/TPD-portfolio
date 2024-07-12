const Product = require("../modles/products");

exports.addProduct = async (req, res) => {
  const { name, category, price, rating, shortDescription } =
    req.body;
    if (req.file) {
        // Ensure the path uses forward slashes
        const imagePath = req.file.path.replace(/\\/g, '/');
       
      }
    const image = req.file ? req.file.path : null;
    if (!name || !category || !price || !rating || !shortDescription || !image) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
      }
   
  try {

     // Check if a product with the same name already exists
     const ExistName = await Product.findOne({ name });
     if (ExistName) {
       return res.status(409).json({ success: false, message: "Product with this name already exists" });
     }
    const newProduct = new Product({
      name,
      category,
      price,
      rating,
      shortDescription,
      image
    });
    await newProduct.save();
    // console.log("Hello i am product controller under try block")
    res.status(201).json({success: true, message: "Product added successfully" });
  } catch (error) {
    res.status(400).json({success: false, message: "Error adding product", error });
  }
};

exports.getProduct = async (req, res) => {
  
try {
   const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ success: false,error : error.message });
  }
};
