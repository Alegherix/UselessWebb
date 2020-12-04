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
      img.src = '../assets/memelord.jpg';
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
  const bg = getImgWithClass('../assets/planet/background.png', 'bg', 'gone');
  const mid = getImgWithClass('../assets/planet/mid.png', 'mid', 'gone');
  const side = getImgWithClass(
    '../assets/planet/foreground.png',
    'side',
    'gone'
  );
  const uranus = getImgWithClass(
    '../assets/planet/uranus.png',
    'uranus',
    'gone'
  );

  const flyingBoy = getImgWithClass(
    '../assets/elon/flyingAway.png',
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
  tlFive.to('.boyVisiting', 4, {
    motionPath: {
      path: 'M -200 150 q 150 -300 2150 0',
    },
  });

  const masterTl = gsap.timeline({
    onComplete: () => cleanup(bg, mid, side, uranus, flyingBoy),
  });
  masterTl.add(tl);
  masterTl.add(tlTwo);
  masterTl.add(tlThree);
  masterTl.add(tlFour);
  masterTl.add(tlFive, '-=0.4');

  return masterTl;
}

function findFriends() {}

function findingHostileEnviroment() {
  const land = getImgWithClass(
    '../assets/hostileEncounter/hostileLand.webp',
    'land',
    'gone'
  );

  const greenDino = getImgWithClass(
    '../assets/hostileEncounter/greenDinosaur_S.webp',
    'greenDino',
    'fadeIn',
    'bounce'
  );
  const blueDino = getImgWithClass(
    '../assets/hostileEncounter/dinosaur_S.webp',
    'blueDino',
    'fadeIn',
    'bounce'
  );

  const flyingBoy = getImgWithClass(
    '../assets/elon/flyingAway.png',
    'hostileBoy',
    'gone'
  );

  const hostileContainer = getWrapperContainer('hostile');

  hostileContainer.appendChild(land);
  hostileContainer.appendChild(blueDino);
  hostileContainer.appendChild(greenDino);
  hostileContainer.appendChild(flyingBoy);
  container.appendChild(hostileContainer);

  const tlOne = getToogleTimeline(land);
  tlOne.from('.land', 1, {
    opacity: 0,
  });

  const fadeInDinos = gsap.timeline({
    onStart: () => console.log('Starting dino fadein'),
  });
  fadeInDinos.from('.fadeIn', 1, {
    opacity: 0,
    stagger: 0.4,
  });

  const boyRide = getToogleTimeline(flyingBoy);
  boyRide.to('.hostileBoy', 5, {
    motionPath: {
      path: 'M -200 150 q 150 -500 2300 0',
    },
  });

  const fadeOut = gsap.timeline();
  fadeOut.to('.hostile', 1, {
    opacity: 0,
  });

  const masterTl = gsap.timeline({
    onComplete: () => container.removeChild(hostileContainer),
  });
  masterTl.add(tlOne);
  masterTl.add(fadeInDinos);
  masterTl.add(boyRide, '-=1');
  masterTl.add(fadeOut);
  return masterTl;
}

// TODO -> Cleanup this part, make boyAnswering almost identical, pass img, class, and topVal
// Uses a separate div containing images for easy cleanup
function findingAlienFriend() {
  const alien = getImgWithClass(
    '../assets/alienEncounter/weedAlien.png',
    'weedAlien',
    'gone'
  );
  const question = getImgWithClass(
    '../assets/alienEncounter/alienQuestion.png',
    'alienQuestion',
    'gone'
  );

  const alienContainer = document.createElement('div');
  alienContainer.classList = 'alienContainer';
  container.appendChild(alienContainer);

  alienContainer.appendChild(alien);
  alienContainer.append(question);

  const tlOne = getToogleTimeline(alien);
  tlOne.from('.weedAlien', 1.1, {
    opacity: 0,
  });

  const tlTwo = getToogleTimeline(question);
  tlTwo
    .to('.alienQuestion', 1.2, {
      opacity: 1,
      top: 0,
      scale: 1,
    })
    .to('.alienContainer', 1.6, {
      opacity: 0,
    });
  const masterTl = gsap.timeline({
    onComplete: () => container.removeChild(alienContainer),
  });
  masterTl.add(tlOne);
  masterTl.add(tlTwo);

  return masterTl;
}
// Almost identical to findingAlienFriend
function boyAnsweringAlien() {
  const alien = getImgWithClass(
    '../assets/alienEncounter/passItBoy.png',
    'boyAnswering',
    'gone'
  );
  const question = getImgWithClass(
    '../assets/alienEncounter/boyAnswer2.png',
    'boyAnswer',
    'gone'
  );

  const alienContainer = getWrapperContainer('alienContainer');
  container.appendChild(alienContainer);

  alienContainer.appendChild(alien);
  alienContainer.append(question);

  const tlOne = getToogleTimeline(alien);
  tlOne.from('.boyAnswering', 0.8, {
    ease: 'SlowMo.ease.config(0.7, 0.7, false)',
    opacity: 0,
  });

  const tlTwo = getToogleTimeline(question);
  tlTwo
    .to('.boyAnswer', 1.2, {
      opacity: 1,
      top: '-20%',
      scale: 0.9,
    })
    .to('.alienContainer', 1, {
      opacity: 0,
    });
  const masterTl = gsap.timeline({
    onComplete: () => container.removeChild(alienContainer),
  });
  masterTl.add(tlOne);
  masterTl.add(tlTwo);

  return masterTl;
}

