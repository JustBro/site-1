export function viewportTracking(el, changeEl = el, percent, className) {
  return () => {
    const positionY = el.getBoundingClientRect().y;
    const classList = changeEl.classList;
    const positionInViewport = (1 - positionY / window.innerHeight) * 100;

    if (positionInViewport > percent && !classList.contains(className)) {
      classList.add(className);
    } else if (positionInViewport < percent && classList.contains(className)) {
      classList.remove(className);
    }
  };
}
