var pass = "3850286400";
console.log("hello")

function activate(){
    var paswd = document.getElementById("password").value;
    if (paswd == pass) {
        //alert("correct password");
        //window.location.replace('https://www.google.com')
        window.location.href = "https://cicada-3301cse.github.io/cicada3301-level3/";
    }
    else{
        alert("wrogn password");
    }
}
