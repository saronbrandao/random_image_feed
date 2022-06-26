const container = document.querySelector('.container');
const URL = `https://picsum.photos`;
const imgs = document.querySelectorAll('img');
const rows = 5;

//LOOPS
for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${URL}/20${i}`;
  container.appendChild(img);
}

console.log(imgs);

//EVENT LISTENERS
imgs.forEach((img) => {
  img.addEventListener('mouseenter', () => {
    img.classList.toggle('active');
  });
  img.addEventListener('mouseleave', () => {
    img.classList.toggle('active');
  });
});

//HIS SOLUTION
// const container = document.querySelector('.container')
// const unsplashURL = 'https://source.unsplash.com/random/'
// const rows = 5

// for(let i = 0; i < rows * 3; i++) {
//     const img = document.createElement('img')
//     img.src = `${unsplashURL}${getRandomSize()}`
//     container.appendChild(img)
// }

// function getRandomSize() {
//     return `${getRandomNr()}x${getRandomNr()}`
// }

// function getRandomNr() {
//     return Math.floor(Math.random() * 10) + 300
// }
