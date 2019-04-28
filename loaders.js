const dataloader = require("dataloader");
const { Op } = require("sequelize");

const { Character } = require("./models");

module.exports = () => {
  const getCharacterByIdLoader = new dataloader(async characterIds =>
    Character.findAll({ where: { id: characterIds } })
  );
  return {
    getCharacterByIdLoader
  };
};
