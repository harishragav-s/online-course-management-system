# Online Course Management System (OOP Design)

## Overview
A simple simulation of an online course platform designed using Object-Oriented Programming principles.

Supports:
- Student & Instructor roles
- Course creation & enrollment
- Assignment submission & grading
- Role-based method access

## UML Diagram

<img width="511" height="773" alt="OnlineCourseManagementSystem_UML" src="https://github.com/user-attachments/assets/fc7f47e9-7f0a-4192-bc44-bdca26ebe037" />


##  OOP Principles Used

### Abstraction
- Classes like `User`, `Course`, and `Assignment` hide internal details and expose only necessary methods like `submitAssignment()` or `gradeAssignment()`.

### Encapsulation
- Properties like `id`, `email`, and `grades` are encapsulated using naming conventions and internal maps. Could be extended with real getters/setters.

### Inheritance
- `Student` and `Instructor` inherit from `User`, allowing reuse and extension of shared features like login, logout, and viewProfile.

### Polymorphism
- Instructor overrides `viewProfile()` from the base class. Common methods work for both roles.

## SOLID Principles Followed

- **S**ingle Responsibility: Each class has only one purpose (e.g., grading, course creation).
- **O**pen/Closed: Easy to add more roles or assignment types.
- **L**iskov Substitution: `Student` and `Instructor` can be treated as `User`.
- **I**nterface Segregation: Role-based method segregation.
- **D**ependency Inversion: Code depends on abstractions (not hardcoded types).

## 🛠️ How to Run
1. Clone this repo:
git clone https://github.com/your-username/online-course-management-system
cd online-course-management-system

2. Open `main.js` in browser console or run with Node.js:
   node main.js

3. Follow the demo inside `main.js`.

## 🎥 Video Walkthrough
Will be added soon...

---

© Harish Ragav S
