let unParsedStudent = localStorage.getItem('active')
let student = JSON.parse(unParsedStudent)
let nameDiv = document.querySelector('.name')
let email = document.querySelector('.email')
let matNo = document.querySelector('.matNo')
let age = document.querySelector('.age')
let regDate = document.querySelector('.regDate')
let phone = document.querySelector('.phone')
let lastName = document.querySelector('.lastname')
let firstName = document.querySelector('.firstname')
nameDiv.innerText += ` ${student.firstName} ${student.lastName}!`
email.innerText += ` ${student.email}`
age.innerText += ` ${student.age}`
phone.innerText += ` ${student.phone}`
matNo.innerText += ` ${student.matricNum}`
regDate.innerText += ` ${student.dateSign}`
firstName.innerText += ` ${student.firstName}`
lastName.innerText += ` ${student.lastName}`
const logOut = ()=> {
    window.location.href = './login.html'
    localStorage.removeItem('active')
}