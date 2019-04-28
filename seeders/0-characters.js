const moment = require("moment");

const characters = [
  {
    id: "b7909f8d-09bb-462a-8243-bddf20d9304f",
    name: "Anduin Wrynn"
  },
  {
    id: "88f8e6d8-ea38-4036-a183-e8f8180a8eb8",
    name: "Tyrande Whisperwind"
  },
  {
    id: "f0395879-1e7f-49c3-9107-92947c7e134c",
    name: "Sylvanas Windrunner"
  },
  {
    id: "c2b51274-e141-45e4-9be4-c2ec839a6c43",
    name: "Lor'themar Theron"
  }
];

module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      "characters",
      characters.map(character => ({
        ...character,
        createdAt: moment().toDate(),
        updatedAt: moment().toDate()
      }))
    ),
  down: queryInterface => queryInterface.bulkDelete("characters", {})
};
