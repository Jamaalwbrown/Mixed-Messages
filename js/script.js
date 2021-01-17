const combinedKnowledge = {
    games: ['Ghost of Tsushima', 'Persona 5 Royal', 'Trails of Cold Steel', 'DBZ Kakarot', 'Miles Morales'],
    motivation: ['surpass your limits', 'never give up', 'go even further beyond', "fight with everything you've got", 'dig deep and find the courage'],
    dayInfo: ['not so good', 'going great!', 'difficult but getting through it', 'absolutely horrible', 'maximum laziness']
}

const generateRandomNumber = (num) => {
    //Generates a random number between 0 and num - 1
    return Math.floor((Math.random() * num));
}

let personalMessage = [ ];

function createMsg(randFunction, inputMessage) {
    //createMsg will use a random generator function to create a message using beginning strings and combinedKnowledge object values
    switch (randFunction(4)) {
        case 1:
            inputMessage.push(`You should play ${combinedKnowledge['games'][randFunction(4)]}`);
            return
        case 2:
            inputMessage.push(`Your mindset should be to ${combinedKnowledge['motivation'][randFunction(4)]}`);
            return
        case 3:
            inputMessage.push(`Your day is currently ${combinedKnowledge['dayInfo'][randFunction(4)]}`);
            return
        default:
            inputMessage.push('I have no messages for you at this time');
            return
    }
}

function formatMessage(message) {
    const formatted = message.join('\n');
    console.log(formatted);
}

// log the random message to the user
createMsg(generateRandomNumber, personalMessage);
formatMessage(personalMessage);