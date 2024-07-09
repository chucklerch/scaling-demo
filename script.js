const container = document.getElementById('container');

function drawBox(url, color) {
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  box.style.width = '100px';
  box.style.height = '100px';
  box.style.margin = '10px';

  container.appendChild(box);

  fetch(url)
    .then(response => response.text())
    .then(data => console.log(`Server Response from ${url}:`, data));
}

setInterval(() => {
  const url1 = 'https://www.googel.com/'; // Replace with your server URLs
  const url2 = 'https://www.google.com/';

  drawBox(url1, 'red');
  drawBox(url2, 'blue');
}, 2000); // Adjust the interval as needed (in milliseconds)
