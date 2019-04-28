module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define("Quote", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    characterId: {
      allowNull: false,
      type: DataTypes.UUID
    },
    text: {
      allowNull: false,
      type: DataTypes.STRING
    }
  });
  return Quote;
};
