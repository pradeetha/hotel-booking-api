'use strict';
const {
  v4: uuidv4
} = require('uuid')

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */

    const hotelBooking = await queryInterface.sequelize.query(
      `SELECT id from hotel_database_development.Bookings;`
    );
    const bookingRows = hotelBooking[0];

    await queryInterface.bulkInsert('HotelRooms', [{
        id: uuidv4(),
        bookingId: bookingRows[0].id,
        roomCategory: 'Suite',
        roomNumber: 'D204',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        bookingId: bookingRows[1].id,
        roomCategory: 'Suite',
        roomNumber: 'D217',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        bookingId: bookingRows[2].id,
        roomCategory: 'Suite',
        roomNumber: 'E414',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        bookingId: bookingRows[2].id,
        roomCategory: 'Suite',
        roomNumber: 'D492',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        bookingId: bookingRows[3].id,
        roomCategory: 'Suite',
        roomNumber: 'E182',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        bookingId: bookingRows[3].id,
        roomCategory: 'Suite',
        roomNumber: 'D979',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        bookingId: bookingRows[4].id,
        roomCategory: 'Suite',
        roomNumber: 'D474',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        bookingId: bookingRows[4].id,
        roomCategory: 'Suite',
        roomNumber: 'D254',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
      await queryInterface.bulkDelete('HotelRooms', null, {});
  }
};