function checkPass(){
    const password= document.getElementById('pass').value;
    //const text = password.value;
    console.log(password)
    if(password == "P0rtf0li0@S" || password == "matchbox")
    {
        window.location.href = "projectsCaseStudy.html?id=" + 1;
    }
    else{
        alert("Invalid password");
    }
}