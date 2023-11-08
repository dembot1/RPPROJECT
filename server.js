// server.js
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/generate-game', function (req, res) {
  const games = ['Adventure Game', 'Puzzle Game', 'Action Game'];
  const game = games[Math.floor(Math.random() * games.length)];
  res.json({ game: game });
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
