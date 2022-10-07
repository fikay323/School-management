let unParsedStudent = localStorage.getItem('student')
let student = JSON.parse(unParsedStudent)
console.log(student);
const signIn = ()=>{
    if (student.email === email.value && student.passWord === password.value) {
        window.location.href = 'index3.html'
    }
    else {
        alert("Email not found, pls check and try again or create an account if you haven't")
    }
}