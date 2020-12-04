const skipButtonClick = () => {
  const button = document.querySelector('.skipButton');
  button.addEventListener('click', () => {
    console.log('clicked');
    document.querySelector('.animationContainer').remove();
    button.remove();
  });
};

const startTheParty = () => {
  const btn = document.querySelector('.partyBtn');
  btn.addEventListener('click', () => {
    document.querySelector('.partyContainer').classList.toggle('party');
    console.log('clicked');
  });
};
startTheParty();
// skipButtonClick();
