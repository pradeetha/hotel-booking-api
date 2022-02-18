'use strict';
const { v4: uuidv4 } = require('uuid')
module.exports = {
  async up (queryInterface, Sequelize) {
    /*
     * Add seed commands here.
     *
     * Example:
     */ 
      await queryInterface.bulkInsert('Hotels', [
        {
          id: uuidv4(),
          name:'Redwood Lakeside Hotel',
          description:'Welcome to Redwood Lakeside Hotel.',
          location:'Srilanka',
          stars:'5',
          hotelStyle:'LagoonView',
          websiteURL:'https://redwoodLakesideHotel.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: 'Marino Hotel',
          description:'Welcome to Marino Hotel.',
          location:'Srilanka',
          stars:'5',
          hotelStyle:'OceanView',
          websiteURL:'https://MarinoHotel.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name:'Jetwing Hotel',
          description:'Welcome to Jetwing Hotel.',
          location:'Srilanka',
          stars:'5',
          hotelStyle:'CityView',
          websiteURL:'https://JetwingHotel.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
      await queryInterface.bulkDelete('Hotels', null, {});
     
  }
};
