document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    var form = document.getElementById("form");
    var table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    var row = table.insertRow(table.rows.length);

    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var address = form.elements["address"].value;
    var pincode = form.elements["pincode"].value;
    var gender = form.elements["gender"].value;
    var foodList = form.querySelectorAll('input[name="food"]:checked');
    var food = "";
    for (var i = 0; i < foodList.length; i++) {
        food += foodList[i].value + ", ";
    }
    food = food.slice(0, -2);
    var state = form.elements["state"].value;
    var country = form.elements["country"].value;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = food;
    cell7.innerHTML = state;
    cell8.innerHTML = country;

    form.reset();
});