export function viewportTracking(el, changeEl = el, percent, className) {
  return () => {
    const positionY = el.getBoundingClientRect().y;
    const classList = changeEl.classList;
    const viewportHeight = window.innerHeight;
    const positionInViewport = (1 - positionY / viewportHeight) * 100;

    if (positionInViewport > percent && !classList.contains(className)) {
      classList.add(className);
    } else if (positionInViewport < percent && classList.contains(className)) {
      classList.remove(className);
    }
  };
}
