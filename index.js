function getdata() {
    let fullname = document.getElementById("uname")?.value; // optional if you don’t have fullname field in login
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    console.log(username);
    console.log(password);

    // ✅ check only username & password
    if (username && password) {
        window.location.href = "todolist.html";
    } else {
        alert("Enter all details");
    }
}
function getdatafromsignup() {
    let fullname = document.getElementById("uname").value;
    let username = document.getElementById("username").value;
    confopassword = document.getElementById("confopassword").value;
    password = document.getElementById("password").value;
    if (password == confopassword)
    {
        // alert("Sign in successful");
        window.location.href = "todolist.html";
    }
    else
        alert("Password mismatch");
}