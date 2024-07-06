const data = require('./data.json');

const male = data.filter(t => t.Gender === "M");
const female = data.filter(t => t.Gender === "F");
const teams = [];
const totalTeams = 8;
const maleStrength = 6;
const femaleStrength = 2;
const teamSize = maleStrength + femaleStrength;

// team selection
for (let t = 0; t < totalTeams; t++) {
    const team = [];

    // get 7 males
    for (let m = 0; m < maleStrength && team.length < teamSize; m++) {
        const ind = Math.floor(Math.random() * male.length);
        console.log("m > ind", ind);
        if (ind) {
            team.push(male[ind]);
            male.splice(ind, 1);
        }
    }

    // get 2 females
    for (let f = 0; f < femaleStrength; f++) {
        const ind = Math.floor(Math.random() * female.length);
        console.log("f > ind", ind);
        if (ind) {
            team.push(female[ind]);
            female.splice(ind, 1);
        }
    }

    console.log(`team: ${teams.length + 1}, strength: ${team.length}`);
    console.table(team);
    teams.push(team);
}

function getRandomPlayer(players = []) {
    const ind = Math.floor(Math.random() * players.length);
    if (ind) {
        team.push(female[ind]);
        female.splice(ind, 1);
    }
}