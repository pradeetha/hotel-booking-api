'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User)
      Review.belongsTo(models.Hotel)

      Review.belongsTo(models.HotelRating)

    }
  }
  Review.init({
    userId: DataTypes.UUID,
    hotelId: DataTypes.UUID,
    hotelRatingId: DataTypes.UUID,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};