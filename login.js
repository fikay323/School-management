let allStudents = []
if(localStorage.length >= 1) { 
    for(let i = 0; i< localStorage.length; i++) {
        let student = JSON.parse(localStorage.getItem(localStorage.key(i)))
        if(typeof student === 'object') {
            allStudents.push(student)
        }
    }
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
const cont = document.querySelector('.cont')
const btn = document.querySelector('.btn2')
const wrong = document.querySelector('.wrong')
const signIn = () => {
    for(i=0; i<allStudents.length; i++){
        if(email.disabled === false) {
            if(allStudents[i].email === email.value) {
                cont.style.display = 'flex'
                setTimeout(()=>{
                    cont.style.height = '40px'
                    cont.style.overFlow = 'visible'
                    email.disabled = true
                    btn.name
                },50)
                break
            }
            else {
                if (i === allStudents.length-1) {
                    alert('Email not found, pls try again or create an account')
                }
            }
        }
        else {
            if (allStudents[i].password === password.value) {
                localStorage.setItem('active', JSON.stringify(allStudents[i]))
                window.location.href = 'dashboard.html'
                break
            }
            else {
                if(i===allStudents.length-1) {
                    wrong.style.display = 'block'
                }
            }
        }
    }
}
