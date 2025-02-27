const master = gsap.timeline();
let container = document.querySelector('.animationContainer');
const img = document.querySelector('.elonImg');
const text = document.querySelector('.descriptionText');

// Used to prevent loading animations if not on desktop
// Prevents images from loading
const preventAnimationRendering = () => {
  if (window.innerWidth < 1366) {
    container.remove();
    container = null;
  }
};

preventAnimationRendering();

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
  const currentWidth = window.innerWidth + 200;

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
      path: `M -200 150 q 150 -300 ${currentWidth} 0`,
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

  const fadeInDinos = gsap.timeline();
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

function answerToad() {
  const toadEncounterContainer = getWrapperContainer(
    'toadAnswerContainer',
    true
  );

  const boy = getImgWithClass(
    '../assets/alienEncounter/passItBoy.png',
    'boyAnswering',
    'gone'
  );

  const answer = getImgWithClass(
    '../assets/toadEncounterAnswer/gimmeDat.png',
    'boyAnswer',
    'gone'
  );

  container.appendChild(toadEncounterContainer);
  toadEncounterContainer.appendChild(boy);
  toadEncounterContainer.appendChild(answer);

  const containerTl = getToogleTimeline(toadEncounterContainer);
  containerTl.from('.toadAnswerContainer', 0.6, {
    opacity: 0,
  });

  const boyTl = getToogleTimeline(boy);
  boyTl.from('.boyAnswering', 0.8, {
    ease: 'SlowMo.ease.config(0.7, 0.7, false)',
    opacity: 0,
  });

  const answerTl = getToogleTimeline(answer);
  answerTl.to('.boyAnswer', 1.2, {
    opacity: 1,
    top: '-20%',
    scale: 0.9,
  });

  return getMasterTimeline(
    container,
    toadEncounterContainer,
    'toadAnswerContainer',
    containerTl,
    boyTl,
    answerTl
  );
}

function tripBalls() {
  const tripContainer = getWrapperContainer('tripContainer');

  const vision = getImgWithClass(
    '../assets/acidtrip/vision.jpg',
    'vision',
    'gone'
  );

  const secondVision = getImgWithClass(
    '../assets/acidtrip/secondTrip.jpg',
    'secondVision',
    'gone'
  );

  const deer = getImgWithClass('../assets/acidtrip/deer.jpg', 'deer');
  const fishEater = getImgWithClass(
    '../assets/acidtrip/fishEater.webp',
    'fishEater'
  );
  const tesla = getImgWithClass(
    '../assets/acidtrip/tesla.jpg',
    'tesla',
    'gone'
  );

  container.appendChild(tripContainer);
  tripContainer.appendChild(vision);
  tripContainer.appendChild(deer);
  tripContainer.appendChild(tesla);
  tripContainer.appendChild(secondVision);
  tripContainer.appendChild(fishEater);

  const visionTl = getToogleTimeline(vision);
  visionTl.fromTo(
    '.vision',
    { opacity: 0 },
    { opacity: 1, duration: 0.4, repeat: 3 }
  );

  const deerTl = getToogleTimeline(vision);
  deerTl
    .from('.deer', 0.3, {
      opacity: 0,
    })
    .to('.deer', 0.4, { opacity: 0 })
    .to('.deer', 0.3, { opacity: 1 })
    .to('.deer', 1, {
      rotation: 1800,
      scale: 2.5,
    });

  const teslaTl = getToogleTimeline(tesla);
  teslaTl.from('.tesla', 0.4, {
    opacity: 0,
  });

  const fishEaterTl = getToogleTimeline(fishEater);
  fishEaterTl.from('.fishEater', 0.4, {
    opacity: 0,
  });

  const secondVisionTl = getToogleTimeline(secondVision);
  secondVisionTl.fromTo(
    '.secondVision',
    { opacity: 0 },
    { opacity: 1, duration: 0.4, repeat: 2 }
  );

  const primaryTl = gsap.timeline({
    onComplete: () => {
      secondVision.classList.toggle('gone');
    },
  });
  primaryTl.add(visionTl);
  primaryTl.add(deerTl);
  primaryTl.add(secondVisionTl);

  return getMasterTimeline(
    container,
    tripContainer,
    'tripContainer',
    primaryTl,
    teslaTl
  );
}

// Cleanup
function endTimeline() {
  return gsap.timeline({ onComplete: () => container.remove() });
}

// Run all logic
function startAnimation() {
  master
    .add(baseAnimation())
    .add(animateAndUpdateText('Full of ambitions, as grand as can be'))
    .add(animateAndUpdateText('Dreaming of other places'))
    .add(addStory('../assets/elon/computer_XXL.webp'))
    .add(animateAndUpdateText('In a sleepy haze, he said to himself'))
    .add(animateAndUpdateText('"I should head to Mars"'))
    .add(animateAndUpdateText('No second thought was given'))
    .add(addStory('../assets/elon/hero_XXL.webp'))
    .add(animateAndUpdateText('And of the little boy went'))
    .add(addStory('../assets/elon/flyingAway_XXL.webp'))
    .add(animateAndUpdateText('He travelled many planets'))
    .add(addPlanets())
    .add(findingHostileEnviroment())
    .add(animateAndUpdateText('He made some friends along the way'))
    .add(findingAlienFriend())
    .add(boyAnsweringAlien())
    .add(animateAndUpdateText('Without hesitation he inhaled'))
    .add(smokeTrip())
    .add(animateAndUpdateText('He felt a tap on his shoulder'))
    .add(meetToad())
    .add(answerToad())
    .add(tripBalls())
    .add(animateAndUpdateText("And that's where it all began"))
    .add(animateAndUpdateText('You probably know his name'))
    .add(animateAndUpdateText('ELON MUSK'))
    .add(endTimeline());
}

if (container !== null) {
  startAnimation();
}