function smokeTrip() {
  //Skapa bakgrundsContainer
  const tripContainer = getWrapperContainer('smoketripContainer', true);

  const burgerBoy = getImgWithClass(
    '../assets/smoketrip/burger_S.webp',
    'burgerBoy',
    'gone',
    'bounce'
  );
  const popcornBoy = getImgWithClass(
    '../assets/smoketrip/popcorn_S.webp',
    'popcornBoy',
    'gone'
  );
  const gulpBoy = getImgWithClass(
    '../assets/smoketrip/gulp_S.webp',
    'gulpBoy',
    'gone',
    'bounce'
  );
  const pizza = getImgWithClass(
    '../assets/smoketrip/pizza_S.webp',
    'pizza',
    'gone',
    'bounce'
  );
  tripContainer.appendChild(burgerBoy);
  tripContainer.appendChild(popcornBoy);
  tripContainer.appendChild(gulpBoy);
  tripContainer.appendChild(pizza);
  container.appendChild(tripContainer);

  const tripTl = getToogleTimeline(tripContainer);
  tripTl.from('.smoketripContainer', 0.6, {
    opacity: 0,
  });

  const burgerBoyTl = getToogleTimeline(burgerBoy);
  burgerBoyTl
    .from('.burgerBoy', 1.5, {
      opacity: 0,
    })
    .to('.burgerBoy', 1, {
      opacity: 0,
    });

  const popcornBoyTL = getToogleTimeline(popcornBoy);
  popcornBoyTL
    .from('.popcornBoy', 0.2, {
      opacity: 0,
    })
    .to('.popcornBoy', 1.5, {
      rotation: -360,
      transformOrigin: 'left 50%',
      opacity: 0,
    });

  const gulpboyTl = getToogleTimeline(gulpBoy);
  gulpboyTl
    .from('.gulpBoy', 1.5, {
      opacity: 0,
    })
    .to('.gulpBoy', 1, {
      opacity: 0,
    });

  const pizzaTL = getToogleTimeline(pizza);
  pizzaTL
    .from('.pizza', 1.5, {
      opacity: 0,
    })
    .to('.pizza', 1, {
      opacity: 0,
      rotation: 360,
    });

  const fadeOut = gsap.timeline();
  fadeOut.to('.smoketripContainer', 1, {
    opacity: 0,
  });

  const masterTl = gsap.timeline({
    onComplete: () => container.removeChild(tripContainer),
  });
  masterTl.add(tripTl);
  masterTl.add(burgerBoyTl);
  masterTl.add(popcornBoyTL, '-=0.6');
  masterTl.add(gulpboyTl, '-=0.6');
  masterTl.add(pizzaTL, '-=0.9');
  masterTl.add(fadeOut, '-=0.5');

  return masterTl;
}

function meetToad() {
  const toadEncounterContainer = getWrapperContainer('toadEncounter', true);

  const toad = getImgWithClass(
    '../assets/toadEncounter/trippToad.png',
    'toad',
    'gone'
  );

  const talk = getImgWithClass(
    '../assets/toadEncounter/trySome.png',
    'talk',
    'gone'
  );

  toadEncounterContainer.appendChild(toad);
  toadEncounterContainer.appendChild(talk);
  container.appendChild(toadEncounterContainer);

  const containerTl = getToogleTimeline(toadEncounterContainer);
  containerTl.from('.toadEncounter', 0.6, {
    opacity: 0,
  });

  const toadTl = getToogleTimeline(toad);
  toadTl.from('.toad', 1.6, {
    bottom: '-40%',
  });

  const talkTl = getToogleTimeline(talk);
  talkTl.from('.talk', 1.6, {
    opacity: 0,
  });

  return getMasterTimeline(
    container,
    toadEncounterContainer,
    'toadEncounter',
    containerTl,
    toadTl,
    talkTl
  );
}

function answerToad() {}

// Run all logic
function main() {
  master
    .add(baseAnimation())
    .add(animateAndUpdateText('Full of ambitions, as grand as can be'))
    .add(animateAndUpdateText('Dreaming of other places'))
    .add(addStory('../assets/elon/computer.jpg'))
    .add(animateAndUpdateText('In a sleepy haze, he said to himself'))
    .add(animateAndUpdateText('"I should head to Mars"'))
    .add(animateAndUpdateText('No second thought was given'))
    .add(addStory('../assets/elon/hero.jpg'))
    .add(animateAndUpdateText('And of the little boy went'))
    .add(addStory('../assets/elon/flyingAway.jpg'))
    .add(animateAndUpdateText('He travelled many planets'))
    .add(addPlanets())
    .add(findingHostileEnviroment())
    .add(animateAndUpdateText('He made some friends along the way'))
    .add(animateAndUpdateText('And then he made some more'))
    .add(findingAlienFriend())
    .add(boyAnsweringAlien())
    .add(animateAndUpdateText('Without hesitation he inhaled'))
    .add(smokeTrip())
    .add(animateAndUpdateText('He felt a tap on his shoulder'))
    .add(meetToad());

  // .add(animateAndUpdateText('You probably know his name'));
  // .add(animateAndUpdateText('You probably know his name'));
  // .add(animateElonSecond())
  // .add(animateAndUpdateText('ELON MUSK'));
}

main();
