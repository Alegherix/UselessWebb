const master = gsap.timeline();
const container = document.querySelector('.animationContainer');

function createStartingText() {
  const textNode = document.createElement('p');
  textNode.textContent = 'There once was a young boy';
  textNode.classList = 'descriptionText';
  container.appendChild(textNode);
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
function animateAndUpdateText(text) {
  const tl = gsap.timeline();
  tl.set('.descriptionText', {
    text: text,
  });
  tl.add(baseAnimation());
  return tl;
}
function appendImageToContainer() {
  const img = document.querySelector('.elonImg');
  const text = document.querySelector('.descriptionText');
  img.src = './assets/elonAtEarlyAge.jpg';
  img.classList.add('active');
  text.classList.add('gone');
}

function animateElon() {
  const tl = gsap.timeline({ onStart: appendImageToContainer });
  tl.to('.elonImg', {
    opacity: 1,
    duration: 1.2,
    ease: Power0.easeNone,
  });
  return tl;
}

// Run all logic
function main() {
  createStartingText();
  master
    .add(baseAnimation())
    .add(animateAndUpdateText('Whom loved to party'))
    .add(animateElon());
}

main();
