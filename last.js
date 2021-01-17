function excited() {
    var a = localStorage.getItem("itemsJson");
    var get_ls1 = JSON.parse(a);
    var b = localStorage.getItem("topper");
    var get_ls2 = JSON.parse(b);
    /*var body=document.getElementsByTagName("body")[0];
    var tbl=document.createElement("table");
    var tblbody=document.createElement("tbody");*/
    var table=document.createElement("table");
    table.setAttribute("class","border_class")
    var th=document.createElement("tr");
    var th1=document.createElement("th")
    var th2=document.createElement("th");
    var th3=document.createElement("th");
    var th4=document.createElement("th");
    var th5=document.createElement("th");
    var bro1=document.createTextNode("S.NO");
    var bro2=document.createTextNode("Description");
    var bro3=document.createTextNode("Budget");
    var bro4=document.createTextNode("Total amount spent");
    var bro5=document.createTextNode("Status(profit(+),loss(-))");
    th1.appendChild(bro1);
    th2.appendChild(bro2);
    th3.appendChild(bro3);
    th4.appendChild(bro4);
    th5.appendChild(bro5);
    th.appendChild(th1);
    th.appendChild(th2);
    th.appendChild(th3);
    th.appendChild(th4);
    th.appendChild(th5);
    table.appendChild(th);
    for (var i = 0; i < get_ls1.length; i++) {
        count = 0;
        console.log(parseInt(get_ls1[i].description));
        var tr=document.createElement("tr")
        for (var j = 0; j < get_ls2.length; j++) {
            if (get_ls1[i].title == get_ls2[j].info) {
                var final = parseInt(get_ls1[i].description) - parseInt(get_ls2[j].price);
                var td1=document.createElement("td");
                var td2=document.createElement("td");
                var td3=document.createElement("td");
                var td4=document.createElement("td");
                var td5=document.createElement("td");
                var text1=document.createTextNode(i+1);
                var text2=document.createTextNode(get_ls1[i].title);
                var text3=document.createTextNode(get_ls1[i].description);
                var text4=document.createTextNode(get_ls2[j].price);
                var text5=document.createTextNode(final);
                td1.appendChild(text1)
                td2.appendChild(text2);
                td3.appendChild(text3);
                td4.appendChild(text4);
                td5.appendChild(text5);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
            }
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
    //table.setAttribute=("style","width:50%;border:solid red 2px");
    var get_one_sum=0;
    for(var a=0;a<get_ls1.length;a++)
    {
        get_one_sum+=parseInt(get_ls1[a].description);
    }
    console.log(get_one_sum)
    var get_two_sum=0;
    for(var k=0;k<get_ls2.length;k++)
    {
        get_two_sum+=parseInt(get_ls2[k].price);
    }
    console.log(get_two_sum);
    var saved=get_one_sum-get_two_sum;
    if(saved<0){
        var loss=-(saved);
    }
    if(get_one_sum>get_two_sum)
    {
        var final_one=document.createElement("div");
        final_one.setAttribute("class","line1")
        var final_two=document.createElement("p");
        var final_three=document.createTextNode("You are doing a great job, Proceed with the same flow and save every penny(You managed to save "+ saved+  " rupees.)")
        final_two.appendChild(final_three);
        final_one.appendChild(final_two);
        document.body.appendChild(final_one);
        //document.getElementsByClassName("report").innerHTML="You are doing a great job, Proceed with the same flow and save every penny(You managed to save"+ saved+  "rupees.)";
        console.log("enjoy");
    }
    else{
        var final_one=document.createElement("div");
        final_one.setAttribute("class","line");
        var final_two=document.createElement("p");
        var final_three=document.createTextNode("We estimated that you have spent more than your budget,you spent "+ loss+ " rupees more than you budget.")
        final_two.appendChild(final_three);
        final_one.appendChild(final_two);
        document.body.appendChild(final_one);
        //document.getElementsByClassName("report").innerHTML="We estimated that you have spent more than your budget,you spent"+ loss+ "rupees more than you budget"
        console.log("fool");
    }
    localStorage.clear("itemsJson");
    localStorage.clear("nextJson");
    localStorage.clear("topper");
}
