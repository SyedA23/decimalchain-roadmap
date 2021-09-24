// Varibales
const cardHeading = document.querySelector('.roadmap-card-heading');
const cardText = document.querySelector('.roadmap-card-text');
const cardIcon = document.querySelector('.card-icon');
const roadmapIcon = document.querySelector('.roadmap-card-icon');

// Nav tools functionality
document.getElementById('nav-tools').addEventListener('click', () => {
  document.querySelector('.secondary-navbar').classList.toggle('active-navbar');
  document.querySelector('.fa-chevron-down').classList.toggle('nav-arrow');
  document.querySelector('.fa-chevron-up').classList.toggle('nav-arrow');
  document.querySelector('#nav-tools').classList.toggle('nav-tools-shades');
});

const data = [{
  id: 1,
  header: 'Q1 2019',
  description: 'Marketing and design initiatives.',
  img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTAgMEg0OFY0OEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3MyAtMjI0KSB0cmFuc2xhdGUoMTY1IDIxNikgdHJhbnNsYXRlKDggOCkiLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMC4zMTMgNDEuMDMxTDM1LjI4IDIyLjA3OGMuMjgyLS4zNzUuNDM4LS43MTkuNDM4LTEuMDk0IDAtLjY4Ny0uNTMyLTEuMTg3LTEuMjUtMS4xODdoLTkuMDE2bDQuNTk0LTEyLjM2Yy42NTYtMS43OTYtMS4yMDMtMi43NS0yLjM2LTEuMjhMMTIuNzIgMjUuMTI0Yy0uMjgxLjM2LS40MzguNzAzLS40MzggMS4wOTQgMCAuNjg3LjUzMSAxLjE4NyAxLjI1IDEuMTg3aDkuMDE2TDE3Ljk1MyAzOS43NWMtLjY3MiAxLjc5NyAxLjIwMyAyLjc1IDIuMzYgMS4yODF6bTIuMjM0LTcuMzI4bDQuMTcyLTguOTg0aC05Ljc4Mmw4LjUtMTEuMjM1LTQuMTU2IDloOS43ODJsLTguNTE2IDExLjIyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3MyAtMjI0KSB0cmFuc2xhdGUoMTY1IDIxNikgdHJhbnNsYXRlKDggOCkiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==',
  imgColor: 'linear-gradient(135deg, rgb(0, 255, 170), rgb(0, 187, 255) 53 %, rgb(69, 121, 245))',
},
{
  id: 2,
  header: 'Q2 2019',
  description: 'Deploying the main network. Launch the original masterminds. Starting block browser. Starting the user console.',
  img: 'https://decimalchain.com/_nuxt/img/start.45c281d.svg',
  imgColor: 'linear-gradient(135deg, rgb(0, 255, 170), rgb(69, 121, 245) 53%, rgb(156, 66, 245) 100%)',
},
{
  id: 3,
  header: 'Q3 2019',
  description: 'Release desktop user wallet application. Release of the wallet application for mobile.',
  img: 'https://decimalchain.com/_nuxt/img/apps.685484b.svg',
  imgColor: 'background-image: linear-gradient(135deg, rgb(0, 187, 255), rgb(69, 121, 245) 51%, rgb(93, 45, 225))'
},
{
  id: 4,
  header: 'Q4 2019',
  description: 'Delegating and receiving reward for delegation. The functionality of issuing a custom coin. Functionality of selling, buying and exchanging coins. Check function.',
  img: 'https://decimalchain.com/_nuxt/img/rewards.57b5bf1.svg',
  imgColor: 'linear-gradient(135deg, rgb(0, 187, 255), rgb(156, 66, 245) 53%, rgb(93, 45, 225))',
},
{
  id: 5,
  header: 'Q1 2020',
  description: 'The Exchange. SDK.',
  img: 'https://decimalchain.com/_nuxt/img/exchange.8bbf90b.svg',
  imgColor: 'linear-gradient(135deg, rgb(255, 0, 170), rgb(156, 66, 245) 50%, rgb(93, 45, 225))',
},
{
  id: 6,
  header: 'Q2 2020',
  description: 'Offshore Application Swap coins within Cosmos Hub',
  img: 'https://decimalchain.com/_nuxt/img/swap.4bc12d5.svg',
  imgColor: 'linear-gradient(135deg, rgb(255, 94, 0), rgb(245, 69, 98) 54%, rgb(195, 45, 225))',
}];


// Hide previos text of button
const hidePrev = (currentCard) => {
  if (currentCard == 1) {
    document.querySelector('.button-left').innerHTML = `<i class="fas fa-arrow-left"></i>`;
  } else {
    document.querySelector('.button-left').innerHTML = `<i class="fas fa-arrow-left"></i> prev`;
  }
}

// Hide next text of button
const hideNext = (currentCard) => {
  if (currentCard == data.length) {
    document.querySelector('.button-right').innerHTML = `<i class="fas fa-arrow-right"></i>`;
  } else {
    document.querySelector('.button-right').innerHTML = `next <i class="fas fa-arrow-right"></i>`;
  }
}

// Set initial data to card 
const setInitialData = () => {
  cardHeading.innerHTML = data[2].header;
  cardText.innerHTML = data[2].description;
  cardIcon.innerHTML = data[2].img;
  roadmapIcon.style.background = data[2].imgColor;
}
setInitialData();

// Roadmap Card button logic
let currentCard = 3;
let newData;

// Roadmap Card next button logic
const handleNext = () => {
  if (currentCard < data.length) {
    currentCard += 1;
    newData = data.filter((item) => item.id == currentCard);
    cardHeading.innerHTML = newData[0].header;
    cardText.innerHTML = newData[0].description;
    cardIcon.src = newData[0].img;
    roadmapIcon.style.background = newData[0].imgColor;
  }
  hidePrev(currentCard);
  hideNext(currentCard);
}

// Roadmap Card prev button logic
const handlePrev = () => {
  if (currentCard > 1) {
    currentCard -= 1;
    newData = data.filter((item) => item.id == currentCard);
    cardHeading.innerHTML = newData[0].header;
    cardText.innerHTML = newData[0].description;
    cardIcon.src = newData[0].img;
    roadmapIcon.style.background = newData[0].imgColor;
  }
  hidePrev(currentCard);
  hideNext(currentCard)
}