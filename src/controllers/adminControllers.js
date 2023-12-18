//requerimientos para multer y expressvalidator
const path = require("path");
const sharp = require("sharp");

const { validationResult } = require('express-validator');

const model = require("../models/Product");

const adminControllers = {
  admin: async (req, res) => {
    try {
      const productos = await model.findAll();
      //console.log(productos);
      res.render("admin/admin", { productos, layout: "layouts/adminLayout" });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  adminItem: (req, res) => {
    res.render("admin/create", { layout: "layouts/adminLayout" });
  },

  adminCreateItem: async (req, res) => {
    console.log(req.body, req.file);

    const errors = validationResult(req);
    // chequea si la request viene con errores
    if (!errors.isEmpty()) {
        return res.render("admin/create", {
            values: req.body,
            errors: errors.array(),
        });
    }

    try {
      const producto = await model.create(req.body);
      console.log(producto);

      // Subir la imagen solo si el producto esta creado.
      if(producto && req.file){
          sharp(req.file.buffer)
              .resize()
              .toFile(path.resolve(
                  __dirname,
                  `../../../public/uploads/productos/producto_${producto.id}.jpg`
                  )
              );
      }

      //redireccionar a la lista de productos
      res.redirect('/admin');

  } catch (error) {
      console.log(error);
      res.status(500).send(error);
  }

    // if (req.file) {
    //   // optimizo el nombre de la imagen:
    //   const name = req.file.originalname;
    //   sharp(req.file.buffer)
    //     .resize(300)
    //     .toFile(path.resolve(__dirname, "../../public/uploads/", name)); // toFile requiere una ruta absoluta
    // }

    res.send("Crear producto...");
  },
  adminEdit: (req, res) =>
    res.render("admin/edit-item", { layout: "layouts/adminLayout" }),
  adminEditOK: (req, res) =>
    res.send("Route to confirm changes in an item View"),
  adminDelete: (req, res) => res.send("Route to delete an item"),
};

module.exports = adminControllers;
