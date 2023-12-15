const express = require("express");
const router = express.Router();
const multer = require("multer");
// voy a usar la memoria para primero manipular la data del form
const upload = multer({ storage: multer.memoryStorage() });

// body es una función de express-validator xa crear las reglas
const { body } = require("express-validator");

const validations = [
  body("category")
    .not()
    .isEmpty()
    .withMessage("Debe seleccionar una Categoría"),
  body("licence")
    .not()
    .isEmpty()
    .withMessage("Debe seleccionar una Licencia"),
  body("nombre")
    .not()
    .isEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Debe tener al menos 3 caracteres"),
    body("skuItem")
    .not()
    .isEmpty()
    .withMessage("Debe agregar un identificador"),
    body("itemPrice")
    .not()
    .isEmpty()
    .withMessage("Debe agregar un Precio"),
    body("itemStock")
    .not()
    .isEmpty()
    .withMessage("Debe agregar existencias"),
    // Pendiente ver si se valida la carga de imagen y stock
    
    
];

const adminControllers = require("../controllers/adminControllers");

router.get("/admin", adminControllers.admin); // Lista todos los productos

router.get("/admin/create", adminControllers.adminItem); // Form de carga

router.post(
  "/admin/create",
  upload.single("imagen"),
  validations,
  adminControllers.adminCreateItem
);
router.get("/admin/edit/:id", adminControllers.adminEdit);
router.put("/admin/edit/:id", adminControllers.adminEditOK);
router.delete("/admin/delete/:id", adminControllers.adminDelete);

module.exports = router;
