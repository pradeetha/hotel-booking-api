'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HotelRating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HotelRating.belongsTo(models.User)
      HotelRating.belongsTo(models.Hotel)
      HotelRating.belongsTo(models.Booking)

      HotelRating.hasOne(models.Review)
    }
  }
  HotelRating.init({
    userId: DataTypes.UUID,
    bookingId: DataTypes.UUID,
    hotelId: DataTypes.UUID,
    rating: DataTypes.ENUM('1', '2', '3', '4', '5'),
    location: DataTypes.ENUM('1', '2', '3', '4', '5'),
    cleanliness: DataTypes.ENUM('1', '2', '3', '4', '5'),
    service: DataTypes.ENUM('1', '2', '3', '4', '5'),
    value: DataTypes.ENUM('1', '2', '3', '4', '5')
  }, {
    sequelize,
    modelName: 'HotelRating',
  });
  return HotelRating;
};