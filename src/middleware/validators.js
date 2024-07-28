import { body, param, validationResult } from "express-validator";

// Product validation
export const validateProduct = [
  body("name")
    .notEmpty()
    .withMessage("Product name is required")
    .isLength({ max: 255 })
    .withMessage("Product name must be less than 255 characters"),
  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isDecimal()
    .withMessage("Price must be a decimal value"),
  body("stock")
    .notEmpty()
    .withMessage("Stock is required")
    .isInt()
    .withMessage("Stock must be an integer"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// ID validation
export const validateID = [
  param("id")
    .notEmpty()
    .withMessage("ID is required")
    .isInt()
    .withMessage("ID must be an integer"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Category validation
export const validateCategory = [
  body("name")
    .notEmpty()
    .withMessage("Category name is required")
    .isLength({ max: 255 })
    .withMessage("Category name must be less than 255 characters"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
