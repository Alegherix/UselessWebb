const master = gsap.timeline();
const container = document.querySelector('.animationContainer');
const img = document.querySelector('.elonImg');
const text = document.querySelector('.descriptionText');

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
  const tl = gsap.timeline();
  tl.set('.descriptionText', {
    text: inputText,
  });
  tl.add(baseAnimation());
  return tl;
}

function animateElon() {
  const tl = getToogleTimelineTest(img);
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
  const tl = getToogleTimelineTest(img, imgPath);
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

  // Byt ut mot .png boy
  const flyingBoy = getImgWithClass(
    './assets/elon/flyingAway.png',
    'boyVisiting',
    'gone'
  );

  container.appendChild(bg);
  container.appendChild(mid);
  container.appendChild(side);
  container.appendChild(uranus);
  container.appendChild(flyingBoy);

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

  const tlFive = getToogleTimeline(flyingBoy);
  tlFive.to('.boyVisiting', 6, {
    motionPath: {
      path: 'M -200 150 q 150 -300 2320 0',
    },
  });

  const masterTl = gsap.timeline({
    onComplete: () => cleanup(bg, mid, side, uranus, flyingBoy),
  });
  masterTl.add(tl);
  masterTl.add(tlTwo);
  masterTl.add(tlThree);
  masterTl.add(tlFour);
  masterTl.add(tlFive);

  return masterTl;
}

function findingFriends() {}

// Run all logic
function main() {
  master
    .add(baseAnimation())
    .add(animateAndUpdateText('Who loved the simple things in life'))
    .add(animateElon())
    .add(animateAndUpdateText('With ambitions, as grand as can be'))
    .add(addStory('/assets/elon/computer.jpg'))
    .add(animateAndUpdateText('In a manic haze, he said to himself'))
    .add(animateAndUpdateText('Hey, I should dip to Mars'))
    .add(animateAndUpdateText('He put on his best suit'))
    .add(addStory('./assets/elon/hero.jpg'))
    .add(animateAndUpdateText('And of the little boy went'))
    .add(addStory('./assets/elon/flyingAway.jpg'))
    .add(animateAndUpdateText('He travelled many planets'))
    .add(addPlanets())
    .add(animateAndUpdateText('He made some friends along the way'));

  // .add(animateAndUpdateText('You probably know his name'));
  // .add(animateElonSecond())
  // .add(animateAndUpdateText('ELON MUSK'));
}

main();
