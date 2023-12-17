const fs = require("fs");
//requerimientos para multer y expressvalidator
const path = require("path");
const sharp = require("sharp");

const { validationResult } = require("express-validator");

const model = require("../models/Product");
const { send } = require("process");
const { error } = require("console");

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
        console.log(req.file);

        const carpeta = producto.licence + "/";
        console.log("*** Personalización de la imagen con... " + carpeta);
        sharp(req.file.buffer)
          .resize(300)
          .toFile(
            path.resolve(
              __dirname,
              `../../public/uploads/${producto.licence}/${producto.id}.jpg`
            )
          ); // toFile requiere una ruta absoluta
      }
      // TODO: Obtener la ruta de la imagen y guardarla en el array de strings con rutas de imagenes para recuperarlas en el edit

      res.redirect("/admin");
    } catch (error) {
      console.log("ERROR: " + error);
      res.status(500).send(error);
    }
  },

  adminEdit: async (req, res) => {
    try {
      const producto = await model.findByPk(req.params.id);

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

  // Corresponde al update
  adminEditOK: async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("admin/edit/:id", {
        values: req.body,
        errors: errors.array(),
      });
    }

    try {
      const affected = await model.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      // tengo que chequear que se haya modificado un solo registro de la bbdd
      if (affected[0] == 1) {
        if (req.file) {
          sharp(req.file.buffer)
            .resize(300)
            .toFile(
              path.resolve(
                __dirname,
                `../../public/uploads/${req.body.licence}/${req.params.id}.jpg`
              )
            );
        }

        res.redirect("/admin");
      } else {
        // error mas a nivel de pasar mal los datos
        res.status(500).send("ERROR al Actualizar el producto");
      }
    } catch (error) {
      console.log("ERROR: ", error);
      res.status(500).send(error);
    }
  },

  adminDelete: async (req, res) => {
    console.log(
      req.params.id + "PARAMETROS DEL DELETEEEEEEEEEEEEEEEEE",
      req.body.licence
    );
    try {
      const producto = await model.findByPk(req.params.id);

      const result = await model.destroy({
        where: {
          id: req.params.id,
        },
      });
      console.log("RESULTADO: ", result, producto.licence, producto.id);

      if (result == 1) {
        fs.unlink(
          path.resolve(
            __dirname,
            `../../public/uploads/${producto.licence}/${req.params.id}.jpg`
          ),
          (error) => {
            if (error) {
              console.log("Error del callback: ", error);
            }
          }
        );
      }

      res.redirect("/admin");
    } catch (error) {
      console.log("MIERROR: ", error);
      res.status(500).send(error);
    }
  },
};

module.exports = adminControllers;
