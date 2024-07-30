
import Category from "../model/category.js";

// Obtener todas las categorías
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Error fetching categories" });
  }
};

// Obtener una categoría por ID
export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ error: "Categoría no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la categoría" });
  }
};

// Crear una nueva categoría
export const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const existingCategory = await Category.findOne({ where: { name } });
    if (existingCategory) {
      return res
        .status(400)
        .json({ error: "Ya existe una categoría con este nombre" });
    }

    const category = await Category.create({ name });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la categoría" });
  }
};

// Actualizar una categoría por ID
export const updateCategory = async (req, res) => {
  try {
    const [updated] = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedCategory = await Category.findByPk(req.params.id);
      res.status(200).json(updatedCategory);
    } else {
      res.status(404).json({ error: "Categoría no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la categoría" });
  }
};

// Eliminar una categoría por ID
export const deleteCategory = async (req, res) => {
  try {
    const deleted = await Category.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Categoría no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la categoría" });
  }
};
