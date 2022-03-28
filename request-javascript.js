var plaque = 'FH-034-DD';
var token = '92cbc2ae3c8a30028d98b10872dd4c3a';

fetch (`https://app.auto-ways.net/autowayapi?plaque=${plaque}&token=${token}`)
.then((response) => response.json())
.then((result) => console.log(result))
.catch((error) => console.log('error', error));
