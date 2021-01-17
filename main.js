function getnupdate() {
    var add = document.querySelector("button");
    console.log("success");
    var tit = document.getElementById("details").value;
    var desc = document.getElementById("spent").value;
    console.log(tit, desc);
    if (localStorage.getItem('itemsJson') == null) {
        var itemsJsonArray = [];
        var object={
            title:tit,
            description:desc,
        };
        itemsJsonArray.push(object);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    }
    else {
        itemJsonStr = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemJsonStr);
        object={
            title:tit,
            description:desc,
        }
        itemsJsonArray.push(object);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    }
    update();
}
function update(){
    if (localStorage.getItem('itemsJson') == null) {
        var itemsJsonArray = []
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
        
    }
    else {
        itemJsonStr = localStorage.getItem('itemsJson');
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
                <td><button class="del_btn" type="submit" onclick="deleted(${index})">Delete</button></td>
            </tr>`;
    });
    tablebody.innerHTML = str;
}

function idiot() {
    getnupdate();
}
function deleted(itemIndex) {
    itemJsonStr = localStorage.getItem('itemsJson');
    itemsJsonArray = JSON.parse(itemJsonStr);
    itemsJsonArray.splice(itemIndex,1); 
    localStorage.setItem("itemsJson",JSON.stringify(itemsJsonArray));
    update();
}
var data1=localStorage.getItem("itemsJson");
var data2=JSON.parse(data1);
console.log(data2);
console.log(data2[1].description);
