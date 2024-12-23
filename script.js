const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');


const answer1 = document.querySelector('.answer1')
const answer2 = document.querySelector('.answer2')
const answer3 = document.querySelector('.answer3')
const answer4 = document.querySelector('.answer4')




button1.addEventListener('click', function (){

  answer1.classList.toggle('active');
  button1.classList.toggle('activeButton')
  
})
button2.addEventListener('click', function (){

  answer2.classList.toggle('active');
  button2.classList.toggle('activeButton')
  
})
button3.addEventListener('click', function (){

  answer3.classList.toggle('active');
  button3.classList.toggle('activeButton')
  
})
button4.addEventListener('click', function (){
  answer4.classList.toggle('active');
  button4.classList.toggle('activeButton')
  
})