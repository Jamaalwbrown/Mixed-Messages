const combinedKnowledge = {
    games: ['Ghost of Tsushima', 'Persona 5 Royal', 'Trails of Cold Steel', 'DBZ Kakarot', 'Miles Morales'],
    motivation: ['surpass your limits', 'never give up', 'go even further beyond', "fight with everything you've got", 'dig deep and find the courage'],
    dayInfo: ['not so good', 'going great!', 'difficult but getting through it', 'absolutely horrible', 'maximum laziness']
}

const generateRandomNumber = (num) => {
    //Generates a random number between 0 and num - 1
    return Math.floor((Math.random() * num));
}

function createMsg(randFunction) {
    //createMsg will use a random generator function to create a message using beginning strings and combinedKnowledge object values
    switch (randFunction(4)) {
        case 1:
            return `You should play ${combinedKnowledge['games'][randFunction(4)]}`;
        case 2:
            return `Your mindset should be to ${combinedKnowledge['motivation'][randFunction(4)]}`;
        case 3:
            return `Your day is currently ${combinedKnowledge['dayInfo'][randFunction(4)]}`;
        default:
            return 'I have no messages for you at this time';
    }
}

// log the random message to the user
console.log(createMsg(generateRandomNumber));