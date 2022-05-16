function loadTable() {
    $.ajax({
        url: "https://www.mecallapi.com/api/users",
        type: 'GET',
        dataType: 'json',
        success: function (data, status) {
            if (status == 'success') {
                console.log(data);
                var trHTML = '';
                const objects = data;
                for (let object of objects) {
                    trHTML += '<tr>';
                    trHTML += '<td>' + object['id'] + '</td>';
                    trHTML += '<td><img width="50px" src="' + object['avatar'] + '" class="avatar"></td>';
                    trHTML += '<td>' + object['fname'] + '</td>';
                    trHTML += '<td>' + object['lname'] + '</td>';
                    trHTML += '<td>' + object['username'] + '</td>';
                    trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(' + object['id'] + ')">Edit</button>';
                    trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + object['id'] + ')">Del</button></td>';
                    trHTML += "</tr>";
                }
                document.getElementById("mytable").innerHTML = trHTML;
            }
        }
    });
}

loadTable();

function showUserCreateBox() {
    Swal.fire({
        title: 'Create user',
        html:
            '<input id="id" type="hidden">' +
            '<input id="fname" class="swal2-input" placeholder="First">' +
            '<input id="lname" class="swal2-input" placeholder="Last">' +
            '<input id="username" class="swal2-input" placeholder="Username">' +
            '<input id="email" class="swal2-input" placeholder="Email">',
        focusConfirm: false,
        preConfirm: () => {
            userCreate();
        }
    })
}

function userCreate() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    $.ajax({
        url: "https://www.mecallapi.com/api/users/create", 
        type: 'POST',
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({ 
            "fname": fname,
            "lname": lname,
            "username": username,
            "email": email, 
            "avatar": "https://www.mecallapi.com/users/cat.png"
        }),
        success:function (data, status) {
            if (status == "success") {
                const objects = data;
                Swal.fire(objects['message']);
                loadTable();
            }
        }
    });
}

function showUserEditBox(id) {
    console.log(id);
    $.ajax({
        url: "https://www.mecallapi.com/api/users/" + id,
        type: 'GET',
        dataType: 'json',
        success: function (data, status) {
            if (status == 'success') {
                const objects = data;
                const user = objects['user'];
                console.log(user);
                Swal.fire({
                    title: 'Edit User',
                    html:
                        '<input id="id" type="hidden" value=' + user['id'] + '>' +
                        '<input id="fname" class="swal2-input" placeholder="First" value="' + user['fname'] + '">' +
                        '<input id="lname" class="swal2-input" placeholder="Last" value="' + user['lname'] + '">' +
                        '<input id="username" class="swal2-input" placeholder="Username" value="' + user['username'] + '">' +
                        '<input id="email" class="swal2-input" placeholder="Email" value="' + user['email'] + '">',
                    focusConfirm: false,
                    preConfirm: () => {
                        userEdit();
                    }
                })
            }
        }
    });
}

function userEdit() {
    const id = document.getElementById("id").value;
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    $.ajax({
        url: "https://www.mecallapi.com/api/users/update", 
        type: 'PUT',
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({ 
            "id": id,
            "fname": fname,
            "lname": lname,
            "username": username,
            "email": email,
            "avatar": "https://www.mecallapi.com/users/cat.png"
        }),
        success:function (data, status) {
            if (status == "success") {
                const objects = data;
                Swal.fire(objects['message']);
                loadTable();
            }
        }
    });
}

function userDelete(id) {
    $.ajax({
        url: "https://www.mecallapi.com/api/users/delete", 
        type: 'DELETE',
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({ 
            "id": id
        }),
        success:function (data, status) {
            if (status == "success") {
                const objects = data;
                Swal.fire(objects['message']);
                loadTable();
            }
        }
    });
}