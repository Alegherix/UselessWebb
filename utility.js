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
