const skipButtonClick = () => {
  const button = document.querySelector('.skipButton');
  if (button !== null) {
    button.addEventListener('click', () => {
      console.log('clicked');
      document.querySelector('.animationContainer').remove();
      button.remove();
    });
  }
};

const startTheParty = () => {
  const btn = document.querySelector('.partyBtn');
  btn.addEventListener('click', () => {
    document.querySelector('.partyContainer').classList.toggle('party');
  });
};

const getStocktip = () => {
  const memeStockTickers = [
    'PLTR',
    'TSLA',
    'AMD',
    'NIO',
    'GME',
    'MU',
    'JNUG',
    'LULU',
    'ETSY',
    'GOOS',
    'SBUX',
    'ULTA',
  ];

  const btn = document.querySelector('.stocktipBtn');
  btn.addEventListener('click', () => {
    const randomVal = Math.floor(Math.random() * memeStockTickers.length);
    document.querySelector('.stocktip').textContent =
      memeStockTickers[randomVal];
  });
};

// const preventAnimationRendering = () => {
//   if (window.innerWidth < 1366) {
//     document.querySelector('.animationContainer').remove();
//   }
// };

const main = () => {
  skipButtonClick();
  startTheParty();
  getStocktip();
};

main();
