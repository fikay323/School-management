let unParsedStudent = localStorage.getItem('student')
let student = JSON.parse(unParsedStudent)
console.log(student);
let nameDiv = document.querySelector('.name')
let email = document.querySelector('.email')
let matNo = document.querySelector('.matNo')
let age = document.querySelector('.age')
let regDate = document.querySelector('.regDate')
let phone = document.querySelector('.phone')
nameDiv.innerText = `${student.firstName} ${student.lastName}!`
email.innerText += ` ${student.email}`
age.innerText += ` ${student.age}`
phone.innerText += ` ${student.phone}`
matNo.innerText += ` ${student.matricNum}`
regDate.innerText += ` ${student.dateSign}`