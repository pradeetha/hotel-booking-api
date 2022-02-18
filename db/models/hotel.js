'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hotel.hasMany(models.Booking)
      Hotel.hasMany(models.HotelRating)
      Hotel.hasMany(models.Review)
    }
  }
  Hotel.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    stars: DataTypes.ENUM('1', '2', '3', '4', '5', '6', '7'),
    hotelStyle: DataTypes.ENUM('OceanView', 'RiverView', 'CityView', 'LagoonView'),
    websiteURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};