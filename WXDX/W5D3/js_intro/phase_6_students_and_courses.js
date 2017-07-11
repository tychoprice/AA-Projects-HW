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
  // departments + credits
};

function Course(name, department, numCredits) {
  this.name = name;
  this.department = department;
  this.numCredits = numCredits;
  this.students = [];
}

Course.prototype.addStudent = function(student) {

};
