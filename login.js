let student
let allStudents =[]
if(localStorage.length>1) { 
    for(let i = 0; i< localStorage.length; i++) {
        let bob = localStorage.getItem(localStorage.key(i))
        let parsebob = JSON.parse(bob)
        if(typeof parsebob === 'object') {
            allStudents[i] = parsebob
        }
    }
    let filtered = allStudents.filter(function (el) {
        return el != null;
    })
    allStudents = filtered
    console.log(allStudents);
}
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
const signIn = ()=>{
    let isFound = false
    for(i=0; i<allStudents.length; i++){
        let emal = allStudents[i].email
        let pass = allStudents[i].passWord
        if (emal === email.value && pass === password.value) {
            localStorage.setItem('active', JSON.stringify(allStudents[i]))
            window.location.href = 'dashboard.html'
            break
        }
        else {
            if(i===allStudents.length-1) {
                alert("Email not found, pls check and try again or create an account if you haven't")
            }
        }
    }
}