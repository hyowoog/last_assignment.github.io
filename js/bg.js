const bgs = ['1.jpeg', '2.jpeg', '3.jpeg'];
const bg = bgs[Math.floor(Math.random() * bgs.length)];
// console.log(bg);
document.body.style.backgroundImage = `url(./img/${bg})`;
document.body.style.backgroundSize = 'cover';
