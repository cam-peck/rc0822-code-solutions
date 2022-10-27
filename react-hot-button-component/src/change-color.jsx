export default function changeColor(clickCount) {
  if (clickCount < 3) {
    return 'black';
  } else if (clickCount < 6) {
    return 'dark-purple';
  } else if (clickCount < 9) {
    return 'light-purple';
  } else if (clickCount < 12) {
    return 'light-red';
  } else if (clickCount < 15) {
    return 'orange';
  } else if (clickCount < 18) {
    return 'yellow';
  } else {
    return 'white';
  }
}
