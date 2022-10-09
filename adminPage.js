let body = document.querySelector('.body')
let actual = document.querySelector('body')
let editLayer = document.querySelector('.edit-layer')
let info = document.querySelector('.info')
let total = document.querySelector('.total')
let allStudents = []
function local() {
    if(localStorage.length>1) { 
        for(let i = 0; i< localStorage.length; i++) {
           if(localStorage.key(i) !== 'active') {
                let bob = localStorage.getItem(localStorage.key(i))
                let parsebob = JSON.parse(bob)
                if(typeof parsebob === 'object') {
                    allStudents.push(parsebob)
                }
            }
        }
        let filtered = allStudents.filter(function (el) {
            return el != null;
        })
        allStudents = filtered
        console.log(allStudents);
        display()
    }
}
var data
function padLeadingZeros(num, size) {
    let s = num+"";
    while (s. length < size) s = "0" + s;
    return s
}
// function checkEmail() {
//     if(allStudents.length !== 0) {
//         let emailValue = third.value
//         console.log(allStudents);
//         for(i=0; i<allStudents.length; i++) {
//             if (allStudents[i].Email === emailValue) {
//                 alert('An account has already been registered with this email')
//             }
//             else {
//                 signUp()
//             }
//         }
//     }
//     else{
//         signUp()
//     }
// }
function signUp() {
    let randomNumber = Math.floor(Math.random() * 10000) + 1
    let date = new Date()
    let month = date.getMonth()
    let day = date.getDay()
    let year = date.getFullYear()
    let signDate = `${padLeadingZeros(day, 2)}/${padLeadingZeros(month, 2)}/${year}`
    let obj = {}
    obj.firstName = first.value
    obj.lastName = second.value
    obj.email = third.value
    obj.passWord = fourth.value
    obj.age = fifth.value
    obj.phone = sixth.value
    obj.matricNum = 'SQI'+padLeadingZeros(randomNumber, 5)
    obj.dateSign = signDate
    allStudents.push(obj);
    localStorage.setItem(localStorage.length, JSON.stringify(obj))
    display()
    first.value=''
    second.value=''
    third.value=''
    fourth.value=''
    fifth.value=''
    sixth.value=''
}

function display() {
    // if(localStorage.length>1) { 
    //     for(let i = 0; i< localStorage.length; i++) {
    //         let bob = localStorage.getItem(localStorage.key(i))
    //         let parsebob = JSON.parse(bob)
    //         if(typeof parsebob === 'object') {
    //             allStudents[i] = parsebob
    //         }
    //     }
    //     let filtered = allStudents.filter(function (el) {
    //         return el != null;
    //     })
    //     allStudents = filtered
    //     console.log(allStudents);
    // }
    data =''
    if (allStudents.length > 0) {
        total.innerHTML = allStudents.length
    }
    else {
        total.innerHTML = '0'
    }
    for (let i =0; i<allStudents.length; i++) {
        let sn = i
        firstname = allStudents[i].firstName
        lastname = allStudents[i].lastName
        email = allStudents[i].email
        Password = allStudents[i].passWord
        Age = allStudents[i].age
        Phone = allStudents[i].phone
        MatricNum = allStudents[i].matricNum
        signDate = allStudents[i].dateSign
        data += `<tr>
                    <td style='text-align:center;'>${sn+1}</td>
                    <td>${firstname}</td>
                    <td>${lastname}</td>
                    <td>${email}</td>
                    <td>${Password}</td>
                    <td>${Age}</td>
                    <td>${Phone}</td>
                    <td>${MatricNum}</td>
                    <td>${signDate}</td>
                    <td><button onclick='edit(${i})' class="edit">Edit</button></td>
                    <td><button onclick='deleted(${i})' class="delete">Delete</button></td>
                </tr>`
        body.innerHTML = data
    }
}

function deleted(i) {
    let index = i
    if (allStudents.length > 0) {
        for(let k = 0; k< localStorage.length; k++) {
            if(localStorage.key(k) !== 'active') {
                let bob = localStorage.getItem(localStorage.key(k))
                let parsebob = JSON.parse(bob)
                if(typeof parsebob === 'object' && parsebob.email === allStudents[i].email) {
                    localStorage.removeItem(localStorage.key(k))
                }
            }
        }
        allStudents.splice(index, 1)
        display()
    }
    else {
        body.innerHTML = ''
        total.innerHTML = '0'
    }
}

function edit(i) {
    info.innerHTML+= `<button class='save' onclick="save(${i})">Save</button>`
    editLayer.style.visibility = 'visible'
    first2.value = allStudents[i].firstName
    second2.value = allStudents[i].lastName
    third2.value = allStudents[i].email
    fourth2.value = allStudents[i].passWord
    fifth2.value = allStudents[i].age
    sixth2.value = allStudents[i].phone
}

function save(i) {
    if (allStudents.length > 0) {
        for(let k = 0; k< localStorage.length; k++) {
            if(localStorage.key(k) !== 'active') {
                let bob = localStorage.getItem(localStorage.key(k))
                let parsebob = JSON.parse(bob)
                if(typeof parsebob === 'object' && parsebob.email === allStudents[i].email) {
                    let obj = {}
                    obj.firstName = first2.value
                    obj.lastName = second2.value
                    obj.email = third2.value
                    obj.passWord = fourth2.value
                    obj.age = fifth2.value
                    obj.phone = sixth2.value
                    obj.dateSign = parsebob.dateSign
                    obj.matricNum = parsebob.matricNum
                    localStorage.setItem(localStorage.key(k), JSON.stringify(obj))
                }
            }
        }
    }
    allStudents[i].firstName = first2.value
    allStudents[i].lastName = second2.value
    allStudents[i].email = third2.value
    allStudents[i].passWord = fourth2.value
    allStudents[i].age = fifth2.value
    allStudents[i].phone = sixth2.value
    document.querySelector('.save').remove()
    display()
    editLayer.style.visibility ='hidden'
}