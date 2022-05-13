
// CODE FOR LOGIN PAGE

// Accessing the HTML elements using DOM
const login = document.querySelector("#login");
const password = document.querySelector("#password");


// Function to validate the login and password, with callback
function validateForm(callback){
    if(login.value !== "admin" || password.value !== "12345"){
                alert("Please enter the right credentials")}
       callback()
     }

// Function to redirect to the main page if login and password are correct
function redirect(){
    if(login.value === "admin" && password.value === "12345"){
        window.location.href = "todo list page.html"
    }
}

// CODE FOR RETRIEVING API
// Function to retrieve todo list API using AJAX
function displaylist(){
var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange=function(){
    try {
        if(httpRequest.readyState===XMLHttpRequest.DONE){
            if(httpRequest.status===200){
                console.log(httpRequest.responseText);
                display(httpRequest.responseText);
            }
            else{
                alert("Error from API");
            }
        }
    } catch (e) {
        alert(e.description);
    }
};
try {
    httpRequest.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    httpRequest.send();
}
 catch (e) {
    alert(e.description);
}
}

function logout(){
    window.location.href="index.html";
}

// CODE FOR DISPLAYING THE DATA IN A TABLE
function display(data){

    var list = JSON.parse(data);
    let table = document.getElementById("todotable");

    for(var i=0;i<list.length;i++){

        let rowcount = table.rows.length;
        var row = table.insertRow(rowcount);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = list[i].id;

        var cell2 = row.insertCell(1);
        cell2.innerHTML = list[i].title;

        var cell3 = row.insertCell(2);
        var element =  document.createElement("input");
        element.type = "checkbox";

        if(list[i].completed==true){
            element.setAttribute("checked","true");
            element.setAttribute("disabled","true");
        }

        element.addEventListener('change',(event)=>{
            if(event.currentTarget.checked){
                count++;
                checkCounter();
            }
            else{
                count--;
            }
        })
        cell3.appendChild(element); 
    }
    
}

// GETTING THE COMPLETED ALERT USING PROMISE
var count = 0;
function checkCounter(){ 
    let promise = new Promise(function(resolve,reject){
        if(count>=5){
            resolve("Congrats. 5 Tasks have been Successfully Completed");
        }
    })
    promise.then(function(resolve){
        alert(resolve);
    })
}
