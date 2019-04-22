const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function generateHTML([h, v]) {
  return `
  <div class="item h${h} v${v}">
  <img src="images/random-images/${randomNumber(10)}.jpeg">
  </div>
  `;
}

const digits = Array.from({ length: 50 }, 
    () => [randomNumber(3), randomNumber(3)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]])

const html = digits.map(generateHTML).join('');
gallery.innerHTML = html;