function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function() {
  return `${this.firstName} ${this.lastName}.`;
};

Student.prototype.enroll = function(course) {
  this.courses.push(course);
  course.addStudent(this.lastName);
};

Student.prototype.courseLoad = function() {
  const courseLoad = {};
  this.courses.forEach(function(course) {
    courseLoad[course.department] = course.numCredits;
  });
  return courseLoad;
};

function Course(name, department, numCredits) {
  this.name = name;
  this.department = department;
  this.numCredits = numCredits;
  this.students = [];
}

Course.prototype.addStudent = function(student) {
  this.students.push(student);
};
