const myBtn = document.querySelector(".btn");
const popup = document.querySelector('.popup');
const outBtn = document.querySelector('.outBtn');

myBtn.addEventListener('click', ()=>{
    popup.style.display = 'block'
});

outBtn.addEventListener('click', ()=>{
    popup.style.display = 'none'
});