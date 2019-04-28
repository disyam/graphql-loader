module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define("Character", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  });
  return Character;
};
