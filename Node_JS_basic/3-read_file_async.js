const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) { reject(new Error('Cannot load the database')); return; }

      const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
      const header = lines[0].split(',');

      const students = lines.slice(1).map((line) => {
        const values = line.split(',');
        return {
          firstname: values[header.indexOf('firstname')],
          field: values[header.indexOf('field')],
        };
      });

      const fieldCounts = {};
      students.forEach((student) => {
        if (fieldCounts[student.field] === undefined) {
          fieldCounts[student.field] = 1;
        } else {
          fieldCounts[student.field] += 1;
        }
      });

      let resultStr = `Number of students: ${students.length}`
      console.log('Number of students:', students.length);
      Object.keys(fieldCounts).forEach((field) => {
        resultStr += '\n';
        console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${students.filter((student) => student.field === field).map((student) => student.firstname).join(', ')}`);
        resultStr += `Number of students in ${field}: ${fieldCounts[field]}. List: ${students.filter((student) => student.field === field).map((student) => student.firstname).join(', ')}`
      });

      resolve(resultStr);
    });
  });
}

module.exports = countStudents;
