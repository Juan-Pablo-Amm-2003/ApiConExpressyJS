import Product from "../model/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    if (products.length > 0) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ error: "No products found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error retrieving products" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error retrieving the product" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category_id } = req.body;

    // Verifica si el producto ya existe
    const existingProduct = await Product.findOne({ where: { name } });
    if (existingProduct) {
      return res
        .status(400)
        .json({ message: "Product with this name already exists" });
    }

    // Crea el nuevo producto
    const product = await Product.create({
      name,
      description,
      price,
      stock,
      category_id,
    });
    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedProduct = await Product.findByPk(req.params.id);
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating the product" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting the product" });
  }
};
