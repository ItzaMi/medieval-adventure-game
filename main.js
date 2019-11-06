const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

function startGame() {
  showTextNode(0);
}

function showTextNode(textNodeIndex) {
  textElement.innerHTML = textNodes[textNodeIndex].text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }
  /* const thisOptions = textNodes[textNodeIndex].options
    .map(element => {
      return "<button>" + element.text + "</button>";
    })
    .join("");*/
    const thisOptions = textNodes[textNodeIndex].options
    .map(element => {
        const button = document.createElement('button');
        button.innerText = element.text;
        button.addEventListener('click', () => selectOption(element));
        optionButtonsElement.appendChild(button);
    }).join('');
}


function selectOption(x) {
    console.log(x.nextText);
    showTextNode(x.nextText)
}
const textNodes = [
  {
    id: 0,
    text:
      "You wake up in a stone room. There's a wooden door and a small window. What do you do?",
    options: [
      {
        text: "Look through the door lock",
        nextText: 1
      },
      {
        text: "Look through the window",
        nextText: 2
      }
    ]
  },
  {
    id: 1,
    text:
      "The door is locked but when you look through the lock you see a guard leaning against the wall. What do you do?",
    options: [
      {
        text: "Check the window",
        nextText: 2
      },
      {
        text: "Call the guard",
        nextText: 3
      },
      {
        text: "Look inside the room",
        nextText: 4
      }
    ]
  },
  {
    id: 2,
    text:
      "It seems like the city is having a festival today. The streets are crowded and alive. I guess they took you the guard's barracks instead of the actual prison. What do you do?",
    options: [
      {
        text: "Check the door",
        nextText: 1
      },
      {
        text: "Keep looking outside the window",
        nextText: 5
      },
      {
        text: "Look inside the room",
        nextText: 4
      }
    ]
  }
];

console.log(textNodes[0].id);

startGame();
