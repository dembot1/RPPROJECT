const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

app.use(express.static('public'));

const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];  // Add more words as required

app.get('/text-to-image', async (req, res) => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const text = words[randomIndex];

    const response = await axios.get(`https://img4me.p.rapidapi.com/?text=${text}&font=arial&fcolor=000000&size=35&type=png`, {
        headers: {
            'X-RapidAPI-Host': 'img4me.p.rapidapi.com',
            'X-RapidAPI-Key': '5af3cea84fmsh2ca76ff2be471a8p1ab760jsn8c2a4a4b7d45',
        }
    });
    res.redirect(response.data);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
