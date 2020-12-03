// Utility function used to create Img elements with class names attached
function getImgWithClass(imgSrc, ...className) {
  const imgElem = document.createElement('img');
  imgElem.src = imgSrc;
  className.forEach((name) => imgElem.classList.add(name));
  return imgElem;
}

// Used for creating a timeline with onStart and onComplete which removes an element
function getToogleTimeline(element) {
  return gsap.timeline({
    onStart: () => {
      element.classList.toggle('gone');
    },
  });
}

// Clean up multiple timelines, where they can't have their own onComplete
function cleanup(...elements) {
  elements.forEach((elem) => {
    elem.classList.toggle('gone');
    elem.src = '';
  });
}

// Used for creating a timeline with onStart and onComplete which removes an element
function getToogleTimelineTest(element, imgSrc = null) {
  return gsap.timeline({
    onStart: () => {
      element.src = imgSrc ?? '/assets/elon/gulp.jpg';
      element.classList.toggle('test');
    },
    onComplete: () => {
      element.classList.toggle('test');
      img.src = '';
    },
  });
}

// Used for creating a wrapper for easy cleanup
function getWrapperContainer(containerName, gone = false) {
  const container = document.createElement('div');
  container.classList = containerName;
  if (gone) container.classList.add('gone');
  return container;
}

function getFadeoutTL(container) {
  const fadeOut = gsap.timeline();
  fadeOut.to(container, 1, {
    opacity: 0,
  });
}

// Used for creating a timeline which deletes Container
// and fades out
function getMasterTimeline(
  parentContainer,
  contentContainer,
  contentContainerClassName,
  ...timelines
) {
  const master = gsap.timeline({
    onComplete: () => parentContainer.removeChild(contentContainer),
  });
  timelines.forEach((tl) => master.add(tl));

  const fadeOut = gsap.timeline();
  fadeOut.to(`.${contentContainerClassName}`, 0.6, {
    opacity: 0,
  });
  master.add(fadeOut);
  return master;
}
