//const moneyButton = document.querySelector('button');
const coins = document.querySelector('.coins');
const wallet = document.querySelector('.circle-container');
const moneyForm = document.querySelector('form');
let amount = 0;
let numCoins = parseInt(document.getElementById('howMany').value);
let desiredCoin = document.querySelector('#selectedCoin');
// let pennies = 0;
// let nickels = 0;
// let dimes = 0;
// let quarters = 0;

function appendPenny () {
    const newPenny = document.createElement('div');
    newPenny.classList.add('penny-circle');
    wallet.appendChild(newPenny); 
}

//appendPenny();

function appendNickel () {
    const newNickel = document.createElement('div');
    newNickel.classList.add('nickel-circle');
    wallet.appendChild(newNickel); 
}

//appendNickel();

function appendDime () {
    const newDime = document.createElement('div');
    newDime.classList.add('dime-circle');
    wallet.appendChild(newDime); 
}

//appendDime();

function appendQuarter () {
    const newQuarter = document.createElement('div');
    newQuarter.classList.add('quarter-circle');
    wallet.appendChild(newQuarter); 
}

//appendQuarter();

moneyForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    while (amount <= numCoins) {
         if (event.target.classList.includes('penny')) {
            const newPenny = document.createElement('div');
            newPenny.classList.add('penny-circle');
            wallet.appendChild(newPenny);
        }
        amount++;
    }
   
});

function appendPenny () {
    const newPenny = document.createElement('div');
    newPenny.classList.add('penny-circle');
    wallet.appendChild(newPenny); 
}

//appendPenny();

function appendNickel () {
    const newNickel = document.createElement('div');
    newNickel.classList.add('nickel-circle');
    wallet.appendChild(newNickel); 
}

//appendNickel();

function appendDime () {
    const newDime = document.createElement('div');
    newDime.classList.add('dime-circle');
    wallet.appendChild(newDime); 
}

//appendDime();

function appendQuarter () {
    const newQuarter = document.createElement('div');
    newQuarter.classList.add('quarter-circle');
    wallet.appendChild(newQuarter); 
}

//appendQuarter();