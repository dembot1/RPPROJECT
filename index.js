const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

app.use(express.static('public'));

// seed word for generating random related words
const seedWord = "fun";

const fetchRandomWord = async () => {
    const response = await axios.get(`https://api.datamuse.com/words?rel_trg=${seedWord}`);
    // randomly selecting a word from the returned list
    const word = response.data[Math.floor(Math.random() * response.data.length)].word;
    return word;
}

const fetchImage = async (text) => {
    const response = await axios.get(`https://img4me.p.rapidapi.com/?text=${text}&font=arial&fcolor=000000&size=35&type=png`, {
        headers: {
            'X-RapidAPI-Host': 'img4me.p.rapidapi.com',
            'X-RapidAPI-Key': '5af3cea84fmsh2ca76ff2be471a8p1ab760jsn8c2a4a4b7d45',
        }
    });
    return response.data;
}

app.get('/text-to-image', async (req, res) => {
    const text = await fetchRandomWord();
    const imageUrl = await fetchImage(text);
    res.json({ imageUrl, text});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
