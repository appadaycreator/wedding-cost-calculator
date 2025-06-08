const sharp = require('sharp');

sharp('icon-192.png')
    .resize(32, 32)
    .toFile('favicon.ico')
    .then(() => console.log('Created favicon.ico'))
    .catch(err => console.error('Error creating favicon:', err)); 