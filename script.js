const students = [
    {
        ID: 1,
        name: 'Alice',
        email: 'alice@example.com',
        age: 21,
        gpa: 7.8,
        degree: 'Btech'
    },
    {
        ID: 2,
        name: 'Bob',
        email: 'bob@example.com',
        age: 22,
        gpa: 8,
        degree: 'MBA'
    },
    {
        ID: 3,
        name: 'Charlie',
        email: 'charlie@example.com',
        age: 20,
        gpa: 9,
        degree: 'Arts'
    }
];

function displayData() {
    var body = '<tbody>'
    for (let i = 0; i < students.length; i++) {
        body += '<tr>';
        body += '<td>' + students[i].ID + '</td>';
        body += '<td>' + students[i].name + '</td>';
        body += '<td>' + students[i].email + '</td>';
        body += '<td>' + students[i].age + '</td>';
        body += '<td>' + students[i].gpa + '</td>';
        body += '<td>' + students[i].degree + '</td>';
        body += '<td>' + `<button type="button" class="btn btn-warning btn1" onclick="UpdateStudent(${students[i].ID})"><i class="fa-solid fa-pen-to-square"></i></button><button type="button" class="btn btn-danger btn1" onclick="removeItem(${students[i].ID})"><i class="fa-regular fa-trash-can"></i></button>` + '</td>';
        body += '</tr>';
    }
    body += '</tbody>';
    document.getElementById('studentData').innerHTML = body;
}
displayData();

// function addData(){
//     let new_arr={
//         ID: 4,
//         name: 'Charlie2',
//         email: 'abce@example.com',
//         age: 20,
//         gpa: 9,
//         degree: 'Arts'
//     }
//     students.push(new_arr);
//     displayData();
// }
// addData();
// console.log(students)

function submitData() {
    // var id = document.getElementById("id").value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var gpa = document.getElementById('gpa').value;
    var age = document.getElementById('age').value;
    var degree = document.getElementById('degree').value;

    if (name && email && gpa && age && degree) {
        let id = students.length + 1;
        let new_data = ({ ID: id, name: name, email: email, age: age, gpa: gpa, degree: degree });
        students.push(new_data);
        displayData();
        deleteStudent();
    }
}

// console.log(students)


function deleteStudent() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('gpa').value = "";
    document.getElementById('age').value = "";
    document.getElementById('degree').value = "";
}


function removeItem(rec) {
    var filt = students.filter((a, i) => {
        if (rec == a.ID) {
            students.splice(i, 1);
            displayData();
        }
    })
}


//search 

const searchFun = () => {

    let filter = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
        let td1 = tr[i].getElementsByTagName('td')[1];
        if (td1) {
            let textValue = td1.textContent || td1.innerHTML;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }

        let td2 = tr[i].getElementsByTagName('td')[2];
        if (td2) {
            let textValue = td2.textContent || td2.innerHTML;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }

       

    }
}