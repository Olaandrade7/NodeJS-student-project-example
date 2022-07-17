//Email
//var validator = require("validator");
//validator.isEmail("foo@bar.com"); //=> true
//console.log(validator.isEmail("Olaandrade7@gmail.com"));

//URL
//console.log(validator.isURL("www.zaio.io"));

//change colour
//const chalk = require('chalk');
//console.log(chalk.red("Error"));

//const yargs = require("yargs");
//yargs.version("1.0.1");
//console.log(yargs.argv.name);

//console.log(process.argv[2]);
//const command = process.argv[2];

//if (command == "add") {
//  console.log("adding a student");
//} else if (command == "remove") {
//  console.log("removing a student");
//}

//Creating s student database where you input 3 variables of each student
const fs = require("fs");
//fs.writeFileSync("students.txt", "Hi, I am a student");
fs.appendFileSync("students.txt", "Hi, I am a student");
const studentUtils = require("./students");
const chalk = require("chalk");
const yargs = require("yargs");
const { fstat } = require("fs");

//add, remove, list, read
yargs.command({
  command: "add",
  description: "adding a student",
  builder: {
    name: {
      describe: "takes in students fullname",
      demandOption: true,
      type: "string",
    },
    class: {
      describe: "takes in students class",
      demandOption: true,
      type: "number",
    },
    age: {
      describe: "takes in students age",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    //console.log("Adding student " + argv.name + " Age: " + argv.age + " Class: "+ argv.class)
    studentUtils.addStudents(argv.name, argv.age, argv.class);
  },
});

//removing a student
yargs.command({
  command: "remove",
  description: "Removing a student",
  builder: {
    name: {
      describe: "takes in students fullname",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    studentUtils.removeStudent(argv.name);
  },
});

//listing all students

yargs.command({
  command: "list",
  description: "Lisitng all students",
  handler() {
    console.log("Listing all students");
    studentUtils.listStudents();
  },
});

//reading a student

yargs.command({
  command: "read",
  description: "Reading a student",
  builder: {
    name: {
      describe: "takes in students fullname",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    studentUtils.readStudent(argv.name);
  },
});

yargs.argv;

//const command = process.argv[2];

//studentUtils.getStudents()
