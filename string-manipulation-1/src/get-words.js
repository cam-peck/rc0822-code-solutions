/* exported getWords */
function getWords(string) {
  if (string[0] === undefined) return [];
  return string.split(' ');
}
