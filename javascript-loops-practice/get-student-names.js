/* exported getStudentNames */
function getStudentNames(students) {
  var output = [];
  for (let i = 0; i < students.length; i++) {
    output.push(students[i].name);
  }
  return output;
}
