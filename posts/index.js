const express = require('express');
const { uniqueNamesGenerator, starWars } = require('unique-names-generator');
const app = express();
require('dotenv').config()

// Get maximum character from ENVs else return 5 character
const MAX_STAR_WARS_CHARACTERS = process.env.MAX_STAR_WARS_CHARACTERS || 5;
const CRON_JOB = process.env.MAX_STAR_WARS_CRON_JOB;

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
  if (CRON_JOB){
    console.log('CRON_JOB_PARAMS :', CRON_JOB)
  }
app.get('/', (req, res) => {
 res.json(getStarWarsCharacters());
});
const port = 3000
app.listen(port, () => {
 console.log('Server started on port ',port);
});