module.exports = app => {
    var router = require("express").Router();
    const ProductController = require('./controller/controller.product');

    // Create a new Pizza
    router.post("/", ProductController.create);

    // Retrieve all Pizza items
    router.get("/", ProductController.findAll);

    // Retrieve a single Pizza with id
    router.get("/:id", ProductController.findOne);

    // Update a Pizza with id
    router.put("/:id", ProductController.update);

    // Delete a Pizza with id
    router.delete("/:id", ProductController.delete);

    // Delete all Pizza items
    router.delete("/", ProductController.deleteAll);

    app.use('/app/products', router);
};