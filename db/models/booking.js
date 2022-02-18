'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.Hotel)
      Booking.belongsTo(models.User)

      Booking.hasOne(models.HotelRating)
      Booking.hasMany(models.HotelRooms)
    }
  }
  Booking.init({
    hotelId: DataTypes.UUID,
    userId: DataTypes.UUID,
    checkIn: DataTypes.DATE,
    checkOut: DataTypes.DATE,
    numOfGuests: DataTypes.INTEGER,
    numOfRooms:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};