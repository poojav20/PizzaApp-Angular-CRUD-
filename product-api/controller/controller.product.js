const Product = require("../db/models").product;

//Retrieve all Products from the database
exports.findAll = (req, resp) => {
    Product.findAll()
        .then(data => resp.send(data))
        .catch(err => resp.status(500).send({
            message: "No records found!"
        }));
}

//Find a single Product with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Product.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Pizza item with id=" + id
            });
        });
};
//Create and save a new Product
exports.create = (req, res) => {
    const new_product = {
        name: req.body.name,
        discription: req.body.discription,
        price: req.body.price,

    };
    Product.create(new_product)
        .then((data) => res.send(data))
        .catch((err) => status(500).send({ message: "Error creating a Pizza item" }));
};
//Update a product by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Product.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pizza item was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Pizza item with id=${id}. Maybe Pizza item was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Pizza item with id=" + id
            });
        });
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Product.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pizza item was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete pizza item with id=${id}. Maybe Pizza item was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Pizza item with id=" + id
            });
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Product.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} Products were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all tutorials."
            });
        });
};