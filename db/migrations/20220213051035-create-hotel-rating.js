'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HotelRatings', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      userId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        }
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
      hotelId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Hotels',
          key: 'id',
          as: 'hotelId',
        }
      },
      rating: {
        type: Sequelize.ENUM('1', '2', '3', '4', '5')
      },
      location: {
        type: Sequelize.ENUM('1', '2', '3', '4', '5')
      },
      cleanliness: {
        type: Sequelize.ENUM('1', '2', '3', '4', '5')
      },
      service: {
        type: Sequelize.ENUM('1', '2', '3', '4', '5')
      },
      value: {
        type: Sequelize.ENUM('1', '2', '3', '4', '5')
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
    await queryInterface.dropTable('HotelRatings');
  }
};