'use strict';

// Import the model(s)
const { Color } = require('../models');
// const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Color.bulkCreate([
      {
        name: 'red'
      },
      {
        name: 'blue'
      },
      {
        name: 'yellow'
      },
    ], { validate: true });

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    // Delete from Colors using queryInterface.bulkDelete:
    await queryInterface.bulkDelete('Colors', {
      name: ['red', 'blue', 'yellow']
    })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
