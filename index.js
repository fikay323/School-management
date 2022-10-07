let i = 1
let inp = document.getElementById('password')
let eye = document.querySelector('.fa-solid')
const change = ()=>{
    if(inp.type == 'password') {
        inp.type = 'text'
        eye.classList.remove('fa-eye-slash')
        eye.classList.add('fa-eye')
    }
    else {
        inp.type = 'password'
        eye.classList.add('fa-eye-slash')
        eye.classList.remove('fa-eye')
    }
}
const signUp = ()=>{
    let student ={}
    student.firstName = firstname.value
    student.lastName = lastname.value
    student.email = email.value
    student.passWord = password.value
    student.age = age.value
    student.phone = phoneNumber.value
    let stringStudent = JSON.stringify(student)
    localStorage.setItem('student', stringStudent)
}