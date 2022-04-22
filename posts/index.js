const express = require('express');
const { uniqueNamesGenerator, starWars } = require('unique-names-generator');
const app = express();
require('dotenv').config()

// Get maximum character from ENVs else return 5 character
const MAX_STAR_WARS_CHARACTERS = process.env.MAX_STAR_WARS_CHARACTERS || 5;
const config = {
  dictionaries: [starWars]
}
// Get the character name array
const getStarWarsCharacters = () => {
 const characterNames = [];
for (let i = 1; i <= MAX_STAR_WARS_CHARACTERS; i += 1) {
  characterNames.push(uniqueNamesGenerator(config));
 }
 return characterNames;
};
app.get('/', (req, res) => {
  console.log( 'MAX_STAR_WARS_CHARACTERS',MAX_STAR_WARS_CHARACTERS);
  console.log( 'ENV',process.env.MAX_STAR_WARS_CHARACTERS );
 res.json(getStarWarsCharacters());
});
app.listen(3000, () => {
 console.log('Server started on port 3000');
});