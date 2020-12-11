const skipButtonClick = () => {
  const button = document.querySelector('.skipButton');
  if (button) {
    button.addEventListener('click', () => {
      document.querySelector('.animationContainer').remove();
      button.remove();
    });
  }
};

// Remove animations if resizing lower than 1366px and started on desktop
const listenToResize = () => {
  window.addEventListener('resize', () => {
    if (window.innerWidth < 1366 && container) {
      container.remove();
      // Set to null to prevent further activation of this listener.
      container = null;
    }
  });
};

const startTheParty = () => {
  const btn = document.querySelector('.partyBtn');
  btn.addEventListener('click', () => {
    console.log('Trying to start the party');
    const danceContainer = document.querySelector('.dancingElon');
    document.querySelector('.partyContainer').classList.toggle('party');
    danceContainer.classList.toggle('gone');
    if (!danceContainer.classList.contains('gone')) {
      danceContainer.autoplay = true;
      danceContainer.play();
    } else {
      danceContainer.pause();
    }
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

const main = () => {
  skipButtonClick();
  startTheParty();
  getStocktip();
  listenToResize();
};

main();
