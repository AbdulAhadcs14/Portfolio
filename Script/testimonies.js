let testimonies_cards_container = document.getElementById('testimonies_cards_container');
let testimonies_cards = document.getElementById('testimonies_cards');

let isDragging = false;
let startX = 0;
let startY = 0;
let currentX = 0;
let translateX = 0;
let sensitivity = 1.5;
let isHorizontalDrag = false;

// ---- Drag Start ----
function dragStart(x, y) {
  isDragging = true;
  isHorizontalDrag = false;
  startX = x;
  startY = y;
  testimonies_cards.style.cursor = 'grabbing';
  document.body.classList.add('no-select');
}

// ---- Drag Move ----
function dragMove(x, y) {
  if (!isDragging) return;

  const deltaX = x - startX;
  const deltaY = y - startY;

  // Decide drag direction only once (after threshold)
  if (!isHorizontalDrag && Math.abs(deltaX) > 10) {
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      isHorizontalDrag = true;
    } else {
      // Vertical scroll — abort drag handling
      dragEnd();
      return;
    }
  }

  if (!isHorizontalDrag) return;

  currentX = translateX + deltaX * sensitivity;

  const containerRect = testimonies_cards_container.getBoundingClientRect();
  const maxTranslateX = 0;
  const minTranslateX = containerRect.width - testimonies_cards.scrollWidth;

  // Clamp
  currentX = Math.max(Math.min(currentX, maxTranslateX), minTranslateX);

  testimonies_cards.style.transform = `translateX(${currentX}px)`;
}

// ---- Drag End ----
function dragEnd() {
  if (!isDragging) return;
  isDragging = false;
  translateX = currentX;
  testimonies_cards.style.cursor = 'grab';
  document.body.classList.remove('no-select');
}

// ---- Mouse Events ----
testimonies_cards.addEventListener('mousedown', e => dragStart(e.clientX, e.clientY));
window.addEventListener('mousemove', e => dragMove(e.clientX, e.clientY));
window.addEventListener('mouseup', dragEnd);

// ---- Touch Events ----
testimonies_cards.addEventListener('touchstart', e => {
  const touch = e.touches[0];
  dragStart(touch.clientX, touch.clientY);
}, { passive: true });

window.addEventListener('touchmove', e => {
  const touch = e.touches[0];
  dragMove(touch.clientX, touch.clientY);
  // Only prevent default if it's a horizontal drag
  if (isDragging && isHorizontalDrag) {
    e.preventDefault(); // Prevent vertical scroll
  }
}, { passive: false });

window.addEventListener('touchend', dragEnd);

// ---- Initial Cursor Style ----
testimonies_cards.style.cursor = 'grab';
