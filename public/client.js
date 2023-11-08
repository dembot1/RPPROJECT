// public/client.js
document.getElementById('generateBtn').addEventListener('click', function() {
  fetch('/generate-game')
    .then(response => response.json())
    .then(data => {
      document.getElementById('gameContainer').textContent = 'Generated Game: ' + data.game;
    });
});

