// characterService.js

function fetchCharacterInfo(url) {
    return fetch(url)
      .then(response => response.json())
      .catch(error => {
        console.log('Error:', error);
        throw error;
      });
  }
  
  export function* getCharacters(start, end) {
    for (let i = start; i <= end; i++) {
      const url = `https://swapi.dev/api/people/${i}/`;
      console.log("url " + url);
      try {
        const character = yield fetchCharacterInfo(url);
        yield character;
      } catch (error) {
        console.log('Error:', error);
      }
    }
  }
  