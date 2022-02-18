'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
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
      hotelId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Hotels',
          key: 'id',
          as: 'hotelId',
        }
      },
      hotelRatingId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'HotelRatings',
          key: 'id',
          as: 'hotelRatingId',
        }
      },
      description: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Reviews');
  }
};