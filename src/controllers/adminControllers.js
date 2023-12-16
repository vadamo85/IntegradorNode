//requerimientos para multer y expressvalidator
const path = require("path");
const sharp = require("sharp");

const { validationResult } = require("express-validator");

const model = require("../models/Product");
const { send } = require("process");

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

    // Guardamos la información en la BBDD
    try {
      const producto = await model.create(req.body);
      if (producto && req.file) {
        // optimizo el nombre de la imagen:
        const name = req.file.originalname;
        sharp(req.file.buffer)
          .resize(300)
          .toFile(path.resolve(__dirname, "../../public/uploads/", name)); // toFile requiere una ruta absoluta
      }

      res.redirect("/admin");
    } catch (error) {
      console.log("ERROR: " + error);
      res.status(500).send(error);
    }
  },

  adminEdit: async (req, res) => {
    try {
      const producto = await model.findByPk(req.params.id);
      console.log("PRODUCTOOOOOOO" + producto);

      // Verificar que exista el objeto
      if (producto) {
        console.log(producto.category + "----" + producto.licence);
        res.render("admin/edit-item", {
          values: producto,
          layout: "layouts/adminLayout",
        });
      } else {
        // Ideal hacer una vista que diga el producto no existe
        res.status(404).send("El producto no existe");
      }
    } catch (error) {
      console.log(error);
      res.status(500), send(error);
    }
  },

  adminEditOK: (req, res) =>
    res.send("Route to confirm changes in an item View"),
  adminDelete: (req, res) => res.send("Route to delete an item"),
};

module.exports = adminControllers;
