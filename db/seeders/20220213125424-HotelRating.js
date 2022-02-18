// 'use strict';
const { v4: uuidv4 } = require('uuid')
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */

     const hotels = await queryInterface.sequelize.query(
      `SELECT id from hotel_database_development.Hotels;`
    );
    const users = await queryInterface.sequelize.query(
      `SELECT id from hotel_database_development.Users;`
    );
    const bookings = await queryInterface.sequelize.query(
      `SELECT id from hotel_database_development.Bookings;`
    );
    const hotelRows = hotels[0];
    const userRows = users[0];
    const bookingRows = bookings[0];


      await queryInterface.bulkInsert('HotelRatings', [
        {
          id: uuidv4(),
          userId: userRows[0].id,
          bookingId:bookingRows[0].id,
          hotelId: hotelRows[0].id,
          rating: '4',
          location: '5',
          cleanliness: '3',
          service: '4',
          value: '4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: userRows[1].id,
          bookingId: bookingRows[1].id,
          hotelId: hotelRows[0].id,
          rating: '4',
          location: '5',
          cleanliness: '5',
          service: '5',
          value: '4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: userRows[2].id,
          bookingId: bookingRows[2].id,
          hotelId: hotelRows[1].id,
          rating: '5',
          location: '5',
          cleanliness: '5',
          service: '5',
          value: '2',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
     await queryInterface.bulkDelete('HotelRatings', null, {});
     
  }
};
