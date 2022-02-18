'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid')

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('Users', [
      {
      id: uuidv4(),
      firstName: 'John',
      lastName: 'Doe',
      dob: new Date(),
      gender: 'M',
      phone: '0714914986',
      email:'john@doe.com',
      password: await bcrypt.hash('123456789', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { 
      id: uuidv4(),
      firstName: 'Tom',
      lastName: 'Shelby',
      dob: new Date(),
      gender: 'M',
      phone: '0714954909',
      email:'tom@shelby.com',
      password: await bcrypt.hash('123456789', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      firstName: 'John',
      lastName: 'Stone',
      dob: new Date(),
      gender: 'M',
      phone: '0715654961',
      email:'john@stone.com',
      password:await bcrypt.hash('928436789', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    
   }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
      await queryInterface.bulkDelete('User', null, {});
     
  }
};
