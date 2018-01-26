const buildTable = (height) => {
  for (let i = 0; i < height.length; i++) {
    let div = document.createElement('div');
    div.style.position = "fixed";
    div.style.width = `${(95) + 'px'}`;
    div.style.float = "left";
    div.style.left = `${(i * 100) + 'px'}`;
    div.style.height = `${(height[i] * 100) + 'px'}`;
    div.style.bottom = "0px";
    div.style.background = "red";
    div.style.color = "white";
    div.style.borderColor = "black";
    div.style.borderStyle = "solid";
    div.innerHTML = "wall";

    document.getElementById('container').appendChild(div);
  }
};

const revealWater = (n) => {
  let span = document.createElement('span');
  let answer = document.createTextNode(n.waterArea.toString() + ' units is the max water area');
  span.style.color = "blue";
  span.appendChild(answer);
  document.getElementById('outer').appendChild(span);
};

document.querySelector('#height').addEventListener('submit', (e) => {
  e.preventDefault();
  let rawInput = document.querySelector('input[type=input]').value;
  let convertedInput = { height: strNumConverter(rawInput) };
  buildTable(convertedInput.height);
  calculate(convertedInput).then((res) => {
    console.log('WOO');
    revealWater(res);
  });
});