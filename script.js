const master = gsap.timeline();
const container = document.querySelector('.animationContainer');
const img = document.querySelector('.elonImg');
const text = document.querySelector('.descriptionText');

function setStartingText() {
  text.textContent = 'There once was a young boy';
}

function baseAnimation() {
  const tl = gsap.timeline();
  tl.to('.descriptionText', {
    opacity: 1,
    duration: 1.2,
    ease: Power0.easeNone,
  }).to('.descriptionText', {
    opacity: 0,
    duration: 1.2,
  });
  return tl;
}

function animateAndUpdateText(inputText) {
  const tl = gsap.timeline({});
  tl.set('.descriptionText', {
    text: inputText,
  });
  tl.add(baseAnimation());
  return tl;
}

function animateElon() {
  const tl = gsap.timeline({
    onStart: () => {
      img.classList.toggle('gone');
      text.classList.toggle('gone');
    },
    onComplete: () => {
      img.classList.toggle('gone');
      text.classList.toggle('gone');
      img.src = '';
    },
  });
  tl.to('.elonImg', {
    opacity: 1,
    duration: 1.2,
    ease: Power0.easeNone,
  }).to('.elonImg', {
    opacity: 0,
    delay: 0.5,
    duration: 1.2,
  });
  return tl;
}

function animateElonSecond() {
  const tl = gsap.timeline({
    onStart: () => {
      img.src = './assets/memelord.jpg';
      img.classList.toggle('gone');
      text.classList.toggle('gone');
    },
    onComplete: () => {
      img.classList.toggle('gone');
      text.classList.toggle('gone');
    },
  });
  tl.to('.elonImg', {
    opacity: 1,
    duration: 1.2,
    ease: Power0.easeNone,
  }).to('.elonImg', {
    opacity: 0,
    delay: 0.5,
    duration: 1.2,
  });
  return tl;
}

// Run all logic
function main() {
  setStartingText();
  master
    .add(baseAnimation())
    .add(animateAndUpdateText('He loved to party'))
    .add(animateElon())
    .add(animateAndUpdateText('You probably know his name'))
    .add(animateAndUpdateText('ELON MUSK'))
    .add(animateElonSecond());
}

main();
