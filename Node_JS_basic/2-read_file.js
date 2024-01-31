const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    let students = data.split('\n');
    students = students.filter((line) => line.trim() !== '');
    console.log(`Number of students: ${students.length}`);
  } catch (err) {
    console.log('Cannot load the database');
  }
}
module.exports = countStudents;
