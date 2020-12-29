const fs = require('fs');

const getFileData = fileName => {
    const data = fs.readFileSync('./data/' + fileName, 'utf8', (error, data) => {
        if (error) {
            throw error;
        }

        return data;
    })

    return JSON.parse(data);
}

const getRandomEntry = arr => {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index];
}

const getRandomWordByType = wordType => {
    const words = getFileData(wordType + '.json');

    if (wordType === 'verbs') {
        return getRandomEntry(words[wordType])['present']
    }

    return getRandomEntry(words[wordType])
}

const getRandomWords = () => {
    const noun = getRandomWordByType('nouns');
    const preposition = getRandomWordByType('prepositions');
    const verb = getRandomWordByType('verbs');
    return `${noun} ${preposition} ${verb}`;
}

console.log(getRandomWords());
