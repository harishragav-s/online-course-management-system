class User {
  constructor(id, name, email) {
    this._id = id;
    this._name = name;
    this._email = email;
  }

  login() {
    console.log(`${this._name} logged in.`);
  }

  logout() {
    console.log(`${this._name} logged out.`);
  }

  viewProfile() {
    return `${this._name} (${this._email})`;
  }
}
class Student extends User {
  constructor(id, name, email) {
    super(id, name, email);
    this.enrolledCourses = [];
    this.grades = new Map();
  }

  submitAssignment(course, assignment, answer) {
    assignment.receiveSubmission(this, answer);
    console.log(`${this._name} submitted assignment: ${assignment.title}`);
  }

  viewGrades() {
    return this.grades;
  }
}
class Instructor extends User {
  constructor(id, name, email) {
    super(id, name, email);
    this.createdCourses = [];
  }

  createCourse(title, description) {
    const course = new Course(title, description, this);
    this.createdCourses.push(course);
    console.log(`Course "${title}" created.`);
    return course;
  }

  gradeAssignment(assignment, student, score, feedback) {
    assignment.grade(student, new Grade(score, feedback));
    console.log(`Graded ${student._name}'s assignment with score ${score}`);
  }

  viewProfile() {
    return `Instructor: ${super.viewProfile()}`;
  }
}
class Course {
  constructor(title, description, instructor) {
    this.id = Date.now().toString();
    this.title = title;
    this.description = description;
    this.instructor = instructor;
    this.students = [];
    this.assignments = [];
  }

  enroll(student) {
    this.students.push(student);
    student.enrolledCourses.push(this);
    console.log(`${student._name} enrolled in ${this.title}`);
  }

  addAssignment(title) {
    const assignment = new Assignment(title);
    this.assignments.push(assignment);
    console.log(`Assignment "${title}" added to ${this.title}`);
    return assignment;
  }
}
class Assignment {
  constructor(title) {
    this.id = Date.now().toString();
    this.title = title;
    this.submissions = new Map();
    this.grades = new Map();
  }

  receiveSubmission(student, answer) {
    this.submissions.set(student, answer);
  }

  grade(student, gradeObj) {
    this.grades.set(student, gradeObj);
    student.grades.set(this, gradeObj);
  }

  viewSubmissions() {
    return this.submissions;
  }
}

class Grade {
  constructor(score, feedback) {
    this.score = score;
    this.feedback = feedback;
  }

  getScore() {
    return this.score;
  }
}
const instructor = new Instructor("1", "Prof. Ragav", "Ragav@example.com");
const student = new Student("2", "Harish", "Harish@example.com");

const course = instructor.createCourse("JavaScript 101", "Intro to JS");
course.enroll(student);

const assignment = course.addAssignment("Variables and Data Types");
student.submitAssignment(course, assignment, "My Answers Here");
instructor.gradeAssignment(assignment, student, 95, "Good work!");
