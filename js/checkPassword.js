const url_string = window.location.search;
console.log(url_string.split("=")[1])
// var url = new URL(url_string);
const id = parseInt(url_string.split("=")[1]);
function checkPass(){
    const password= document.getElementById('pass').value;
    //const text = password.value;
    console.log(password)
    if(password == "P0rtf0li0@S" || password == "matchbox")
    {
        window.location.href = "projectsCaseStudy.html?id=" + id;
    }
    else{
        alert("Invalid password");
    }
}