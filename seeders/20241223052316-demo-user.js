"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Pandu Rizky",
        email: "pandurizky17@gmail.com",
        password: "123456",
        // createdAt: newDate(),
        // updateAt: newDate(),
      },
      {
        name: "Snoop Dog",
        email: "snoopdog@gmail.com",
        password: "123456",
        // createdAt: newDate(),
        // updateAt: newDate(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
