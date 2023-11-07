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
    const htmlContent = `
    <div style="font-family: Arial, sans-serif; font-size: 35px;">${text}</div>
    `;

    const response = await axios.post('https://hcti.io/v1/image', {
        html: htmlContent,
    }, {
        headers: {
            'Authorization': `User-ID:ef8f3f9b-7080-472e-a337-a9a57f996386|API-Key:b8515b9b-916e-40fc-b825-8f17ff91afe8`,
        },
    });

    return response.data.url;
}

app.get('/text-to-image', async (req, res) => {
    try {
        const text = await fetchRandomWord();
        const imageUrl = await fetchImage(`<h1>${text}</h1>`);
        res.json({ imageUrl, text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate image' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
