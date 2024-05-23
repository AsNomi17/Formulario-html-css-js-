var alert = document.getElementById("Alert");
var check = document.getElementById("exampleCheck1");
var succes = document.getElementById("success");


function validate(){
    var user = document.getElementById("exampleInputUsarme1").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    
    if(user.length == '' || email.length == '' || password.length == ''){
        alert.style.display = "block";
        return;
    }

    if(user.length <= 4 || password.length <= 6){
        alert.style.display = "block";
        return;
    }

    succes.style.display = "block";
    
}

document.getElementById("bttn2").addEventListener('click',function(){
    succes.style.display = "none";
    return;
});


document.getElementById("bttn").addEventListener('click', function(){
    alert.style.display = "none";
    return;
});



check.addEventListener('change', function(){
    var password = document.getElementById("exampleInputPassword1");
   
    if(event.target.checked){
        password.type = "password";
    }else{
        password.type = "text";
    }
});