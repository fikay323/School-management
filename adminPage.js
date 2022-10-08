let body = document.querySelector('.body')
let actual = document.querySelector('body')
let editLayer = document.querySelector('.edit-layer')
let info = document.querySelector('.info')
let total = document.querySelector('.total')
let allStudents = []
function local() {
    for(let i = 0; i< localStorage.length; i++) {
        let bob = localStorage.getItem(localStorage.key(i))
        let parsebob = JSON.parse(bob)
        if(typeof parsebob === 'object') {
            allStudents[i] = parsebob
        }
    }
    let filtered = allStudents.filter(function (el) {
        return el != null;
      });
    allStudents = filtered
    display()
}
var data
function padLeadingZeros(num, size) {
    let s = num+"";
    while (s. length < size) s = "0" + s;
    return s
}
function checkEmail() {
    if(allStudents.length !== 0) {
        let emailValue = third.value
        console.log(allStudents);
        for(i=0; i<allStudents.length; i++) {
            if (allStudents[i].Email === emailValue) {
                alert('An account has already been registered with this email')
            }
            else {
                signUp()
            }
        }
    }
    else{
        signUp()
    }
}
function signUp() {
    let randomNumber = Math.floor(Math.random() * 10000) + 1
    let date = new Date()
    let month = date.getMonth()
    let day = date.getDay()
    let year = date.getFullYear()
    let signDate = `${padLeadingZeros(day, 2)}/${padLeadingZeros(month, 2)}/${year}`
    var obj = {}
    obj.FirstName = first.value
    obj.LastName = second.value
    obj.Email = third.value
    obj.Password = fourth.value
    obj.Age = fifth.value
    obj.Phone = sixth.value
    obj.MatricNum = 'SQI'+padLeadingZeros(randomNumber, 5)
    obj.dateSign = signDate
    allStudents.push(obj);
    localStorage.setItem('allStudents', JSON.stringify(allStudents))
    display()
    first.value=''
    second.value=''
    third.value=''
    fourth.value=''
    fifth.value=''
    sixth.value=''
}

function display() {
    if(localStorage.allStudents) {
        let bob = localStorage.getItem('allStudents')
        let parseBob = JSON.parse(bob)
        allStudents = parseBob
    }
    // console.log(allStudents);
    data =''
    if (allStudents.length > 0) {
        total.innerHTML = allStudents.length
    }
    else {
        total.innerHTML = '0'
    }
    for (let i =0; i<allStudents.length; i++) {
        let sn = i
        firstname = allStudents[i].FirstName
        lastname = allStudents[i].LastName
        email = allStudents[i].Email
        Password = allStudents[i].Password
        Age = allStudents[i].Age
        Phone = allStudents[i].Phone
        MatricNum = allStudents[i].MatricNum
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
    allStudents.splice(index, 1)
    if (allStudents.length > 0) {
        localStorage.setItem('allStudents', JSON.stringify(allStudents))
        display()
    }
    else {
        body.innerHTML = ''
        total.innerHTML = '0'
        localStorage.removeItem('allStudents')
    }
}

function edit(i) {
    info.innerHTML+= `<button class='save' onclick="save(${i})">Save</button>`
    editLayer.style.visibility = 'visible'
    first2.value = allStudents[i].FirstName
    second2.value = allStudents[i].LastName
    third2.value = allStudents[i].Email
    fourth2.value = allStudents[i].Password
}

function save(i) {
    allStudents[i].FirstName = first2.value
    allStudents[i].LastName = second2.value
    allStudents[i].Email = third2.value
    allStudents[i].Password = fourth2.value
    document.querySelector('.save').remove()
    localStorage.setItem('allStudents', JSON.stringify(allStudents))
    display()
    editLayer.style.visibility ='hidden'
}