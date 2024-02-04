const readDatabase = require('../utils');

const db_path = '../database.csv';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(db_path)
      .then((result) => {
        let responseStr = 'This is the list of our students';
        Object.entries(result).forEach(([key, value]) => {
          responseStr += ` \nNumber of students in ${key}: 6. List: ${value.join(', ')}`;
        });
        response.status(200).send(responseStr);
      })
      .catch((error) => { response.status(500).send('Cannot load the database'); });
  }

  static getAllStudentsByMajor(request, response) {
    readDatabase(db_path)
      .then((result) => {
        const { major } = request.params;
        if (result.hasOwnProperty(major)) {
          response.status(200).send(`List: ${result[major].join(', ')}`);
        } else { response.status(500).send('Major parameter must be CS or SWE'); }
      })
      .catch((error) => { response.status(500).send('Cannot load the database'); });
  }
}

module.exports = StudentsController;
