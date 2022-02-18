'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HotelRooms', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      bookingId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Bookings',
          key: 'id',
          as: 'bookingId',
        }
      },
      roomCategory: {
        type: Sequelize.STRING
      },
      roomNumber: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HotelRooms');
  }
};