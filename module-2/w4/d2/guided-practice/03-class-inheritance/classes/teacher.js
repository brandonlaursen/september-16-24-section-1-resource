const Person = require('./person');





class Teacher extends Person{
  constructor(firstName,lastName, subject,yearsOfExperience ){
    super(firstName, lastName)
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    return teachers.reduce((sum, teacher) => sum += teacher.yearsOfExperience,0)
  }
}


const teacher1 = new Teacher("susan", "jones", "biology", 5);
const teacher2 = new Teacher("bobby", "roberts", "math", 15);
// console.log("teacher1:", teacher1);

console.log(Teacher.combinedYearsOfExperience([teacher1, teacher2]))
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
