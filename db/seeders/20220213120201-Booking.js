// 'use strict';
const { v4: uuidv4 } = require('uuid')
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     */
     const hotels = await queryInterface.sequelize.query(
      `SELECT id from hotel_database_development.Hotels;`
    );
    const users = await queryInterface.sequelize.query(
      `SELECT id from hotel_database_development.Users;`
    );
    const hotelRows = hotels[0];
    const userRows = users[0];

      await queryInterface.bulkInsert('Bookings', [
        { 
          id: uuidv4(),
          hotelId: hotelRows[0].id,
          userId: userRows[0].id,
          checkIn: new Date(2022, 02, 3, 10, 33, 30, 0),
          checkOut: new Date(),
          numOfGuests: 2,
          numOfRooms: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { 
          id: uuidv4(),
          hotelId: hotelRows[0].id,
          userId: userRows[1].id,
          checkIn: new Date(2022, 02, 3, 10, 33, 30, 0),
          checkOut: new Date(),
          numOfGuests: 2,
          numOfRooms: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          hotelId: hotelRows[1].id,
          userId: userRows[2].id,
          checkIn: new Date(2022, 02, 3, 10, 33, 30, 0),
          checkOut: new Date(),
          numOfGuests: 4,
          numOfRooms: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          hotelId: hotelRows[1].id,
          userId: userRows[2].id,
          checkIn: new Date(2022, 02, 3, 10, 33, 30, 0),
          checkOut: new Date(),
          numOfGuests: 4,
          numOfRooms: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          hotelId: hotelRows[1].id,
          userId: userRows[1].id,
          checkIn: new Date(2022, 02, 3, 10, 33, 30, 0),
          checkOut: new Date(),
          numOfGuests: 4,
          numOfRooms: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     */
      await queryInterface.bulkDelete('Bookings', null, {});
     
  }
};
