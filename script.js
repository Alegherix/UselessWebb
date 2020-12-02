const master = gsap.timeline();
const container = document.querySelector('.animationContainer');
const img = document.querySelector('.elonImg');
const text = document.querySelector('.descriptionText');

function setStartingText() {
  text.textContent = 'There once was a young boy';
}

// Creates fade in and out animation
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

// Uses Fade in and out, but updates text before animation
// So as not to animate the text content updating
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

function addStory(imgPath) {
  const tl = gsap.timeline({
    onStart: () => {
      img.src = imgPath;
      img.classList.toggle('gone');
      text.classList.toggle('gone');
    },
    onComplete: () => {
      //Used to stop old images from loading
      img.src = '';
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

function addPlanets() {
  const bg = getImgWithClass('./assets/planet/background.png', 'bg', 'gone');
  const mid = getImgWithClass('./assets/planet/mid.png', 'mid', 'gone');
  const side = getImgWithClass(
    './assets/planet/foreground.png',
    'side',
    'gone'
  );
  const uranus = getImgWithClass(
    './assets/planet/uranus.png',
    'uranus',
    'gone'
  );

  container.appendChild(bg);
  container.appendChild(mid);
  container.appendChild(side);
  container.appendChild(uranus);

  const tl = getToogleTimeline(bg);
  tl.from('.bg', 0.7, {
    opacity: 0,
  });

  const tlTwo = getToogleTimeline(mid);
  tlTwo.from('.mid', 1, {
    opacity: 0,
    y: 200,
  });

  const tlThree = getToogleTimeline(side);
  tlThree.from('.side', 1, {
    opacity: 0,
    y: 200,
  });

  const tlFour = getToogleTimeline(uranus);
  tlFour.from('.uranus', 1, {
    opacity: 0,
  });

  const masterTl = gsap.timeline();
  masterTl.add(tl);
  masterTl.add(tlTwo);
  masterTl.add(tlThree);
  masterTl.add(tlFour);

  return masterTl;
}

function showBoyFlying() {
  const tl = gsap.timeline({
    onStart: () => {
      console.log('Trying to switch img');
      img.src = './assets/planet/rock.png';
      img.classList.toggle('gone');
      img.classList.add('test');
    },
  });
  tl.to('.elonImg', 0.2, {
    x: 60,
  });

  gsap.to('.elonImg', {
    motionPath: {
      path: [
        { x: '0%', y: '0%' },
        { x: '5%', y: '-3%' },
        { x: '60%', y: '25%' },
        { x: '100%', y: '-25%' },
        { x: '350%', y: '-250%' },
        { x: '650%', y: '250%' },
        // { x: 300, y: 20 },
        // { x: 500, y: 200 },
        // { x: 700, y: -10 },
        // { x: 1100, y: 120 },
        // { x: 1920, y: -50 },
        // { x: 900, y: 120 },
      ],
    },
    duration: 5,
  });

  return tl;
}

// Run all logic
function main() {
  setStartingText();
  master
    .add(baseAnimation())
    .add(animateAndUpdateText('Who loved to party'))
    .add(animateElon())
    .add(animateAndUpdateText('In a drunken haze, he one night realized'))
    .add(animateAndUpdateText('"Hey, I should dip to Mars"'))
    .add(animateAndUpdateText('He put on his best suit'))
    .add(addStory('./assets/1997.jpg'))
    .add(animateAndUpdateText('And of the little boy went'))
    .add(addStory('./assets/2130.jpg'))
    .add(animateAndUpdateText('He travelled many planets'))
    // .add(showBoyFlying());
    .add(addPlanets());

  // .add(animateAndUpdateText('You probably know his name'));
  // .add(animateElonSecond())
  // .add(animateAndUpdateText('ELON MUSK'));
}

main();
