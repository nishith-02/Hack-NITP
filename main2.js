function getnupdate() {
    var add = document.querySelector("button");
    console.log("success");
    var tit = document.getElementById("details").value;
    var desc = document.getElementById("spent").value;
    console.log(tit, desc);
    if (localStorage.getItem('nextJson') == null) {
        var itemsJsonArray = [];
        var object = {
            title: tit,
            description: desc,
        };
        itemsJsonArray.push(object);
        localStorage.setItem('nextJson', JSON.stringify(itemsJsonArray));
    }
    else {
        itemJsonStr = localStorage.getItem('nextJson');
        itemsJsonArray = JSON.parse(itemJsonStr);
        object = {
            title: tit,
            description: desc,
        }
        itemsJsonArray.push(object);
        localStorage.setItem('nextJson', JSON.stringify(itemsJsonArray));
    }
    update();
}
function update() {
    if (localStorage.getItem('nextJson') == null) {
        var itemsJsonArray = []
        localStorage.setItem('nextJson', JSON.stringify(itemsJsonArray));

    }
    else {
        itemJsonStr = localStorage.getItem('nextJson');
        itemsJsonArray = JSON.parse(itemJsonStr)
    }
    let tablebody = document.getElementById("tablebody");
    let str = ""
    itemsJsonArray.forEach((element, index) => {
        str += `
            <tr>
                <td>${index + 1}</td>
                <td>${element.title}</td>
                <td>${element.description}</td>
                <td><button class="del_button" type="submit" onclick="deleted(${index})">Delete</button></td>
            </tr>`;
    });
    tablebody.innerHTML = str;
}
function idiot() {
    update();
    getnupdate();
}
function deleted(itemIndex) {
    itemJsonStr = localStorage.getItem('nextJson');
    itemsJsonArray = JSON.parse(itemJsonStr);
    itemsJsonArray.splice(itemIndex, 1);
    localStorage.setItem("nextJson", JSON.stringify(itemsJsonArray));
    update();
}
function interpret() {
    var cheap = localStorage.getItem("itemsJson");
    var local_one = JSON.parse(cheap);
    var rich = localStorage.getItem("nextJson");
    var local_two = JSON.parse(rich);
    //var local_one_length=local_one.length;
    //var local_two_length=local_two.length;
    console.log(local_one[0].description);
    console.log(local_two[0].description);
    var topper = [];

    for (var i = 0; i < local_one.length; i++) {
        var count = 0;
        console.log(parseInt(local_one[i].description));
        for (var j = 0; j < local_two.length; j++) {
            if (local_one[i].title === local_two[j].title) {

                count += parseInt(local_two[j].description);
                console.log("count:" + count);
            }
        }

        var obj_topper = {
            info: local_one[i].title,
            price: count,
        }
        topper.push(obj_topper);
        var string_obj_topper = JSON.stringify(topper);
        localStorage.setItem("topper", string_obj_topper);
        console.log(localStorage.getItem("topper"));
    }
    for (var i = 0; i < local_one.length; i++) {
        var empty = 0;
        for (var j = 0; j < local_two.length; j++) {
            if (local_one[i].title === local_two[j].title) {
                empty += 1
            }
        }
        if (empty == 0) {
            new_obj_topper = {
                info:local_one[i].title,
                price:0,
            }
            topper.push(new_obj_topper);
            var string_new_obj_topper = JSON.stringify(topper);
            localStorage.setItem("topper", string_new_obj_topper);
        }
    }
    var chk=document.getElementById("checkbox");
    if(chk.checked==false)
    {
        return false;
    }
    else{
        true;
    }
}