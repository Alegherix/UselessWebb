const skipButtonClick = () => {
  const button = document.querySelector('.skipButton');
  button.addEventListener('click', () => {
    console.log('clicked');
    document.querySelector('.animationContainer').remove();
    button.remove();
  });
};

skipButtonClick();
