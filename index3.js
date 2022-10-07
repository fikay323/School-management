let unParsedStudent = localStorage.getItem('student')
let student = JSON.parse(unParsedStudent)
console.log(student);
let nameDiv = document.querySelector('.name')
nameDiv.innerText = `${student.firstName} ${student.lastName}!`