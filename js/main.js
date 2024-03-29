"use strict";
let students = [];
let input = document.getElementsByClassName("input");
let liItems = "";




function Students(name, surname, phone, email, age) {
    this.name = name,
        this.surname = surname,
        this.phone = phone,
        this.email = email,
        this.age = age
}

function generateLiItems(value) {
    liItems += `<li class = "list-group-item"> ${value.name} ${value.surname} ${value.phone} ${value.email}  ${value.age} </li>`;

}

function getInputValues(value) {

    let student = new Students(input[0].value, input[1].value, input[2].value, input[3].value, input[4].value);

    if (input[0].value && input[1].value && input[2].value && input[3].value && input[4].value) {
        if (isNaN(input[4].value)) {
            document.getElementsByClassName("forp")[0].innerHTML = "Age must be number!";
        } else {
            students.push(student);
            students.forEach(generateLiItems);
            reset();
        }
    } else {
        document.getElementsByClassName("forp")[0].innerHTML = "Fill all cells!";
        return;


    }



}

function reset() {
    document.getElementsByClassName("list-group")[0].innerHTML = liItems
    liItems = "";
    input[0].value = "";
    input[1].value = "";
    input[2].value = "";
    input[3].value = "";
    input[4].value = "";
    document.getElementsByClassName("forp")[0].innerHTML = ""
}

function fillListitem() {
    document.getElementById("list-group").innerHTML = ""
}

function sortingName(value) {
    return function(a, b) {
        if (a["name"] > b["name"]) { return 1 };
        if (a["name"] < b["name"]) { return -1 };
        return 0
    }
}

function sortByName(value) {
    students.sort(sortingName());
    students.forEach(generateLiItems);
    reset()

}

function sortingSurname(value) {
    return function(a, b) {
        if (a["surname"] > b["surname"]) { return 1 };
        if (a["surname"] < b["surname"]) { return -1 };
        return 0
    }


}

function sortBySurname(value) {
    students.sort(sortingSurname());
    students.forEach(generateLiItems);
    reset()

}

function sortingPhone(value) {
    return function(a, b) {
        if (a["phone"] > b["phone"]) { return 1 };
        if (a["phone"] < b["phone"]) { return -1 };
        return 0
    }
}

function sortByPhone(value) {
    students.sort(sortingPhone());
    students.forEach(generateLiItems);
    reset()

}

function sortingEmail(value) {
    return function(a, b) {
        if (a["email"] > b["email"]) { return 1 };
        if (a["email"] < b["email"]) { return -1 };
        return 0
    }
}

function sortByEmail(value) {
    students.sort(sortingEmail());
    students.forEach(generateLiItems);
    reset()

}

function sortingAge(value) {
    return function(a, b) {
        if (a["age"] > b["age"]) { return 1 };
        if (a["age"] < b["age"]) { return -1 };
        return 0
    }
}

function sortByAge(value) {
    students.sort(sortingAge());
    students.forEach(generateLiItems);
    reset()

}

function sortingRandom(value) {
    let randomnum = Math.random();
    return function(a, b) {
        return randomnum;
    }
}

function sortByRandom(value) {
    students.sort(sortingRandom());
    students.forEach(generateLiItems);
    reset()

}