'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('Products', [{

                name: "Pizza DiVerdure",
                price: 250,
                discription: "Mushroom,Onion,Sp.Tomato,Capsicum,Corn",
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: "Italian Sesame",
                price: 255,
                discription: "Spinach,B'qued Paneer,Sp.Onion & Sesame Seeds",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Hawaian Treat",
                price: 240,
                discription: "Mushroom,Corn,Pineapple",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Steak Pizza",
                price: 300,
                discription: "Steak Sautteed in Raddish Sauce with Capsicum & Onion",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Maxican Pasta Pizza",
                price: 270,
                discription: "Chicken,Corn,Pasta in Red Sauce",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};