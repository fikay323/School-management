let i = 1
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