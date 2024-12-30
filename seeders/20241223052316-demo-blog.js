"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Blogs", [
      {
        title: "Buah buahan sehat",
        content: "Buah buahan yang kaya akan serat",
        image: "blue.jpg",
        // createdAt: newDate(),
        // updateAt: newDate(),
      },
      {
        title: "Sayur sayuran hijau",
        content: "Sayuran yang kaya akan vitamin dan mineral",
        image: "green.jpg",
        // createdAt: newDate(),
        // updateAt: newDate(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Blogs", null, {});
  },
};