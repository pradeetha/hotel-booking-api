'use strict';
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
    const ratings = await queryInterface.query(
      `SELECT id from hotel_database_development.HotelRatings;`
    )
    const hotelRows = hotels[0];
    const userRows = users[0];
    const hotelRatingRows = HotelRatings[0];


      await queryInterface.bulkInsert('Reviews', [
        {
          id: uuidv4(),
          userId: userRows[0].id,
          hotelId: hotelRows[0].id,
          hotelRatingId: hotelRatingRows[0].id,
          description: 'Great clean rooms, amazing view from room balcony. ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: userRows[1].id,
          hotelId: hotelRows[0].id,
          hotelRatingId: hotelRatingRows[1].id,
          description: 'Supportive and friendly staff. Rooms are very clean. ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: userRows[2].id,
          hotelId: hotelRows[1].id,
          hotelRatingId: hotelRatingRows[2].id,
          description: 'Great service, amazing view.We ate at restaurant for breakfast menu was great. ',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
      await queryInterface.bulkDelete('Reviews', null, {});
     
  }
};
