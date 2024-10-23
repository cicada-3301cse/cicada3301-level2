var pass = "1155350000";
console.log("hello")

function activate(){
    var paswd = document.getElementById("password").value;
    if (paswd == pass) {
        //alert("correct password");
        //window.location.replace('https://www.google.com')
        window.location.href = "https://www.w3schools.com";
    }
    else{
        alert("wrogn password");
    }
}