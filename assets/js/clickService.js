// clickService.js

import { getCharacters } from './characterService.js';
import { createCharacterElement } from './elementService.js';

const personajeElements = {};

function addClickEvent(infoElement, start, end) {
  const infoElementId = infoElement.id;
  personajeElements[infoElementId] = [];
  let clickCount = 0;

  infoElement.addEventListener('mouseenter', async () => {
    if (clickCount < 5) {
      clickCount++;
      const charactersGenerator = getCharacters(start + clickCount - 1, start + clickCount - 1);
      let character = await charactersGenerator.next().value;

      if (character) {
        const personajeElement = createCharacterElement(character, clickCount, infoElementId);
        personajeElements[infoElementId].push(personajeElement);
      }
    }
  });
}

export function addClickEvents() {
  const infoElements = document.querySelectorAll('[id^="info"]');

  infoElements.forEach((infoElement) => {
    let start;
    let end;
    if (infoElement.id === 'info1') {
      start = 1;
      end = 5;
    } else if (infoElement.id === 'info2') {
      start = 6;
      end = 11;
    } else if (infoElement.id === 'info3') {
        start = 12;
        end = 17;
      }
      addClickEvent(infoElement, start, end);
    });
  }
