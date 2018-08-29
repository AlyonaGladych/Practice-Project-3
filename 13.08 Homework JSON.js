let student = {
"name": "Vasya",
"surname": "Hryhoryshyn",
"rate": 4
};

console.log(`This is ${student.name}`);

let stud = JSON.stringify(student);

console.log(student);

student.rate = 5;

console.log(stud);

console.log(`${student.name}'s rate is ${student.rate}`);
