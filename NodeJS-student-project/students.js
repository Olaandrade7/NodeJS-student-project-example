const fs = require("fs");
const chalk = require("chalk");

const getStudents = () => {
  console.log("Getting the Students");
};

const addStudents = (name, age, Class) => {
  const students = loadStudents();

  //To spot duplicate records
  const duplicateData = students.filter((student) => student.name === name);

  if (duplicateData.length === 0) {
    students.push({
      name: name,
      age: age,
      class: Class,
    });

    saveStudents(students);
  } else {
    console.log("Record already in system.Please do not repeat records.");
  }
};

//To remove a student
const removeStudent = (name) => {
  const students = loadStudents();

  const newStudents = students.filter((student) => student.name !== name);

  saveStudents(newStudents);

  if (students.length > newStudents.length) {
    console.log(chalk.green("Removed " + name + " from the records"));
  } else {
    console.log(chalk.red("No such student found"));
  }
};

//Listing of students
const listStudents = () => {
  const students = loadStudents();

  students.forEach((student) => {
    console.log(
      "Name: " +
        student.name +
        ", Age: " +
        student.age +
        ", Class: " +
        student.class
    );
  });
};

//To read list of students
const readStudent = (name) => {
  const students = loadStudents();

  var foundStudent = students.find((student) => student.name === name);

  if (foundStudent) {
    console.log(chalk.green("Student was found in the records"));
    console.log(
      "Name: " +
        foundStudent.name +
        ", Age: " +
        foundStudent.age +
        ", Class: " +
        foundStudent.class
    );
  } else {
    console.log(chalk.red("No student was found in the records."));
  }
};

//To load students records
const loadStudents = () => {
  try {
    const dataBuffer = fs.readFileSync("students.json");
    const JSONdata = JSON.parse(dataBuffer.toString());
    return JSONdata;
  } catch (e) {
    return [];
  }
};

//Save students to json
const saveStudents = (students) => {
  const StringData = JSON.stringify(students);
  fs.writeFileSync("students.json", StringData);
};

//To export
module.exports = {
  getStudents: getStudents,
  addStudents: addStudents,
  removeStudent: removeStudent,
  listStudents: listStudents,
  readStudent: readStudent,
};
