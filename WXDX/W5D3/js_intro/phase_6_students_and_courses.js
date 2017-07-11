function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function() {
  return `${this.firstName} ${this.lastName}.`;
};

Student.prototype.enroll = function(desiredCourse) {
  if (!this.courses.includes(desiredCourse)) {
    this.courses.forEach(function(enrolledCourse) {
      desiredCourse.days.forEach(function(day) {
        if (enrolledCourse.days.includes(day) && enrolledCourse.block === desiredCourse.block) {
          console.log('course conflict');
        }
      });
    });
  }
  this.courses.push(desiredCourse);
  desiredCourse.addStudent(this.lastName);
};

// this.courses.includes(course.days) && this.courses.includes(course.block)

Student.prototype.courseLoad = function() {
  const courseLoad = {};
  this.courses.forEach(function(course) {
    let credits = course.numCredits;
    courseLoad[course.department] = (credits || 0) + credits;
  });
  return courseLoad;
};

function Course(name, department, numCredits, days, block) {
  this.name = name;
  this.department = department;
  this.numCredits = numCredits;
  this.days = days;
  this.block = block;
  this.students = [];
}

Course.prototype.addStudent = function(student) {
  this.students.push(student);
};

var cs100 = new Course('CS100', 'COMPSCI', 5, ['M', 'W', 'F'], 1);
var cs200 = new Course('CS200', 'COMPSCI', 5, ['T', 'R'], 1);
var cs300 = new Course('CS300', 'COMPSCI', 5, ['M', 'W', 'F'], 2);

var math = new Course('MATH100', 'MATH', 5, ['M', 'W', 'F'], 2);
var math2 = new Course('Math9000', 'MATH', 3, ['M', 'R'], 3);

var tycho = new Student('tycho', 'price');
