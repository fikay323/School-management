let unParsedStudent = localStorage.getItem('student')
let student = JSON.parse(unParsedStudent)
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
console.log(student);
const signIn = ()=>{
    if (student.email === email.value && student.passWord === password.value) {
        window.location.href = 'dashboard.html'
    }
    else {
        alert("Email not found, pls check and try again or create an account if you haven't")
    }
}