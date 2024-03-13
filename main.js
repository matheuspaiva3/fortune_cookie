//Variables
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const buttonReveal = document.querySelector('#buttonReveal')
const buttonReset = document.querySelector('#buttonReset')
let randomNumber = Math.floor(Math.random() * 11);
let fortunePhrase = document.querySelector('#pSpecial');

//Events
buttonReveal.addEventListener('click',revealFortune)
buttonReset.addEventListener('click',reset)

//Functions
function revealFortune(e){
    e.preventDefault();
    toggleScreen()
    console.log(randomNumber)
    getFortune ()
}
function reset(e){
    e.preventDefault()
    toggleScreen()
    randomNumber = Math.floor(Math.random() * 11);
    console.log(randomNumber)
}
function toggleScreen(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}
function getFortune(){
    switch(randomNumber){
        case 0:
            document.getElementById('pSpecial').innerText = "A vida trará coisas boas se tiver paciência."
            break;
        case 1:
            document.getElementById('pSpecial').innerText = 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.'
            break;
        case 2: 
            document.getElementById('pSpecial').innerText ='Não compense na ira o que lhe falta na razão.'
            break;
        case 3:
            document.getElementById('pSpecial').innerText ='Defeitos e virtudes são apenas dois lados da mesma moeda.'
            break;
        case 4:
            document.getElementById('pSpecial').innerText ='A maior de todas as torres começa no solo.'
            break;
        case 5:
            document.getElementById('pSpecial').innerText = 'Não há que ser forte. Há que ser flexível.'
            break;
        case 6:
            document.getElementById('pSpecial').innerText = 'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?'
            break;
        case 7:
            document.getElementById('pSpecial').innerText = 'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.'
            break;
        case 8:
            document.getElementById('pSpecial').innerText = 'A juventude não é uma época da vida, é um estado de espírito.'
            break;
        case 9:
            document.getElementById('pSpecial').innerText = 'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'
            break;
        case 10:
            document.getElementById('pSpecial').innerText = 'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.'
            break;
    }
    
}
