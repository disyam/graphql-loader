const moment = require("moment");
const uuid = require("uuid/v4");

const quotes = [
  {
    characterId: "b7909f8d-09bb-462a-8243-bddf20d9304f",
    text:
      "The druid was injured in my service and I will protect him with my life! To reach him, monsters, you'll have to go through me!"
  },
  {
    characterId: "b7909f8d-09bb-462a-8243-bddf20d9304f",
    text:
      "Meeting Thrall would be great, dad. From what I've heard... He's extraordinary. And isn't establishing peace something a king should do? If he can?"
  },
  {
    characterId: "b7909f8d-09bb-462a-8243-bddf20d9304f",
    text:
      "Why waste your warriors and resources in battle when a few words will bring you greater profit?"
  },
  {
    characterId: "b7909f8d-09bb-462a-8243-bddf20d9304f",
    text:
      "You're anxious to return to Stormwind? But there's so much to discuss here that may ensure our kingdom's future peace and prosperity"
  },
  {
    characterId: "88f8e6d8-ea38-4036-a183-e8f8180a8eb8",
    text: "Archimonde... After ten thousand years, how is it possible?"
  },
  {
    characterId: "88f8e6d8-ea38-4036-a183-e8f8180a8eb8",
    text:
      "Let us make haste, my sisters! All our hopes rest on Furion's awakening!"
  },
  {
    characterId: "88f8e6d8-ea38-4036-a183-e8f8180a8eb8",
    text:
      "They are mongrels and nothing more! They are responsible for Cenarius' death! I will be damned before I stand with them"
  },
  {
    characterId: "88f8e6d8-ea38-4036-a183-e8f8180a8eb8",
    text:
      "Long ago, I swore to protect this land, Furion. I never had the luxury of sleeping through times of great peril"
  },
  {
    characterId: "f0395879-1e7f-49c3-9107-92947c7e134c",
    text:
      "Our land is impregnable. He will not enter. Do not fear. Have faith... in the Sunwell's strength, and the strength and will of our people"
  },
  {
    characterId: "f0395879-1e7f-49c3-9107-92947c7e134c",
    text:
      "I am Sylvanas Windrunner, Ranger-General of Silvermoon. I advise you to turn back now"
  },
  {
    characterId: "f0395879-1e7f-49c3-9107-92947c7e134c",
    text:
      "Do your worst. The elfgate to the inner kingdom is protected by our most powerful enchantments. You will not pass"
  },
  {
    characterId: "f0395879-1e7f-49c3-9107-92947c7e134c",
    text: "Shindu fallah nah! Fall back to the second gate! Fall back!"
  },
  {
    characterId: "c2b51274-e141-45e4-9be4-c2ec839a6c43",
    text:
      "I dream of a Quel'Thalas renewed, but by our weapons alone, that will not come to pass"
  },
  {
    characterId: "c2b51274-e141-45e4-9be4-c2ec839a6c43",
    text:
      "I see his mocking face in my dreams, Halduron! I see his misdeeds play over and over!"
  },
  {
    characterId: "c2b51274-e141-45e4-9be4-c2ec839a6c43",
    text:
      "Come, let us welcome our wayward brother home by planting his grinning head on an end of a spear"
  },
  {
    characterId: "c2b51274-e141-45e4-9be4-c2ec839a6c43",
    text: "Tell us where the banshee hides now! Tell us where Sylvanas is!"
  }
];

module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      "quotes",
      quotes.map(quote => ({
        ...quote,
        id: uuid(),
        createdAt: moment().toDate(),
        updatedAt: moment().toDate()
      }))
    ),
  down: queryInterface => queryInterface.bulkDelete("quotes", {})
};
