// elementService.js

export function createCharacterElement(character, index, infoElementId) {
    const personajeElement = document.createElement('div');
    const fuerza = document.createElement('div');
    fuerza.classList.add('fuerza');
    personajeElement.id = `personaje${index}`;
    personajeElement.classList.add('card', 'shadow-lg', 'p-3', 'mb-5', 'bg-body', 'rounded', 'personal');
  
    const circle = document.createElement('span');
    circle.classList.add('fuerza');
    if (infoElementId === 'info1') {
      circle.classList.add('fuerza-dred');
    } else if (infoElementId === 'info2') {
      circle.classList.add('fuerza-dgreen');
    } else if (infoElementId === 'info3') {
      circle.classList.add('fuerza-dblue');
    }
    personajeElement.appendChild(circle);
  
    const name = document.createElement('h5');
    name.textContent = character.name;
  
    const height = document.createElement('p');
    height.textContent = `Altura: ${character.height}`;
  
    const weight = document.createElement('p');
    weight.textContent = `Peso: ${character.mass}`;
  
    personajeElement.appendChild(name);
    personajeElement.appendChild(height);
    personajeElement.appendChild(weight);
  
    const infoParentElement = document.getElementById(infoElementId).parentElement;
    infoParentElement.appendChild(personajeElement);
  
    return personajeElement;
  }
  