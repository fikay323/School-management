let i = localStorage.length
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
function padLeadingZeros(num, size) {
    let s = num+"";
    for(let i = s.length; i < size; i++) {
        s = '0' + s
    }
    return s
}
const checkEmail = ()=>{
    let isFound = false
    if (localStorage.length > 1) {
        for(let k = 0; k< localStorage.length; k++) {
            let bob = localStorage.getItem(localStorage.key(k))
            let parsebob = JSON.parse(bob)
            if(typeof parsebob === 'object' && parsebob.email == email.value) {
                isFound = true
                break
            }
        }
    }
    isFound ? alert('An account has already been registered with this email') : signUp()
}
const signUp = ()=>{
    let randomNumber = Math.floor(Math.random() * 10000) + 1
    let date = new Date()
    let month = date.getMonth()
    let day = date.getDate()
    let year = date.getFullYear()
    let signDate = `${padLeadingZeros(day, 2)}/${padLeadingZeros(month, 2)}/${year}`
    let student ={}
    student.firstName = firstname.value
    student.lastName = lastname.value
    student.email = email.value
    student.passWord = password.value
    student.age = age.value
    student.phone = phoneNumber.value
    student.matricNum = 'SQI'+padLeadingZeros(randomNumber, 5)
    student.dateSign = signDate
    let stringStudent = JSON.stringify(student)
    localStorage.setItem(i, stringStudent)
    i++
    
}