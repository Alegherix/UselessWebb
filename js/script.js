const skipButtonClick = () => {
  const button = document.querySelector('.skipButton');
  button.addEventListener('click', () => {
    console.log('clicked');
    document.querySelector('.animationContainer').remove();
    button.remove();
  });
};

// skipButtonClick();

async function getMessage() {
  const data = await fetch('https://www.foaas.com/asshole/martin', {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });
  const res = await data.json();
  console.log(res);
}
getMessage();
