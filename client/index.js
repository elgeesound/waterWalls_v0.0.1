const buildTable = (height) => {
  document.getElementById('container').innerHTML = "";
  for (let i = 0; i < height.length; i++) {
    let div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.width = `${(100) + 'px'}`;
    div.style.float = 'left';
    div.style.left = `${(i * 100) + 'px'}`;
    div.style.height = `${(height[i] * 100) + 'px'}`;
    div.style.bottom = '0px';
    div.style.background = 'red';
    div.style.color = 'white';
    div.style.borderColor = 'black';
    div.style.borderStyle = 'solid';
    div.style.zIndex = '1';
    div.innerHTML = 'wall';

    document.getElementById('container').appendChild(div);
  }
};

const revealWater = (obj) => {
  console.log(obj);
  let startH = obj.waterArea.startHeight;
  let endH = obj.waterArea.endHeight;
  document.getElementById('answer').innerHTML = "";
  let span = document.createElement('span');
  let answer = document.createTextNode(obj.waterArea.maxW.toString() + ' units is the max water area');
  span.style.color = "blue";
  span.appendChild(answer);
  document.getElementById('answer').appendChild(span);
  let water = document.createElement('div');
  let widthCalc = obj.waterArea.end - obj.waterArea.start;
  let heightCalc = heightComparer([startH, endH]);
  water.style.marginTop = '0px';
  water.style.bottom = '0px';
  water.style.left = `${(startH * 100) + 'px'}`;
  water.style.width = `${(100 * widthCalc) + 'px'}`;
  water.style.height = `${(heightCalc[0] * 100) + 'px'}`
  water.style.background = 'turquoise';
  document.getElementById('container').appendChild(water);
};

document.querySelector('#height').addEventListener('submit', (e) => {
  e.preventDefault();
  let rawInput = document.querySelector('input[type=input]').value;
  let convertedInput = { height: strNumConverter(rawInput) };
  buildTable(convertedInput.height);
  calculate(convertedInput).then((res) => {
    revealWater(res);
  });
});