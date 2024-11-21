'use strict';

const { Color } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Color.bulkCreate([
      {
        name: 'chartreuse',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'periwinkle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mauve',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { validate: true })
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
    await queryInterface.bulkDelete('Colors', {
      name: ['chartreuse', 'periwinkle', 'mauve']
    })

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
